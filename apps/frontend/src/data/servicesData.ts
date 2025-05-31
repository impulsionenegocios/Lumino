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
  heroPrice?: string;
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
  constructor(
    message: string,
    public status?: number,
    public url?: string,
  ) {
    super(message);
    this.name = 'DirectusError';
  }
}

const directusUrl = import.meta.env.PUBLIC_DIRECTUS_INTERNAL_URL || 'http://localhost:8055';
const directusPublicUrl = import.meta.env.PUBLIC_DIRECTUS_EXTERNAL_URL || 'http://localhost:8055';

// Função principal para buscar serviço por slug
export async function getServiceBySlug(slug: string): Promise<ServiceData | null> {
  console.log(`🔍 SSR: Buscando serviço com slug: ${slug}`);

  try {
    console.log(`🌐 Base URL: ${directusUrl}`);
    
    // URL corrigida com encoding adequado
    const url =
      `${directusUrl}/items/services` +
      `?filter%5Bslug%5D%5B_eq%5D=${encodeURIComponent(slug)}` +
      `&fields=*%2Cfaq.services_faq_id.*%2Cbenefits.services_benefits_id.*%2Cprocess.services_process_id.*%2CbeforeAfter.services_before_after_id.*%2Ctestimonials.services_testimonials_id.*%2Cdetails.services_details_id.*` +
      `&limit=1`;

    console.log(`📡 URL: ${url}`);

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    console.log(`📡 Status: ${res.status}`);

    if (!res.ok) {
      const error = new DirectusError(`Erro ao buscar serviço: ${res.statusText}`, res.status, url);
      console.error(`❌ Erro HTTP ${res.status}: ${res.statusText}`);
      throw error;
    }

    const json = await res.json();
    console.log(`📦 Dados recebidos: ${json.data?.length || 0} registros`);

    if (!json.data || json.data.length === 0) {
      console.warn(`⚠️ Serviço '${slug}' não encontrado`);
      return null;
    }

    const service = json.data[0];
    console.log(`🏗️ Processando dados do serviço: ${service.slug}`);

    return transformServiceData(service, directusUrl);
  } catch (error) {
    console.error('❌ Erro crítico ao buscar serviço:', error);
    throw error;
  }
}

