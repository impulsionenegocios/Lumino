class DirectusError extends Error {
  constructor(message, status, url) {
    super(message);
    this.status = status;
    this.url = url;
    this.name = "DirectusError";
  }
}
const directusUrl = "http://directus:8055";
const directusPublicUrl = "http://localhost:8055";
async function getServiceBySlug(slug) {
  console.log(`🔍 SSR: Buscando serviço com slug: ${slug}`);
  try {
    console.log(`🌐 Base URL: ${directusUrl}`);
    const url = `${directusUrl}/items/services?filter[slug][_eq]=${encodeURIComponent(slug)}&filter[status][_eq]=published&fields=` + [
      // Campos primários
      "slug",
      "status",
      "sort",
      "date_created",
      "date_updated",
      // Hero
      "heroImage",
      "heroSubtitle",
      "heroTitle",
      "heroTitleAccent",
      "heroDescription",
      "heroPrimaryButton",
      "heroSecondaryButton",
      // Benefits
      "benefitsTitle",
      "benefitsTitleAccent",
      "benefitsDescription",
      "benefits.services_benefits_id.id",
      "benefits.services_benefits_id.title",
      "benefits.services_benefits_id.icon",
      "benefits.services_benefits_id.text",
      // For Who
      "forWho.services_for_who_id.id",
      "forWho.services_for_who_id.icon",
      "forWho.services_for_who_id.text",
      // Cases
      "casesTitle",
      "casesTitleAccent",
      "casesDescription",
      "CasesButtonTitle",
      "casesBeforeAfter.services_before_after_id.id",
      "casesBeforeAfter.services_before_after_id.before",
      "casesBeforeAfter.services_before_after_id.after",
      "casesBeforeAfter.services_before_after_id.title",
      "casesBeforeAfter.services_before_after_id.description",
      // Auth
      "authTitle",
      "authTitleAccent",
      "authDescription",
      "authFeaturedImage",
      "authBadgeTitleOne",
      "authBadgeTitleTwo",
      "authItems.services_auth_items_id.id",
      "authItems.services_auth_items_id.value",
      "authItems.services_auth_items_id.description",
      // FAQ
      "faqTitle",
      "faqTitleAccent",
      "faqItems.services_faq_id.id",
      "faqItems.services_faq_id.question",
      "faqItems.services_faq_id.answer",
      // CTA
      "ctaTitle",
      "ctaTitleAccent",
      "ctaDescription",
      "CtaForm.id",
      "CtaForm.title",
      "CtaForm.description",
      "CtaForm.slug",
      "CtaForm.form_fields.form_fields_id.id",
      "CtaForm.form_fields.form_fields_id.form",
      "CtaForm.form_fields.form_fields_id.label",
      "CtaForm.form_fields.form_fields_id.field_name",
      "CtaForm.form_fields.form_fields_id.type",
      "CtaForm.form_fields.form_fields_id.required",
      "CtaForm.form_fields.form_fields_id.options",
      "CtaForm.form_fields.form_fields_id.order"
    ].join(",") + `&deep=*&limit=1`;
    console.log(`📡 URL: ${url}`);
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
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
    console.error("❌ Erro crítico ao buscar serviço:", error);
    throw error;
  }
}
function transformServiceData(service) {
  console.log(`🔄 Transformando dados do serviço: ${service.slug}`);
  const processRelationship = (items, idField) => {
    if (!Array.isArray(items)) return [];
    return items.map((item) => item[idField]).filter(Boolean).sort((a, b) => (a.sort || a.id) - (b.sort || b.id));
  };
  const benefits = processRelationship(service.benefits, "services_benefits_id");
  const forWho = processRelationship(service.forWho, "services_for_who_id");
  let authItems = [];
  if (Array.isArray(service.authItems) && service.authItems.length > 0) {
    authItems = service.authItems.map((id, index) => ({
      id,
      value: index === 0 ? "500+" : index === 1 ? "98%" : "5★",
      description: index === 0 ? "Pacientes atendidos" : index === 1 ? "Satisfação" : "Avaliação média"
    }));
  }
  const faqItems = processRelationship(service.faqItems, "services_faq_id");
  let casesBeforeAfter = [];
  if (Array.isArray(service.casesBeforeAfter)) {
    casesBeforeAfter = processRelationship(service.casesBeforeAfter, "services_before_after_id").map((item) => ({
      ...item,
      before: item.before ? `${directusPublicUrl}/assets/${item.before}` : "",
      after: item.after ? `${directusPublicUrl}/assets/${item.after}` : ""
    }));
  } else if (service.casesBeforeAfter) {
    casesBeforeAfter = [{
      id: service.casesBeforeAfter,
      before: "/images/caso-antes-1.jpg",
      after: "/images/caso-depois-1.jpg",
      title: "Transformação Completa",
      description: "Resultado após tratamento com alinhador invisível"
    }];
  }
  let ctaForm = {
    id: 0,
    title: "Formulário Padrão",
    description: null,
    slug: "contato",
    form_fields: []
  };
  if (service.CtaForm && typeof service.CtaForm === "object") {
    console.log("CtaForm raw data:", JSON.stringify(service.CtaForm, null, 2));
    ctaForm = {
      id: service.CtaForm.id,
      title: service.CtaForm.title || "Formulário de Contato",
      description: service.CtaForm.description,
      slug: service.CtaForm.slug,
      form_fields: []
    };
    if (Array.isArray(service.CtaForm.form_fields)) {
      ctaForm.form_fields = service.CtaForm.form_fields.map((item) => {
        if (item && item.form_fields_id) {
          return item.form_fields_id;
        }
        return item;
      }).filter((field) => field && field.id).sort((a, b) => (a.order || 0) - (b.order || 0)).map((field) => ({
        id: field.id,
        form: field.form,
        label: field.label,
        field_name: field.field_name,
        type: field.type,
        required: field.required,
        options: field.options,
        order: field.order
      }));
    }
    console.log("CtaForm processed:", JSON.stringify(ctaForm, null, 2));
  }
  const transformedService = {
    // Campos básicos
    slug: service.slug,
    status: service.status,
    sort: service.sort,
    date_created: service.date_created,
    date_updated: service.date_updated,
    // Hero Section
    heroImage: service.heroImage ? `${directusPublicUrl}/assets/${service.heroImage}` : "/images/placeholder-service.jpg",
    heroSubtitle: service.heroSubtitle || "",
    heroTitle: service.heroTitle || "",
    heroTitleAccent: service.heroTitleAccent || "",
    heroDescription: service.heroDescription || "",
    heroPrimaryButton: service.heroPrimaryButton || 0,
    heroSecondaryButton: service.heroSecondaryButton || 0,
    // Benefits Section
    benefitsTitle: service.benefitsTitle || "",
    benefitsTitleAccent: service.benefitsTitleAccent || "",
    benefitsDescription: service.benefitsDescription || "",
    benefits,
    // For Who Section
    forWho,
    // Cases Section
    casesTitle: service.casesTitle || "",
    casesTitleAccent: service.casesTitleAccent || "",
    casesDescription: service.casesDescription || "",
    casesBeforeAfter,
    CasesButtonTitle: service.CasesButtonTitle || "Ver Mais Casos",
    // Auth Section
    authTitle: service.authTitle || "",
    authTitleAccent: service.authTitleAccent || "",
    authDescription: service.authDescription || "",
    authFeaturedImage: service.authFeaturedImage ? `${directusPublicUrl}/assets/${service.authFeaturedImage}` : "",
    authBadgeTitleOne: service.authBadgeTitleOne || "",
    authBadgeTitleTwo: service.authBadgeTitleTwo || "",
    authItems,
    // FAQ Section
    faqTitle: service.faqTitle || "",
    faqTitleAccent: service.faqTitleAccent || "",
    faqItems,
    // CTA Section
    ctaTitle: service.ctaTitle || "",
    ctaTitleAccent: service.ctaTitleAccent || "",
    ctaDescription: service.ctaDescription || "",
    CtaForm: ctaForm
  };
  console.log(`✅ Serviço transformado: ${transformedService.slug} com ${benefits.length} benefícios`);
  return transformedService;
}
async function getAllServices() {
  console.log(`📋 SSR: Buscando todos os serviços`);
  try {
    const url = `${directusUrl}/items/services?filter[status][_eq]=published&fields=` + [
      // Campos primários
      "slug",
      "status",
      "sort",
      "date_created",
      "date_updated",
      // Hero básico
      "heroImage",
      "heroSubtitle",
      "heroTitle",
      "heroTitleAccent",
      "heroDescription",
      "heroPrimaryButton",
      "heroSecondaryButton"
    ].join(",") + `&sort=sort,date_created`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    console.log(`📡 Status getAllServices: ${res.status}`);
    if (!res.ok) {
      const error = new DirectusError(
        `Erro ao buscar todos os serviços: ${res.statusText}`,
        res.status,
        url
      );
      console.error(`❌ Erro ao buscar todos os serviços: ${res.status}`);
      throw error;
    }
    const json = await res.json();
    console.log(`📦 Todos os serviços: ${json.data?.length || 0} encontrados`);
    if (!json.data || json.data.length === 0) {
      return [];
    }
    const mappedServices = json.data.map((service) => ({
      // Campos básicos
      slug: service.slug,
      status: service.status,
      sort: service.sort,
      date_created: service.date_created,
      date_updated: service.date_updated,
      // Hero Section
      heroImage: service.heroImage ? `${directusPublicUrl}/assets/${service.heroImage}` : "/images/placeholder-service.jpg",
      heroSubtitle: service.heroSubtitle || "",
      heroTitle: service.heroTitle || "",
      heroTitleAccent: service.heroTitleAccent || "",
      heroDescription: service.heroDescription || "",
      heroPrimaryButton: service.heroPrimaryButton || 0,
      heroSecondaryButton: service.heroSecondaryButton || 0,
      // Campos vazios para compatibilidade (não carregados na listagem)
      benefitsTitle: "",
      benefitsTitleAccent: "",
      benefitsDescription: "",
      benefits: [],
      forWho: [],
      casesTitle: "",
      casesTitleAccent: "",
      casesDescription: "",
      casesBeforeAfter: [],
      CasesButtonTitle: "",
      authTitle: "",
      authTitleAccent: "",
      authDescription: "",
      authFeaturedImage: "",
      authBadgeTitleOne: "",
      authBadgeTitleTwo: "",
      authItems: [],
      faqTitle: "",
      faqTitleAccent: "",
      faqItems: [],
      ctaTitle: "",
      ctaTitleAccent: "",
      ctaDescription: "",
      CtaForm: {
        id: 0,
        title: "",
        description: null,
        slug: "",
        form_fields: []
      }
    }));
    console.log(`✅ ${mappedServices.length} serviços processados`);
    return mappedServices;
  } catch (error) {
    console.error("❌ Erro ao buscar todos os serviços:", error);
    throw error;
  }
}
async function getServicePaths() {
  console.log(`🛤️ Gerando caminhos estáticos dos serviços`);
  try {
    const services = await getAllServices();
    const paths = services.map((service) => ({
      params: { slug: service.slug }
    }));
    console.log(`✅ ${paths.length} caminhos gerados`);
    return paths;
  } catch (error) {
    console.error("❌ Erro ao obter caminhos dos serviços:", error);
    return [];
  }
}

export { getServicePaths as a, getAllServices as b, getServiceBySlug as g };
