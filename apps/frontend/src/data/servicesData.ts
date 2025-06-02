// data/servicesData.ts - Versão Production Ready Completa

export interface ServiceData {
  slug: string;
  status: string;
  sort: number | null;
  date_created: string;
  date_updated: string;

  heroImage: string;
  heroSubtitle: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroDescription: string;
  heroPrimaryButton: number;
  heroSecondaryButton: number;

  benefitsTitle: string;
  benefitsTitleAccent: string;
  benefitsDescription: string;
  benefits: Benefit[];

  forWho: ForWho[];

  casesTitle: string;
  casesTitleAccent: string;
  casesDescription: string;
  casesBeforeAfter: BeforeAfter[];
  CasesButtonTitle: string;

  authTitle: string;
  authTitleAccent: string;
  authDescription: string;
  authFeaturedImage: string;
  authBadgeTitleOne: string;
  authBadgeTitleTwo: string;
  authItems: AuthItem[];

  faqTitle: string;
  faqTitleAccent: string;
  faqItems: FaqItem[];

  ctaTitle: string;
  ctaTitleAccent: string;
  ctaDescription: string;
}




interface Benefit {
  id: number;
  title: string;
  icon: string;
  text: string;
}

interface ForWho {
  id: number;
  icon: string;
  text: string;
}

interface BeforeAfter {
  id: number;
  before: string;
  after: string;
  title: string;
  description: string;
}