// Função para transformar dados do Directus
function transformServiceData(service: any, baseUrl: string): ServiceData {
  return {
    slug: service.slug,
    title: service.title,
    subtitle: service.subtitle,
    description: service.description,

    // Hero Section
    heroImage: service.heroImage
      ? `${directusPublicUrl}/assets/${service.heroImage}`
      : '/images/placeholder-service.jpg',
    heroTitle: service.heroTitle || service.title,
    heroSubtitle: service.heroSubtitle || service.subtitle,
    heroDescription: service.heroDescription || service.description,
    heroPrice: service.heroPrice || undefined,
    heroOriginalPrice: service.heroOriginalPrice || undefined,
    heroDiscount: service.heroDiscount || undefined,

    // Benefits
    benefits: Array.isArray(service.benefits)
      ? service.benefits
          .map((item: any) => {
            const benefit = item.services_benefits_id || item;
            return {
              icon: benefit?.icon || '✨',
              title: benefit?.title || 'Benefício',
              description: benefit?.description || '',
            };
          })
          .filter((b: any) => b.title && b.title !== 'Benefício')
      : [],

    // Process
    process: Array.isArray(service.process)
      ? service.process
          .map((item: any, index: number) => {
            const step = item.services_process_id || item;
            return {
              step: step?.sort || step?.step || index + 1,
              title: step?.title || 'Passo',
              description: step?.description || '',
              icon: step?.icon || '📋',
            };
          })
          .filter((p: any) => p.title && p.title !== 'Passo')
          .sort((a: any, b: any) => a.step - b.step)
      : [],

    // Before/After
    beforeAfter: Array.isArray(service.beforeAfter)
      ? service.beforeAfter
          .map((item: any) => {
            const comparison = item.services_before_after_id || item;
            return {
              before: comparison?.before ? `${directusPublicUrl}/assets/${comparison.before}` : '',
              after: comparison?.after ? `${directusPublicUrl}/assets/${comparison.after}` : '',
              description: comparison?.description || '',
            };
          })
          .filter((ba: any) => ba.before && ba.after)
      : [],

    // FAQ
    faq: Array.isArray(service.faq)
      ? service.faq
          .map((item: any) => {
            const faqItem = item.services_faq_id || item;
            return {
              question: faqItem?.question || '',
              answer: faqItem?.answer || 'Resposta em breve',
            };
          })
          .filter((f: any) => f.question)
      : [],

    // Testimonials
    testimonials: Array.isArray(service.testimonials)
      ? service.testimonials
          .map((item: any) => {
            const testimonial = item.services_testimonials_id || item;
            return {
              name: testimonial?.name || 'Cliente',
              text: testimonial?.text || '',
              rating: parseInt(testimonial?.rating) || 5,
              image: testimonial?.image
                ? `${directusPublicUrl}/assets/${testimonial.image}`
                : '/images/default-avatar.jpg',
              treatment: testimonial?.treatment || service.title,
            };
          })
          .filter((t: any) => t.text && t.name !== 'Cliente')
      : [],

    // Details
    details: (() => {
      if (Array.isArray(service.details) && service.details.length > 0) {
        const detail = service.details[0].services_details_id || service.details[0];
        return {
          duration: detail?.duration || '30 minutos',
          sessions: detail?.sessions || '1 sessão',
          results: detail?.results || '7 dias',
          recovery: detail?.recovery || 'Imediato',
        };
      }
      // Valores padrão se details não existir
      return {
        duration: service.duration || '30 minutos',
        sessions: service.sessions || '1 sessão',
        results: service.results || '7 dias',
        recovery: service.recovery || 'Imediato',
      };
    })(),

    // CTAs
    primaryCTA: service.primaryCTA || 'Agendar Consulta',
    secondaryCTA: service.secondaryCTA || 'Saiba Mais',
    whatsappNumber: service.whatsappNumber || '62983265797',

    // SEO
    metaTitle: service.metaTitle || `${service.title} | Lumino Clínica`,
    metaDescription: service.metaDescription || service.description,
    keywords:
      typeof service.keywords === 'string'
        ? service.keywords.split(',').map((k: string) => k.trim())
        : Array.isArray(service.keywords)
        ? service.keywords
        : [],
  };
}

// Função para buscar todos os serviços
export async function getAllServices(): Promise<ServiceData[]> {
  console.log(`📋 SSR: Buscando todos os serviços`);

  try {
    const url = `${directusUrl}/items/services?fields=slug,title,subtitle,description,heroImage,status&filter%5Bstatus%5D%5B_eq%5D=published`;

    const res = await fetch(url);
    console.log(`📡 Status getAllServices: ${res.status}`);

    if (!res.ok) {
      const error = new DirectusError(
        `Erro ao buscar todos os serviços: ${res.statusText}`,
        res.status,
        url,
      );
      console.error(`❌ Erro ao buscar todos os serviços: ${res.status}`);
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
      heroImage: service.heroImage
        ? `${directusPublicUrl}/assets/${service.heroImage}`
        : '/images/placeholder-service.jpg',
      heroTitle: service.title,
      heroSubtitle: service.subtitle,
      heroDescription: service.description,
      heroPrice: undefined,
      heroOriginalPrice: undefined,
      heroDiscount: undefined,
      benefits: [],
      process: [],
      beforeAfter: [],
      faq: [],
      testimonials: [],
      details: {
        duration: '30 minutos',
        sessions: '1 sessão',
        results: '7 dias',
        recovery: 'Imediato',
      },
      primaryCTA: 'Agendar Consulta',
      secondaryCTA: 'Saiba Mais',
      whatsappNumber: '62983265797',
      metaTitle: `${service.title} | Lumino Clínica`,
      metaDescription: service.description,
      keywords: [],
    }));

    console.log(`✅ ${mappedServices.length} serviços processados`);
    return mappedServices;
  } catch (error) {
    console.error('❌ Erro ao buscar todos os serviços:', error);
    throw error;
  }
}

// Função para obter caminhos estáticos (útil para getStaticPaths)
export async function getServicePaths() {
  try {
    const services = await getAllServices();
    return services.map(service => ({
      params: { slug: service.slug }
    }));
  } catch (error) {
    console.error('❌ Erro ao obter caminhos dos serviços:', error);
    return [];
  }
}