import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Hu3wlXJ5.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DX1yZ3tI.mjs';
import { $ as $$MainLayout } from '../chunks/mainLayout_BTu3UJAR.mjs';
export { renderers } from '../renderers.mjs';

class DirectusError extends Error {
  constructor(message, status, url) {
    super(message);
    this.status = status;
    this.url = url;
    this.name = "DirectusError";
  }
}
const directusUrl = "http://localhost:8055";
const directusPublicUrl = "http://localhost:8055";
async function getAllServices() {
  console.log(`📋 SSR: Buscando todos os serviços`);
  try {
    const url = `${directusUrl}/items/services?fields=slug,title,subtitle,description,heroImage,status&filter%5Bstatus%5D%5B_eq%5D=published`;
    const res = await fetch(url);
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
      slug: service.slug,
      title: service.title,
      subtitle: service.subtitle,
      description: service.description,
      heroImage: service.heroImage ? `${directusPublicUrl}/assets/${service.heroImage}` : "/images/placeholder-service.jpg",
      heroTitle: service.title,
      heroSubtitle: service.subtitle,
      heroDescription: service.description,
      heroPrice: void 0,
      heroOriginalPrice: void 0,
      heroDiscount: void 0,
      benefits: [],
      process: [],
      beforeAfter: [],
      faq: [],
      testimonials: [],
      details: {
        duration: "30 minutos",
        sessions: "1 sessão",
        results: "7 dias",
        recovery: "Imediato"
      },
      primaryCTA: "Agendar Consulta",
      secondaryCTA: "Saiba Mais",
      whatsappNumber: "62983265797",
      metaTitle: `${service.title} | Lumino Clínica`,
      metaDescription: service.description,
      keywords: []
    }));
    console.log(`✅ ${mappedServices.length} serviços processados`);
    return mappedServices;
  } catch (error) {
    console.error("❌ Erro ao buscar todos os serviços:", error);
    throw error;
  }
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const services = await getAllServices();
  const servicesWithFallback = services.length > 0 ? services : [{
    slug: "implantes",
    title: "Implantes",
    subtitle: "Procedimento avan\xE7ado",
    description: "Implantes dent\xE1rios com tecnologia de ponta",
    heroImage: "http://localhost:8055/assets/010cc460-cd0f-421f-875d-c7a6f184cbf4",
    heroTitle: "Implantes",
    heroSubtitle: "Procedimento avan\xE7ado",
    heroDescription: "Implantes dent\xE1rios com tecnologia de ponta",
    heroPrice: "Consulte",
    heroOriginalPrice: void 0,
    heroDiscount: void 0,
    benefits: [],
    process: [],
    beforeAfter: [],
    faq: [],
    testimonials: [],
    details: {
      duration: "",
      sessions: "",
      results: "",
      recovery: ""
    },
    primaryCTA: "Agendar Consulta",
    secondaryCTA: "Saiba Mais",
    whatsappNumber: "62983265797",
    metaTitle: "Implantes | Lumino Cl\xEDnica",
    metaDescription: "Implantes dent\xE1rios com tecnologia de ponta",
    keywords: []
  }];
  const pageTitle = "Nossos Servi\xE7os | Lumino Cl\xEDnica";
  const pageDescription = "Conhe\xE7a todos os nossos tratamentos est\xE9ticos. Botox, preenchimento, harmoniza\xE7\xE3o facial e muito mais. Agende sua consulta gratuita.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-br from-primary-dark via-primary-dark to-primary-gold/20 pt-32 pb-20 relative overflow-hidden"> <!-- Background Elements --> <div class="absolute top-0 right-0 w-96 h-96 bg-primary-gold/10 rounded-full -mr-48 -mt-48"></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div> <div class="container relative z-10 text-center text-white"> <div class="max-w-4xl mx-auto"> <h1 class="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
