import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DwmPXTEX.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BhlrrdOx.mjs';
import { $ as $$MainLayout } from '../chunks/mainLayout_CzeWPJo_.mjs';
import { b as getAllServices } from '../chunks/servicesData_CscwxFh9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const services = await getAllServices();
  const pageTitle = "Nossos Servi\xE7os | Lumino Cl\xEDnica";
  const pageDescription = "Conhe\xE7a todos os nossos tratamentos est\xE9ticos. Botox, preenchimento, harmoniza\xE7\xE3o facial e muito mais. Agende sua consulta gratuita.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-br from-primary-dark via-primary-dark to-primary-gold/20 pt-32 pb-20 relative overflow-hidden"> <!-- Background Elements --> <div class="absolute top-0 right-0 w-96 h-96 bg-primary-gold/10 rounded-full -mr-48 -mt-48"></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div> <div class="container relative z-10 text-center text-white"> <div class="max-w-4xl mx-auto"> <h1 class="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
Nossos <span class="text-primary-gold italic">Serviços</span> </h1> <p class="text-xl md:text-2xl font-light mb-8 text-white/90 leading-relaxed">
Tratamentos estéticos avançados para realçar sua beleza natural com segurança e excelência
</p> <!-- Stats --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"> <div class="text-center"> <div class="text-3xl md:text-4xl font-bold text-primary-gold mb-2">+500</div> <div class="text-white/80">Clientes Satisfeitos</div> </div> <div class="text-center"> <div class="text-3xl md:text-4xl font-bold text-primary-gold mb-2">15+</div> <div class="text-white/80">Tratamentos Disponíveis</div> </div> <div class="text-center"> <div class="text-3xl md:text-4xl font-bold text-primary-gold mb-2">4.9★</div> <div class="text-white/80">Avaliação Média</div> </div> </div> </div> </div> </section>  <section class="py-20 bg-white relative overflow-hidden"> <div class="absolute top-20 left-20 w-32 h-32 bg-primary-gold/5 rounded-full blur-3xl"></div> <div class="container relative z-10"> <!-- Featured Service --> ${services.length > 0 && renderTemplate`<div class="mb-20"> <div class="text-center mb-12"> <h2 class="font-cormorant text-3xl md:text-4xl font-bold text-primary-dark mb-4">
Tratamento em <span class="text-primary-gold italic">Destaque</span> </h2> <p class="text-gray-600">Nosso procedimento mais procurado</p> </div> <div class="max-w-6xl mx-auto"> <div class="bg-gradient-to-r from-light-bg to-white rounded-3xl overflow-hidden shadow-2xl"> <div class="grid lg:grid-cols-2 gap-0"> <!-- Image --> <div class="relative h-64 lg:h-full overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": services[0].heroImage, "alt": services[0].heroTitle || "", "width": 600, "height": 400, "class": "w-full h-full object-cover" })} <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/30 to-transparent"></div> <!-- Badge --> <div class="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
🔥 Mais Procurado
</div> </div> <!-- Content --> <div class="p-8 lg:p-12 flex flex-col justify-center"> <h3 class="font-cormorant text-3xl lg:text-4xl font-bold text-primary-dark mb-4"> ${services[0].heroTitle} </h3> <p class="text-xl text-primary-gold mb-4">${services[0].heroSubtitle}</p> <p class="text-gray-600 mb-6 leading-relaxed">${services[0].heroDescription}</p> <!-- CTA --> <div class="flex flex-col sm:flex-row gap-4"> <a${addAttribute(`/servicos/${services[0].slug}`, "href")} class="inline-flex items-center justify-center bg-primary-gold text-white px-8 py-3 rounded-full font-bold hover:bg-gold-dark transition-colors duration-300">
Ver Detalhes
</a> <a${addAttribute(`https://wa.me/62983265797?text=${encodeURIComponent(
    `Ol\xE1! Gostaria de agendar ${services[0].heroTitle}`
  )}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors duration-300"> <span class="mr-2">📱</span>
Agendar Agora
</a> </div> </div> </div> </div> </div> </div>`} <!-- All Services Grid --> <div class="text-center mb-12"> <h2 class="font-cormorant text-3xl md:text-4xl font-bold text-primary-dark mb-4">
Todos os <span class="text-primary-gold italic">Tratamentos</span> </h2> <p class="text-gray-600 max-w-2xl mx-auto">
Escolha o tratamento ideal para suas necessidades. Todos os procedimentos são realizados por
          especialistas certificados.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"> <!-- Image --> <div class="relative h-48 overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": service.heroImage, "alt": service.heroTitle || "teste", "width": 400, "height": 250, "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" })} <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> </div> <!-- Content --> <div class="p-6"> <h3 class="font-cormorant text-2xl font-bold text-primary-dark mb-2 group-hover:text-primary-gold transition-colors duration-300"> ${service.heroTitle} </h3> <p class="text-primary-gold text-sm font-medium mb-3">${service.heroSubtitle}</p> <p class="text-gray-600 text-sm leading-relaxed mb-4">${service.heroDescription}</p> <!-- Benefits Preview --> ${service.benefits && service.benefits.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mb-4"> ${service.benefits.slice(0, 3).map((benefit) => renderTemplate`<span class="text-xs bg-light-bg text-primary-dark px-2 py-1 rounded-full"> ${benefit.icon} ${benefit.title} </span>`)} </div>`} <!-- CTAs --> <div class="flex gap-3"> <a${addAttribute(`/servicos/${service.slug}`, "href")} class="flex-1 text-center bg-primary-gold text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-gold-dark transition-colors duration-300">
Ver Detalhes
</a> <a${addAttribute(`https://wa.me/62983265797?text=${encodeURIComponent(
    `Ol\xE1! Gostaria de agendar ${service.heroTitle}`
  )}`, "href")} target="_blank" rel="noopener noreferrer" class="flex-1 text-center bg-green-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-300">
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
