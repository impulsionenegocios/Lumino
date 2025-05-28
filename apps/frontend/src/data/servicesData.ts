// data/servicesData.ts - Versão Production Ready

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  
  // Hero Section
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroPrice: string;
  heroOriginalPrice?: string;
  heroDiscount?: string;
  
  // Benefícios principais
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  
  // Processo do tratamento
  process: {
    step: number;
    title: string;
    description: string;
    icon: string;
  }[];
  
  // Antes e depois
  beforeAfter?: {
    before: string;
    after: string;
    description: string;
  }[];
  
  // FAQ
  faq: {
    question: string;
    answer: string;
  }[];
  
  // Depoimentos
  testimonials: {
    name: string;
    text: string;
    rating: number;
    image: string;
    treatment: string;
  }[];
  
  // Detalhes técnicos
  details: {
    duration: string;
    sessions: string;
    results: string;
    recovery: string;
  };
  
  // CTAs
  primaryCTA: string;
  secondaryCTA: string;
  whatsappNumber: string;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

// Classe de erro customizada para problemas com o Directus
export class DirectusError extends Error {
  constructor(message: string, public status?: number, public url?: string) {
    super(message);
    this.name = 'DirectusError';
  }
}

// Verifica se está em ambiente de desenvolvimento
function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development' || 
         (typeof import.meta !== 'undefined' && import.meta.env?.DEV);
}

// Função para obter URL base do Directus
function getDirectusUrl(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env?.DIRECTUS_URL) {
    return import.meta.env.DIRECTUS_URL;
  }
  
  // Fallback para Docker
  return 'http://directus:8055';
}

// Função principal para buscar serviço por slug
export async function getServiceBySlug(slug: string): Promise<ServiceData | null> {
  console.log(`🔍 SSR: Buscando serviço com slug: ${slug}`);
  
  try {
    const baseUrl = getDirectusUrl();
    console.log(`🌐 Base URL: ${baseUrl} | Ambiente: ${isDevelopment() ? 'DEV' : 'PROD'}`);
    
    // URL corrigida com encoding adequado
    const url = `${baseUrl}/items/Services` +
      `?filter%5Bslug%5D%5B_eq%5D=${encodeURIComponent(slug)}` +
      `&fields=*%2Cfaq.services_faq_id.*%2Cbenefits.services_benefits_id.*%2Cprocess.services_process_id.*%2CbeforeAfter.services_before_after_id.*%2Ctestimonials.services_testimonials_id.*%2Cdetails.services_details_id.*` +
      `&limit=1`;
    
    console.log(`📡 URL: ${url}`);
    
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    console.log(`📡 Status: ${res.status}`);

    if (!res.ok) {
      const error = new DirectusError(
        `Erro ao buscar serviço: ${res.statusText}`,
        res.status,
        url
      );
      
      console.error(`❌ Erro HTTP ${res.status}: ${res.statusText}`);
      
      // EM DESENVOLVIMENTO: tenta busca alternativa
      if (isDevelopment()) {
        console.log(`🔄 DEV: Tentando busca alternativa...`);
        return await getServiceBySlugFallback(slug);
      }
      
      // EM PRODUÇÃO: lança erro imediatamente
      throw error;
    }

    const json = await res.json();
    console.log(`📦 Dados recebidos: ${json.data?.length || 0} registros`);

    if (!json.data || json.data.length === 0) {
      console.warn(`⚠️ Serviço '${slug}' não encontrado`);
      
      // EM DESENVOLVIMENTO: tenta busca alternativa
      if (isDevelopment()) {
        console.log(`🔄 DEV: Tentando busca alternativa...`);
        return await getServiceBySlugFallback(slug);
      }
      
      // EM PRODUÇÃO: retorna null (não encontrado)
      return null;
    }

    const service = json.data[0];
    console.log(`🏗️ Processando dados do serviço: ${service.slug}`);

    return transformServiceData(service, baseUrl);

  } catch (error) {
    console.error('❌ Erro crítico ao buscar serviço:', error);
    
    // EM DESENVOLVIMENTO: tenta fallback
    if (isDevelopment() && !(error instanceof DirectusError)) {
      console.log(`🔄 DEV: Usando fallback devido a erro de rede`);
      return getDevFallback(slug);
    }
    
    // EM PRODUÇÃO: re-lança o erro para ser tratado no nível superior
    throw error;
  }
}

