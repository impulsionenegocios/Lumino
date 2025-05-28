// data/servicesData.ts - Corrigido baseado no blogData.ts que funciona

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

// Função principal para buscar serviço por slug (baseada no blogData.ts)
export async function getServiceBySlug(slug: string): Promise<ServiceData | null> {
  console.log(`🔍 SSR: Buscando serviço com slug: ${slug}`);
  
  try {
    // URL igual ao padrão do blog que funciona
    const res = await fetch(
      `http://directus:8055/items/Services?filter[slug][_eq]=${slug}&fields=*,faq.services_faq_id.*,benefits.services_benefits_id.*,process.services_process_id.*,beforeAfter.services_before_after_id.*,testimonials.services_testimonials_id.*,details.services_details_id.*&limit=1`
    );

    console.log(`📡 Status da resposta: ${res.status}`);

    if (!res.ok) {
      throw new Error(`Erro ao buscar serviço: ${res.statusText}`);
    }

    const json = await res.json();
    console.log(`📦 Dados recebidos:`, JSON.stringify(json, null, 2));

    if (!json.data || json.data.length === 0) {
      console.warn(`⚠️ Serviço não encontrado: ${slug}`);
      return null;
    }

    const service = json.data[0];
    console.log(`🏗️ Processando dados do serviço:`, service.slug);

    // Processa os dados igual ao blog
    const processedService: ServiceData = {
      slug: service.slug,
      title: service.title,
      subtitle: service.subtitle,
      description: service.description,
      
      heroImage: service.heroImage ? `http://localhost:8055/assets/${service.heroImage}` : '/images/placeholder-service.jpg',
      heroTitle: service.heroTitle || service.title,
      heroSubtitle: service.heroSubtitle || service.subtitle,
      heroDescription: service.heroDescription || service.description,
      heroPrice: service.heroPrice || 'Consulte',
      heroOriginalPrice: service.heroOriginalPrice,
      heroDiscount: service.heroDiscount,
      
      benefits: Array.isArray(service.benefits) ? service.benefits.map((item: any) => {
        const benefit = item.services_benefits_id;
        return {
          icon: benefit?.icon || '✨',
          title: benefit?.title || 'Benefício',
          description: benefit?.description || ''
        };
      }).filter((b: any) => b.title !== 'Benefício') : [],
      
      process: Array.isArray(service.process) ? service.process.map((item: any, index: number) => {
        const step = item.services_process_id;
        return {
          step: step?.sort || index + 1,
          title: step?.title || 'Passo',
          description: step?.description || '',
          icon: step?.icon || '📋'
        };
      }).filter((p: any) => p.title !== 'Passo').sort((a: any, b: any) => a.step - b.step) : [],
      
      beforeAfter: Array.isArray(service.beforeAfter) ? service.beforeAfter.map((item: any) => {
        const comparison = item.services_before_after_id;
        return {
          before: comparison?.before ? `http://localhost:8055/assets/${comparison.before}` : '',
          after: comparison?.after ? `http://localhost:8055/assets/${comparison.after}` : '',
          description: comparison?.description || ''
        };
      }).filter((ba: any) => ba.before && ba.after) : [],
      
      faq: Array.isArray(service.faq) ? service.faq.map((item: any) => {
        const faqItem = item.services_faq_id;
        return {
          question: faqItem?.question || '',
          answer: faqItem?.answer || 'Resposta em breve'
        };
      }).filter((f: any) => f.question) : [],
      
      testimonials: Array.isArray(service.testimonials) ? service.testimonials.map((item: any) => {
        const testimonial = item.services_testimonials_id;
        return {
          name: testimonial?.name || 'Cliente',
          text: testimonial?.text || '',
          rating: parseInt(testimonial?.rating) || 5,
          image: testimonial?.image ? `http://localhost:8055/assets/${testimonial.image}` : '/images/default-avatar.jpg',
          treatment: testimonial?.treatment || service.title
        };
      }).filter((t: any) => t.text && t.name !== 'Cliente') : [],
      
      details: (() => {
        if (Array.isArray(service.details) && service.details.length > 0) {
          const detail = service.details[0].services_details_id;
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

    console.log(`✅ Serviço processado com sucesso:`, processedService.slug);
    return processedService;

  } catch (error) {
    console.error('❌ Erro ao buscar serviço:', error);
    return null;
  }
}

// Função para buscar todos os serviços (baseada no getBlogPosts)
export async function getAllServices(): Promise<ServiceData[]> {
  console.log(`📋 SSR: Buscando todos os serviços`);
  
  try {
    const res = await fetch(
      'http://directus:8055/items/Services?fields=slug,title,subtitle,description,heroImage,heroPrice,heroOriginalPrice,heroDiscount,status&filter[status][_eq]=published'
    );

    console.log(`📡 Status da resposta getAllServices: ${res.status}`);

    if (!res.ok) {
      throw new Error(`Erro ao buscar serviços: ${res.statusText}`);
    }

    const json = await res.json();
    console.log(`📦 Todos os serviços recebidos:`, json.data?.length || 0);

    if (!json.data) {
      console.warn('⚠️ Nenhum data encontrado na resposta do Directus');
      return [];
    }

    if (json.data.length === 0) {
      console.warn('⚠️ Nenhum serviço publicado encontrado');
      return [];
    }

    const mappedServices = json.data.map((service: any) => ({
      slug: service.slug,
      title: service.title,
      subtitle: service.subtitle,
      description: service.description,
      heroImage: service.heroImage ? `http://localhost:8055/assets/${service.heroImage}` : '/images/placeholder-service.jpg',
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

    console.log(`✅ ${mappedServices.length} serviços processados com sucesso`);
    return mappedServices;

  } catch (error) {
    console.error('❌ Erro detalhado ao buscar serviços:', error);
    return [];
  }
}