Nossos <span class="text-primary-gold italic">Serviços</span> </h1> <p class="text-xl md:text-2xl font-light mb-8 text-white/90 leading-relaxed">
Tratamentos estéticos avançados para realçar sua beleza natural com segurança e excelência
</p> <!-- Stats --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"> <div class="text-center"> <div class="text-3xl md:text-4xl font-bold text-primary-gold mb-2">+500</div> <div class="text-white/80">Clientes Satisfeitos</div> </div> <div class="text-center"> <div class="text-3xl md:text-4xl font-bold text-primary-gold mb-2">15+</div> <div class="text-white/80">Tratamentos Disponíveis</div> </div> <div class="text-center"> <div class="text-3xl md:text-4xl font-bold text-primary-gold mb-2">4.9★</div> <div class="text-white/80">Avaliação Média</div> </div> </div> </div> </div> </section>  <section class="py-20 bg-white relative overflow-hidden"> <div class="absolute top-20 left-20 w-32 h-32 bg-primary-gold/5 rounded-full blur-3xl"></div> <div class="container relative z-10"> <!-- Featured Service --> ${servicesWithFallback.length > 0 ? renderTemplate`<div class="mb-20"> <div class="text-center mb-12"> <h2 class="font-cormorant text-3xl md:text-4xl font-bold text-primary-dark mb-4">
Tratamento em <span class="text-primary-gold italic">Destaque</span> </h2> <p class="text-gray-600">Nosso procedimento mais procurado</p> </div> <div class="max-w-6xl mx-auto"> <div class="bg-gradient-to-r from-light-bg to-white rounded-3xl overflow-hidden shadow-2xl"> <div class="grid lg:grid-cols-2 gap-0"> <!-- Image --> <div class="relative h-64 lg:h-full overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": servicesWithFallback[0].heroImage, "alt": servicesWithFallback[0].title, "width": 600, "height": 400, "class": "w-full h-full object-cover" })} <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/30 to-transparent"></div> <!-- Badge --> <div class="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
🔥 Mais Procurado
</div> ${servicesWithFallback[0].heroDiscount && renderTemplate`<div class="absolute bottom-6 left-6 bg-primary-gold text-primary-dark px-4 py-2 rounded-full text-sm font-bold"> ${servicesWithFallback[0].heroDiscount} </div>`} </div> <!-- Content --> <div class="p-8 lg:p-12 flex flex-col justify-center"> <h3 class="font-cormorant text-3xl lg:text-4xl font-bold text-primary-dark mb-4"> ${servicesWithFallback[0].title} </h3> <p class="text-xl text-primary-gold mb-4">${servicesWithFallback[0].subtitle}</p> <p class="text-gray-600 mb-6 leading-relaxed">${servicesWithFallback[0].description}</p> <!-- Price --> ${servicesWithFallback[0].heroPrice && servicesWithFallback[0].heroPrice !== "Consulte" && renderTemplate`<div class="flex items-center gap-3 mb-6"> <span class="text-3xl font-bold text-primary-dark">${servicesWithFallback[0].heroPrice}</span> ${servicesWithFallback[0].heroOriginalPrice && renderTemplate`<span class="text-lg text-gray-500 line-through">${servicesWithFallback[0].heroOriginalPrice}</span>`} </div>`} <!-- CTA --> <div class="flex flex-col sm:flex-row gap-4"> <a${addAttribute(`/servicos/${servicesWithFallback[0].slug}`, "href")} class="inline-flex items-center justify-center bg-primary-gold text-white px-8 py-3 rounded-full font-bold hover:bg-gold-dark transition-colors duration-300">
Ver Detalhes
</a> <a${addAttribute(`https://wa.me/62983265797?text=${encodeURIComponent(`Ol\xE1! Gostaria de agendar ${servicesWithFallback[0].title}`)}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors duration-300"> <span class="mr-2">📱</span>
Agendar Agora
</a> </div> </div> </div> </div> </div> </div>` : renderTemplate`<div class="text-center py-16"> <h2 class="font-cormorant text-3xl font-bold text-primary-dark mb-4">
Serviços em <span class="text-primary-gold italic">Breve</span> </h2> <p class="text-gray-600">Estamos preparando nossos serviços para você!</p> </div>`} <!-- All Services Grid --> <div class="text-center mb-12"> <h2 class="font-cormorant text-3xl md:text-4xl font-bold text-primary-dark mb-4">
Todos os <span class="text-primary-gold italic">Tratamentos</span> </h2> <p class="text-gray-600 max-w-2xl mx-auto">
Escolha o tratamento ideal para suas necessidades. Todos os procedimentos são realizados por especialistas certificados.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${servicesWithFallback.map((service, index) => renderTemplate`<div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"> <!-- Image --> <div class="relative h-48 overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": service.heroImage, "alt": service.title, "width": 400, "height": 250, "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" })} <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <!-- Price Badge --> ${service.heroPrice && service.heroPrice !== "Consulte" && renderTemplate`<div class="absolute top-4 right-4 bg-primary-gold text-primary-dark px-3 py-1 rounded-full text-sm font-bold"> ${service.heroPrice} </div>`}  ${service.heroDiscount && renderTemplate`<div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold"> ${service.heroDiscount} </div>`} </div> <!-- Content --> <div class="p-6"> <h3 class="font-cormorant text-2xl font-bold text-primary-dark mb-2 group-hover:text-primary-gold transition-colors duration-300"> ${service.title} </h3> <p class="text-primary-gold text-sm font-medium mb-3">${service.subtitle}</p> <p class="text-gray-600 text-sm leading-relaxed mb-4">${service.description}</p> <!-- Benefits Preview --> ${service.benefits && service.benefits.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mb-4"> ${service.benefits.slice(0, 3).map((benefit) => renderTemplate`<span class="text-xs bg-light-bg text-primary-dark px-2 py-1 rounded-full"> ${benefit.icon} ${benefit.title} </span>`)} </div>`} <!-- CTAs --> <div class="flex gap-3"> <a${addAttribute(`/servicos/${service.slug}`, "href")} class="flex-1 text-center bg-primary-gold text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-gold-dark transition-colors duration-300">
Ver Detalhes
</a> <a${addAttribute(`https://wa.me/62983265797?text=${encodeURIComponent(`Ol\xE1! Gostaria de agendar ${service.title}`)}`, "href")} target="_blank" rel="noopener noreferrer" class="flex-1 text-center bg-green-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-300">
Agendar
</a> </div> </div> </div>`)} </div> </div> </section>  <section class="py-20 bg-light-bg relative overflow-hidden"> <div class="container relative z-10"> <div class="text-center mb-16"> <h2 class="font-cormorant text-4xl md:text-5xl font-bold text-primary-dark mb-6">
Por que escolher a <span class="text-primary-gold italic">Lumino?</span> </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Compromisso com excelência, segurança e resultados naturais
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="text-center group"> <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-gold to-yellow-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
👨‍⚕️
</div> <h3 class="font-bold text-xl text-primary-dark mb-3">Médicos Especialistas</h3> <p class="text-gray-600">Profissionais certificados com anos de experiência</p> </div> <div class="text-center group"> <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-gold to-yellow-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
🛡️
</div> <h3 class="font-bold text-xl text-primary-dark mb-3">100% Seguro</h3> <p class="text-gray-600">Produtos aprovados e protocolos rigorosos</p> </div> <div class="text-center group"> <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-gold to-yellow-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
💫
</div> <h3 class="font-bold text-xl text-primary-dark mb-3">Resultados Naturais</h3> <p class="text-gray-600">Técnicas que preservam sua expressão</p> </div> <div class="text-center group"> <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-gold to-yellow-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
⭐
</div> <h3 class="font-bold text-xl text-primary-dark mb-3">+500 Clientes</h3> <p class="text-gray-600">Satisfação comprovada e resultados reais</p> </div> </div> </div> </section>  <section class="py-20 bg-primary-dark text-white relative overflow-hidden"> <div class="absolute top-0 right-0 w-96 h-96 bg-primary-gold/10 rounded-full -mr-48 -mt-48"></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div> <div class="container relative z-10 text-center"> <div class="max-w-4xl mx-auto"> <h2 class="font-cormorant text-4xl md:text-6xl font-bold mb-6">
Pronto para <span class="text-primary-gold italic">transformar</span> sua beleza?
</h2> <p class="text-xl mb-8 text-white/90">
Agende uma consulta gratuita e descubra qual tratamento é ideal para você
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center"> <a href="https://wa.me/62983265797?text=Olá! Gostaria de agendar uma consulta gratuita" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"> <span class="mr-3">📱</span>
Consulta Gratuita no WhatsApp
</a> <a href="/contato" class="inline-flex items-center justify-center bg-transparent border-2 border-primary-gold text-primary-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-gold hover:text-primary-dark transition-all duration-300"> <span class="mr-3">📝</span>
Agendar Online
</a> </div> <div class="mt-8 text-sm text-white/80"> <p>💎 Consulta de avaliação 100% gratuita • 📞 Resposta em até 30 minutos</p> </div> </div> </div> </section> ` })}`;
}, "/home/zayit/projetos/lumino/apps/frontend/src/pages/servicos/index.astro", void 0);

const $$file = "/home/zayit/projetos/lumino/apps/frontend/src/pages/servicos/index.astro";
const $$url = "/servicos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