// Função de fallback APENAS para desenvolvimento
async function getServiceBySlugFallback(slug: string): Promise<ServiceData | null> {
  if (!isDevelopment()) {
    throw new Error('Fallback não permitido em produção');
  }
  
  console.log(`🔄 DEV: Buscando todos os serviços e filtrando por ${slug}`);
  
  try {
    const baseUrl = getDirectusUrl();
    const url = `${baseUrl}/items/Services?fields=*%2Cfaq.services_faq_id.*%2Cbenefits.services_benefits_id.*%2Cprocess.services_process_id.*%2CbeforeAfter.services_before_after_id.*%2Ctestimonials.services_testimonials_id.*%2Cdetails.services_details_id.*`;
    
    const res = await fetch(url);
    
    if (!res.ok) {
      console.error(`❌ Fallback também falhou: ${res.status}`);
      return getDevFallback(slug);
    }
    
    const json = await res.json();
    console.log(`📦 Fallback: ${json.data?.length || 0} serviços encontrados`);
    
    if (!json.data || json.data.length === 0) {
      return getDevFallback(slug);
    }
    
    const service = json.data.find((s: any) => s.slug === slug);
    
    if (!service) {
      console.warn(`⚠️ Serviço ${slug} não encontrado na lista completa`);
      return getDevFallback(slug);
    }
    
    console.log(`✅ Serviço encontrado via fallback: ${service.slug}`);
    return transformServiceData(service, baseUrl);
    
  } catch (error) {
    console.error('❌ Fallback falhou:', error);
    return getDevFallback(slug);
  }
}

// Função para transformar dados do Directus
function transformServiceData(service: any, baseUrl: string): ServiceData {
  return {
    slug: service.slug,
    title: service.title,
    subtitle: service.subtitle,
    description: service.description,
    
    heroImage: service.heroImage ? `${baseUrl}/assets/${service.heroImage}` : '/images/placeholder-service.jpg',
    heroTitle: service.heroTitle || service.title,
    heroSubtitle: service.heroSubtitle || service.subtitle,
    heroDescription: service.heroDescription || service.description,
    heroPrice: service.heroPrice || 'Consulte',
    heroOriginalPrice: service.heroOriginalPrice,
    heroDiscount: service.heroDiscount,
    
    benefits: Array.isArray(service.benefits) ? service.benefits.map((item: any) => {
      const benefit = item.services_benefits_id || item;
      return {
        icon: benefit?.icon || '✨',
        title: benefit?.title || 'Benefício',
        description: benefit?.description || ''
      };
    }).filter((b: any) => b.title && b.title !== 'Benefício') : [],
    
    process: Array.isArray(service.process) ? service.process.map((item: any, index: number) => {
      const step = item.services_process_id || item;
      return {
        step: step?.sort || index + 1,
        title: step?.title || 'Passo',
        description: step?.description || '',
        icon: step?.icon || '📋'
      };
    }).filter((p: any) => p.title && p.title !== 'Passo').sort((a: any, b: any) => a.step - b.step) : [],
    
    beforeAfter: Array.isArray(service.beforeAfter) ? service.beforeAfter.map((item: any) => {
      const comparison = item.services_before_after_id || item;
      return {
        before: comparison?.before ? `${baseUrl}/assets/${comparison.before}` : '',
        after: comparison?.after ? `${baseUrl}/assets/${comparison.after}` : '',
        description: comparison?.description || ''
      };
    }).filter((ba: any) => ba.before && ba.after) : [],
    
    faq: Array.isArray(service.faq) ? service.faq.map((item: any) => {
      const faqItem = item.services_faq_id || item;
      return {
        question: faqItem?.question || '',
        answer: faqItem?.answer || 'Resposta em breve'
      };
    }).filter((f: any) => f.question) : [],
    
    testimonials: Array.isArray(service.testimonials) ? service.testimonials.map((item: any) => {
      const testimonial = item.services_testimonials_id || item;
      return {
        name: testimonial?.name || 'Cliente',
        text: testimonial?.text || '',
        rating: parseInt(testimonial?.rating) || 5,
        image: testimonial?.image ? `${baseUrl}/assets/${testimonial.image}` : '/images/default-avatar.jpg',
        treatment: testimonial?.treatment || service.title
      };
    }).filter((t: any) => t.text && t.name !== 'Cliente') : [],
    
    details: (() => {
      if (Array.isArray(service.details) && service.details.length > 0) {
        const detail = service.details[0].services_details_id || service.details[0];
        return {
          duration: detail?.duration || '30 minutos',
          sessions: detail?.sessions || '1 sessão',
          results: detail?.results || '7 dias',
          recovery: detail?.recovery || 'Imediato'
        };
      }
      return {
        duration: '30 minutos',
        sessions: '1 sessão',
        results: '7 dias',
        recovery: 'Imediato'
      };
    })(),
    
    primaryCTA: service.primaryCTA || 'Agendar Consulta',
    secondaryCTA: service.secondaryCTA || 'Saiba Mais',
    whatsappNumber: service.whatsappNumber || '62983265797',
    
    metaTitle: service.metaTitle || `${service.title} | Lumino Clínica`,
    metaDescription: service.metaDescription || service.description,
    keywords: typeof service.keywords === 'string' ? 
      service.keywords.split(',').map((k: string) => k.trim()) : []
  };
}