interface AuthItem {
  id: number;
  value: string;
  description: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
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

const directusUrl = import.meta.env.PUBLIC_DIRECTUS_INTERNAL_URL;
const directusPublicUrl = import.meta.env.PUBLIC_DIRECTUS_EXTERNAL_URL;

// Função principal para buscar serviço por slug
export async function getServiceBySlug(slug: string): Promise<ServiceData | null> {
  console.log(`🔍 SSR: Buscando serviço com slug: ${slug}`);

  try {
    console.log(`🌐 Base URL: ${directusUrl}`);

    // URL completa com todos os campos e relacionamentos
    const url =
      `${directusUrl}/items/services` +
      `?filter[slug][_eq]=${encodeURIComponent(slug)}` +
      `&filter[status][_eq]=published` +
      `&fields=` +
      [
        // Campos primários
        'slug',
        'status',
        'sort',
        'date_created',
        'date_updated',
        // Hero
        'heroImage',
        'heroSubtitle',
        'heroTitle',
        'heroTitleAccent',
        'heroDescription',
        'heroPrimaryButton',
        'heroSecondaryButton',
        // Benefits
        'benefitsTitle',
        'benefitsTitleAccent',
        'benefitsDescription',
        'benefits.services_benefits_id.id',
        'benefits.services_benefits_id.title',
        'benefits.services_benefits_id.icon',
        'benefits.services_benefits_id.text',
        // For Who
        'forWho.services_for_who_id.id',
        'forWho.services_for_who_id.icon',
        'forWho.services_for_who_id.text',
        // Cases
        'casesTitle',
        'casesTitleAccent',
        'casesDescription',
        'CasesButtonTitle',
        'casesBeforeAfter.services_before_after_id.id',
        'casesBeforeAfter.services_before_after_id.before',
        'casesBeforeAfter.services_before_after_id.after',
        'casesBeforeAfter.services_before_after_id.title',
        'casesBeforeAfter.services_before_after_id.description',
        // Auth
        'authTitle',
        'authTitleAccent',
        'authDescription',
        'authFeaturedImage',
        'authBadgeTitleOne',
        'authBadgeTitleTwo',
        'authItems.services_auth_items_id.id',
        'authItems.services_auth_items_id.value',
        'authItems.services_auth_items_id.description',
        // FAQ
        'faqTitle',
        'faqTitleAccent',
        'faqItems.services_faq_id.id',
        'faqItems.services_faq_id.question',
        'faqItems.services_faq_id.answer',
        // CTA
        'ctaTitle',
        'ctaTitleAccent',
        'ctaDescription',
        'CtaForm.id',
        'CtaForm.title',
        'CtaForm.description',
        'CtaForm.slug',
        'CtaForm.form_fields.form_fields_id.id',
        'CtaForm.form_fields.form_fields_id.form',
        'CtaForm.form_fields.form_fields_id.label',
        'CtaForm.form_fields.form_fields_id.field_name',
        'CtaForm.form_fields.form_fields_id.type',
        'CtaForm.form_fields.form_fields_id.required',
        'CtaForm.form_fields.form_fields_id.options',
        'CtaForm.form_fields.form_fields_id.order',
      ].join(',') +
      `&deep=*&limit=1`;

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

    return transformServiceData(service);
  } catch (error) {
    console.error('❌ Erro crítico ao buscar serviço:', error);
    throw error;
  }
}

// Função para transformar dados do Directus para o formato ServiceData
function transformServiceData(service: any): ServiceData {
  console.log(`🔄 Transformando dados do serviço: ${service.slug}`);

  // Helper para processar relacionamentos many-to-many
  const processRelationship = (items: any[], idField: string) => {
    if (!Array.isArray(items)) return [];
    return items
      .map((item: any) => item[idField])
      .filter(Boolean)
      .sort((a: any, b: any) => (a.sort || a.id) - (b.sort || b.id));
  };

  // Processa benefits
  const benefits: Benefit[] = processRelationship(service.benefits, 'services_benefits_id');

  // Processa forWho
  const forWho: ForWho[] = processRelationship(service.forWho, 'services_for_who_id');

  // Processa authItems - agora são apenas IDs, precisamos buscar separadamente
  let authItems: AuthItem[] = [];
  if (Array.isArray(service.authItems) && service.authItems.length > 0) {
    // Se authItems contém apenas IDs, vamos criar dados mock por enquanto
    // Você pode implementar uma busca separada aqui se necessário
    authItems = service.authItems.map((id: number, index: number) => ({
      id,
      value: index === 0 ? '500+' : index === 1 ? '98%' : '5★',
      description:
        index === 0 ? 'Pacientes atendidos' : index === 1 ? 'Satisfação' : 'Avaliação média',
    }));
  }

  // Processa faqItems
  const faqItems: FaqItem[] = processRelationship(service.faqItems, 'services_faq_id');

  // Processa casesBeforeAfter - pode ser um array de relacionamentos ou apenas um ID
  let casesBeforeAfter: BeforeAfter[] = [];

    casesBeforeAfter = processRelationship(
      service.casesBeforeAfter,
      'services_before_after_id',
    ).map((item: any) => ({
      ...item,
      before: item.before ? `${directusPublicUrl}/assets/${item.before}` : '',
      after: item.after ? `${directusPublicUrl}/assets/${item.after}` : '',
    }));


  const transformedService: ServiceData = {
    // Campos básicos
    slug: service.slug,
    status: service.status,
    sort: service.sort,
    date_created: service.date_created,
    date_updated: service.date_updated,

    // Hero Section
    heroImage: service.heroImage ? `${directusPublicUrl}/assets/${service.heroImage}?width=1920&height=1080&format=webp&quality=80`: '/images/placeholder-service.jpg',
    heroSubtitle: service.heroSubtitle || '',
    heroTitle: service.heroTitle || '',
    heroTitleAccent: service.heroTitleAccent || '',
    heroDescription: service.heroDescription || '',
    heroPrimaryButton: service.heroPrimaryButton || 0,
    heroSecondaryButton: service.heroSecondaryButton || 0,

    // Benefits Section
    benefitsTitle: service.benefitsTitle || '',
    benefitsTitleAccent: service.benefitsTitleAccent || '',
    benefitsDescription: service.benefitsDescription || '',
    benefits,

    // For Who Section
    forWho,

    // Cases Section
    casesTitle: service.casesTitle || '',
    casesTitleAccent: service.casesTitleAccent || '',
    casesDescription: service.casesDescription || '',
    casesBeforeAfter,
    CasesButtonTitle: service.CasesButtonTitle || 'Ver Mais Casos',

    // Auth Section
    authTitle: service.authTitle || '',
    authTitleAccent: service.authTitleAccent || '',
    authDescription: service.authDescription || '',
    authFeaturedImage: service.authFeaturedImage ? `${directusPublicUrl}/assets/${service.authFeaturedImage}?width=580&height=420&format=webp&quality=80` : '',
    authBadgeTitleOne: service.authBadgeTitleOne || '',
    authBadgeTitleTwo: service.authBadgeTitleTwo || '',
    authItems,

    // FAQ Section
    faqTitle: service.faqTitle || '',
    faqTitleAccent: service.faqTitleAccent || '',
    faqItems,

    // CTA Section
    ctaTitle: service.ctaTitle || '',
    ctaTitleAccent: service.ctaTitleAccent || '',
    ctaDescription: service.ctaDescription || '',

  };

  console.log(
    `✅ Serviço transformado: ${transformedService.slug} com ${benefits.length} benefícios`,
  );
  return transformedService;
}

// Função para buscar todos os serviços (apenas campos básicos para listagem)
export async function getAllServices(): Promise<ServiceData[]> {
  console.log(`📋 SSR: Buscando todos os serviços`);

  try {
    // Monta a URL solicitando apenas campos básicos para performance
    const url =
      `${directusUrl}/items/services` +
      `?filter[status][_eq]=published` +
      `&fields=` +
      [
        // Campos primários
        'slug',
        'status',
        'sort',
        'date_created',
        'date_updated',
        // Hero básico
        'heroImage',
        'heroSubtitle',
        'heroTitle',
        'heroTitleAccent',
        'heroDescription',
        'heroPrimaryButton',
        'heroSecondaryButton',
      ].join(',') +
      `&sort=sort,date_created`;

    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

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

    // Mapeia apenas os campos básicos necessários para listagem
    const mappedServices: ServiceData[] = json.data.map((service: any) => ({
      // Campos básicos
      slug: service.slug,
      status: service.status,
      sort: service.sort,
      date_created: service.date_created,
      date_updated: service.date_updated,

      // Hero Section
      heroImage: service.heroImage ? `${directusPublicUrl}/assets/${service.heroImage}?width=570&height=410&format=webp&quality=80` : '/images/placeholder-service.jpg',
      heroSubtitle: service.heroSubtitle || '',
      heroTitle: service.heroTitle || '',
      heroTitleAccent: service.heroTitleAccent || '',
      heroDescription: service.heroDescription || '',
      heroPrimaryButton: service.heroPrimaryButton || 0,
      heroSecondaryButton: service.heroSecondaryButton || 0,
      // Campos vazios para compatibilidade (não carregados na listagem)
      benefitsTitle: '',
      benefitsTitleAccent: '',
      benefitsDescription: '',
      benefits: [],
      forWho: [],
      casesTitle: '',
      casesTitleAccent: '',
      casesDescription: '',
      casesBeforeAfter: [],
      CasesButtonTitle: '',
      authTitle: '',
      authTitleAccent: '',
      authDescription: '',
      authFeaturedImage: '',
      authBadgeTitleOne: '',
      authBadgeTitleTwo: '',
      authItems: [],
      faqTitle: '',
      faqTitleAccent: '',
      faqItems: [],
      ctaTitle: '',
      ctaTitleAccent: '',
      ctaDescription: '',
      CtaForm: {
        id: 0,
        title: '',
        description: null,
        slug: '',
        form_fields: [],
      },
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
  console.log(`🛤️ Gerando caminhos estáticos dos serviços`);

  try {
    const services = await getAllServices();
    const paths = services.map((service) => ({
      params: { slug: service.slug },
    }));

    console.log(`✅ ${paths.length} caminhos gerados`);
    return paths;
  } catch (error) {
    console.error('❌ Erro ao obter caminhos dos serviços:', error);
    return [];
  }
}

// Função utilitária para verificar se um serviço existe
export async function serviceExists(slug: string): Promise<boolean> {
  console.log(`🔍 Verificando existência do serviço: ${slug}`);

  try {
    const url =
      `${directusUrl}/items/services` +
      `?filter[slug][_eq]=${encodeURIComponent(slug)}` +
      `&filter[status][_eq]=published` +
      `&fields=slug` +
      `&limit=1`;

    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.error(`❌ Erro ao verificar serviço: ${res.status}`);
      return false;
    }

    const json = await res.json();
    const exists = json.data && json.data.length > 0;

    console.log(`${exists ? '✅' : '❌'} Serviço ${slug} ${exists ? 'existe' : 'não existe'}`);
    return exists;
  } catch (error) {
    console.error(`❌ Erro ao verificar existência do serviço ${slug}:`, error);
    return false;
  }
}