// Fallback APENAS para desenvolvimento (dados mínimos para testar UI)
function getDevFallback(slug: string): ServiceData {
  if (!isDevelopment()) {
    throw new Error('Fallback de desenvolvimento não permitido em produção');
  }
  
  console.log(`🔄 DEV: Usando fallback de desenvolvimento para: ${slug}`);
  
  return {
    slug: slug,
    title: `[DEV] ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
    subtitle: '⚠️ DADOS DE DESENVOLVIMENTO - Directus offline',
    description: 'Este é um fallback para desenvolvimento. Em produção, esta página retornaria erro 500.',
    heroImage: '/images/placeholder-service.jpg',
    heroTitle: `[DEV] ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
    heroSubtitle: '⚠️ Modo de desenvolvimento',
    heroDescription: 'Dados fictícios para desenvolvimento quando Directus está offline.',
    heroPrice: 'Consulte',
    heroOriginalPrice: undefined,
    heroDiscount: undefined,
    benefits: [
      {
        icon: '⚠️',
        title: 'Modo Desenvolvimento',
        description: 'Estes são dados fictícios'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Dados Fictícios',
        description: 'Em produção esta página retornaria erro',
        icon: '🔧'
      }
    ],
    beforeAfter: [],
    faq: [
      {
        question: 'Por que vejo esta mensagem?',
        answer: 'Você está em modo de desenvolvimento e o Directus está offline. Em produção, esta página retornaria erro 500.'
      }
    ],
    testimonials: [],
    details: {
      duration: '30 minutos',
      sessions: '1 sessão',
      results: '7 dias',
      recovery: 'Imediato'
    },
    primaryCTA: 'Agendar Consulta',
    secondaryCTA: 'Saiba Mais',
    whatsappNumber: '62983265797',
    metaTitle: `[DEV] ${slug} | Lumino Clínica`,
    metaDescription: 'Página de desenvolvimento - Directus offline',
    keywords: ['desenvolvimento', 'teste']
  };
}

// Função para buscar todos os serviços
export async function getAllServices(): Promise<ServiceData[]> {
  console.log(`📋 SSR: Buscando todos os serviços`);
  
  try {
    const baseUrl = getDirectusUrl();
    const url = `${baseUrl}/items/Services?fields=slug,title,subtitle,description,heroImage,heroPrice,heroOriginalPrice,heroDiscount,status&filter%5Bstatus%5D%5B_eq%5D=published`;
    
    const res = await fetch(url);
    console.log(`📡 Status getAllServices: ${res.status}`);

    if (!res.ok) {
      const error = new DirectusError(
        `Erro ao buscar todos os serviços: ${res.statusText}`,
        res.status,
        url
      );
      
      console.error(`❌ Erro ao buscar todos os serviços: ${res.status}`);
      
      // EM DESENVOLVIMENTO: retorna array vazio (para não quebrar)
      if (isDevelopment()) {
        console.log(`🔄 DEV: Retornando array vazio devido a erro`);
        return [];
      }
      
      // EM PRODUÇÃO: lança erro
      throw error;
    }

    const json = await res.json();
    console.log(`📦 Todos os serviços: ${json.data?.length || 0} encontrados`);

    if (!json.data || json.data.length === 0) {
      return [];
    }

    const mappedServices = json.data.map((service: any) => ({
      slug: service.slug,
      title: service.title,
      subtitle: service.subtitle,
      description: service.description,
      heroImage: service.heroImage ? `${baseUrl}/assets/${service.heroImage}` : '/images/placeholder-service.jpg',
      heroTitle: service.title,
      heroSubtitle: service.subtitle,
      heroDescription: service.description,
      heroPrice: service.heroPrice || 'Consulte',
      heroOriginalPrice: service.heroOriginalPrice,
      heroDiscount: service.heroDiscount,
      benefits: [],
      process: [],
      beforeAfter: [],
      faq: [],
      testimonials: [],
      details: {
        duration: '',
        sessions: '',
        results: '',
        recovery: ''
      },
      primaryCTA: 'Agendar Consulta',
      secondaryCTA: 'Saiba Mais',
      whatsappNumber: '62983265797',
      metaTitle: `${service.title} | Lumino Clínica`,
      metaDescription: service.description,
      keywords: []
    }));

    console.log(`✅ ${mappedServices.length} serviços processados`);
    return mappedServices;

  } catch (error) {
    console.error('❌ Erro ao buscar todos os serviços:', error);
    
    // EM DESENVOLVIMENTO: retorna array vazio
    if (isDevelopment()) {
      console.log(`🔄 DEV: Retornando array vazio devido a erro`);
      return [];
    }
    
    // EM PRODUÇÃO: re-lança erro
    throw error;
  }
}