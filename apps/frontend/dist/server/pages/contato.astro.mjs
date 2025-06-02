import { a as createComponent, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DwmPXTEX.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BhlrrdOx.mjs';
import { $ as $$MainLayout } from '../chunks/mainLayout_CzeWPJo_.mjs';
import { $ as $$MainButton } from '../chunks/mainButton_DxiZMp03.mjs';
import { $ as $$DotsShape } from '../chunks/dotsShape_BJsPkNJy.mjs';
import { B as BgImage } from '../chunks/bg_DTnbb_i9.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contato = createComponent(($$result, $$props, $$slots) => {
  const pageData = {
    // SEO
    metaTitle: "Contato | L\xFAmino Cl\xEDnica Integrada - An\xE1polis GO",
    metaDescription: "Entre em contato com a L\xFAmino Cl\xEDnica. Atendimento personalizado em An\xE1polis. WhatsApp, telefone, formul\xE1rio online. Agende sua consulta.",
    // Hero
    hero: {
      titulo: "Entre em contato",
      subtitulo: "FALE CONOSCO",
      descricao: "Estamos prontos para atender voc\xEA com todo carinho e profissionalismo. Escolha o canal de sua prefer\xEAncia e agende sua consulta."},
    // Informações de contato
    contato: {
      whatsapp: "62 98326-5797",
      whatsappLink: "5562983265797",
      telefone: "62 3321-1234",
      email: "contato@luminoclinica.com.br",
      endereco: {
        rua: "Av. Brasil Sul, 845",
        bairro: "Jundia\xED",
        cidade: "An\xE1polis - GO",
        cep: "75113-570"
      },
      googleMapsLink: "https://maps.google.com/maps?q=Lumino+Clinica+Anapolis",
      instagramLink: "https://instagram.com/luminoclinica",
      facebookLink: "https://facebook.com/luminoclinica"
    },
    // Horários
    horarios: [
      { dia: "Segunda a Sexta", horario: "08:00 \xE0s 18:00" },
      { dia: "S\xE1bado", horario: "08:00 \xE0s 12:00" },
      { dia: "Domingo", horario: "Fechado" }
    ],
    // FAQ Contato
    faqContato: [
      {
        pergunta: "Voc\xEAs atendem por conv\xEAnio?",
        resposta: "Sim! Atendemos diversos conv\xEAnios odontol\xF3gicos. Entre em contato para verificar se atendemos o seu plano espec\xEDfico."
      },
      {
        pergunta: "Preciso agendar consulta com anteced\xEAncia?",
        resposta: "Recomendamos o agendamento com anteced\xEAncia para garantir o melhor hor\xE1rio para voc\xEA. Em casos de urg\xEAncia, entre em contato que faremos o poss\xEDvel para atend\xEA-lo."
      },
      {
        pergunta: "Voc\xEAs t\xEAm estacionamento?",
        resposta: "Sim, oferecemos estacionamento gratuito para nossos pacientes com seguran\xE7a e comodidade."
      },
      {
        pergunta: "Atendem crian\xE7as?",
        resposta: "Sim! Temos especialistas em odontopediatria e um ambiente preparado para receber os pequenos com todo carinho."
      }
    ]
  };
  const whatsappMessage = encodeURIComponent(`Ol\xE1! Vim pelo site e gostaria de mais informa\xE7\xF5es.`);
  const whatsappLink = `https://wa.me/${pageData.contato.whatsappLink}?text=${whatsappMessage}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageData.metaTitle, "description": pageData.metaDescription, "data-astro-cid-7iakxibs": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="h-[60vh] bg-white flex items-center overflow-hidden relative" data-astro-cid-7iakxibs> <div class="hero-bg" data-astro-cid-7iakxibs> ${renderComponent($$result2, "Image", $$Image, { "src": BgImage, "alt": "Contato L\xFAmino Cl\xEDnica", "class": "hero-bg-image", "layout": "full-width", "loading": "eager", "width": 1920, "height": 1080, "data-astro-cid-7iakxibs": true })} </div> <div class="counter-particles" data-astro-cid-7iakxibs></div> <div class="mx-auto max-w-[1600px] lg:pl-40 w-full z-10" data-astro-cid-7iakxibs> <div class="lg:w-[50%] px-8 lg:px-0 z-3" data-astro-cid-7iakxibs> <span class="text-primary-gold font-bold animate-subtitle font-serif text-sm tracking-wider" data-astro-cid-7iakxibs> ${pageData.hero.subtitulo} </span> <h1 class="text-5xl md:text-6xl 2xl:text-7xl font-bold font-cormorant animate-title mt-4 leading-tight" data-astro-cid-7iakxibs> ${pageData.hero.titulo} <span class="text-primary-gold" data-astro-cid-7iakxibs>conosco</span> </h1> <p class="text-lg text-gray-600 animate-description mt-6 leading-relaxed" data-astro-cid-7iakxibs> ${pageData.hero.descricao} </p> </div> ${renderComponent($$result2, "DotsShape", $$DotsShape, { "data-astro-cid-7iakxibs": true })} </div> </section>  <section class="section bg-primary-dark text-white" data-astro-cid-7iakxibs> <div class="shape shape-3" data-astro-cid-7iakxibs></div> <div class="container" data-astro-cid-7iakxibs> <div class="grid md:grid-cols-3 gap-8" data-astro-cid-7iakxibs> <a${addAttribute(whatsappLink, "href")} target="_blank" class="group cursor-pointer" data-astro-cid-7iakxibs> <div class="text-center reveal-effect transform transition-all duration-500 group-hover:-translate-y-3" data-astro-cid-7iakxibs> <div class="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center text-4xl group-hover:bg-primary-gold transition-all duration-500" data-astro-cid-7iakxibs>
📱
</div> <h3 class="text-2xl font-bold mb-2 text-primary-gold" data-astro-cid-7iakxibs>WhatsApp</h3> <p class="text-xl text-white/90" data-astro-cid-7iakxibs>${pageData.contato.whatsapp}</p> <p class="text-sm text-white/70 mt-2" data-astro-cid-7iakxibs>Resposta rápida</p> </div> </a> <a${addAttribute(`tel:${pageData.contato.telefone.replace(/\s/g, "")}`, "href")} class="group cursor-pointer" data-astro-cid-7iakxibs> <div class="text-center reveal-effect transform transition-all duration-500 group-hover:-translate-y-3" data-astro-cid-7iakxibs> <div class="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center text-4xl group-hover:bg-primary-gold transition-all duration-500" data-astro-cid-7iakxibs>
📞
</div> <h3 class="text-2xl font-bold mb-2 text-primary-gold" data-astro-cid-7iakxibs>Telefone</h3> <p class="text-xl text-white/90" data-astro-cid-7iakxibs>${pageData.contato.telefone}</p> <p class="text-sm text-white/70 mt-2" data-astro-cid-7iakxibs>Atendimento comercial</p> </div> </a> <a${addAttribute(`mailto:${pageData.contato.email}`, "href")} class="group cursor-pointer" data-astro-cid-7iakxibs> <div class="text-center reveal-effect transform transition-all duration-500 group-hover:-translate-y-3" data-astro-cid-7iakxibs> <div class="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center text-4xl group-hover:bg-primary-gold transition-all duration-500" data-astro-cid-7iakxibs>
✉️
</div> <h3 class="text-2xl font-bold mb-2 text-primary-gold" data-astro-cid-7iakxibs>E-mail</h3> <p class="text-lg text-white/90" data-astro-cid-7iakxibs>${pageData.contato.email}</p> <p class="text-sm text-white/70 mt-2" data-astro-cid-7iakxibs>Para documentos e orçamentos</p> </div> </a> </div> </div> </section>  <section class="section bg-white" data-astro-cid-7iakxibs> <div class="shape shape-1" data-astro-cid-7iakxibs></div> <div class="container" data-astro-cid-7iakxibs> <div class="grid lg:grid-cols-2 gap-16" data-astro-cid-7iakxibs> <!-- Formulário --> <div class="reveal-effect" data-astro-cid-7iakxibs> <h2 class="section-title mb-8" data-astro-cid-7iakxibs>
Envie sua <span class="accent" data-astro-cid-7iakxibs>mensagem</span> </h2> <form id="contact-form" class="space-y-6" data-astro-cid-7iakxibs> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-7iakxibs> <div data-astro-cid-7iakxibs> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-7iakxibs>Nome completo</label> <input type="text" name="nome" required class="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-gold transition-all duration-300" placeholder="Seu nome" data-astro-cid-7iakxibs> </div> <div data-astro-cid-7iakxibs> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-7iakxibs>Telefone</label> <input type="tel" name="telefone" required class="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-gold transition-all duration-300" placeholder="(00) 00000-0000" data-astro-cid-7iakxibs> </div> </div> <div data-astro-cid-7iakxibs> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-7iakxibs>E-mail</label> <input type="email" name="email" required class="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-gold transition-all duration-300" placeholder="seu@email.com" data-astro-cid-7iakxibs> </div> <div data-astro-cid-7iakxibs> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-7iakxibs>Assunto</label> <select name="assunto" required class="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-gold transition-all duration-300" data-astro-cid-7iakxibs> <option value="" data-astro-cid-7iakxibs>Selecione um assunto</option> <option value="agendamento" data-astro-cid-7iakxibs>Agendamento de consulta</option> <option value="orcamento" data-astro-cid-7iakxibs>Solicitar orçamento</option> <option value="duvida" data-astro-cid-7iakxibs>Tirar dúvidas</option> <option value="emergencia" data-astro-cid-7iakxibs>Urgência/Emergência</option> <option value="outro" data-astro-cid-7iakxibs>Outro assunto</option> </select> </div> <div data-astro-cid-7iakxibs> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-7iakxibs>Mensagem</label> <textarea name="mensagem" rows="4" required class="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-gold transition-all duration-300 resize-none" placeholder="Como podemos ajudar?" data-astro-cid-7iakxibs></textarea> </div> <button type="submit" class="w-full bg-primary-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-dark transition-all duration-300 transform hover:scale-105 shadow-xl" data-astro-cid-7iakxibs>
Enviar mensagem
</button> </form> </div> <!-- Informações --> <div class="reveal-effect" data-astro-cid-7iakxibs> <h2 class="section-title mb-8" data-astro-cid-7iakxibs>
Informações de <span class="accent" data-astro-cid-7iakxibs>atendimento</span> </h2> <!-- Endereço --> <div class="mb-8" data-astro-cid-7iakxibs> <div class="flex items-start gap-4 mb-6" data-astro-cid-7iakxibs> <div class="w-14 h-14 bg-light-bg rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" data-astro-cid-7iakxibs>
📍
</div> <div data-astro-cid-7iakxibs> <h3 class="text-xl font-bold text-primary-dark mb-2" data-astro-cid-7iakxibs>Endereço</h3> <p class="text-gray-600" data-astro-cid-7iakxibs> ${pageData.contato.endereco.rua}<br data-astro-cid-7iakxibs> ${pageData.contato.endereco.bairro}<br data-astro-cid-7iakxibs> ${pageData.contato.endereco.cidade}<br data-astro-cid-7iakxibs>
CEP: ${pageData.contato.endereco.cep} </p> <a${addAttribute(pageData.contato.googleMapsLink, "href")} target="_blank" class="text-primary-gold hover:text-gold-dark transition-colors mt-2 inline-block" data-astro-cid-7iakxibs>
Ver no Google Maps →
</a> </div> </div> </div> <!-- Horários --> <div class="mb-8" data-astro-cid-7iakxibs> <div class="flex items-start gap-4 mb-6" data-astro-cid-7iakxibs> <div class="w-14 h-14 bg-light-bg rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" data-astro-cid-7iakxibs>
🕐
</div> <div class="w-full" data-astro-cid-7iakxibs> <h3 class="text-xl font-bold text-primary-dark mb-4" data-astro-cid-7iakxibs>Horário de Atendimento</h3> <div class="space-y-3" data-astro-cid-7iakxibs> ${pageData.horarios.map((horario) => renderTemplate`<div class="flex justify-between items-center py-2 border-b border-gray-100" data-astro-cid-7iakxibs> <span class="font-medium text-gray-700" data-astro-cid-7iakxibs>${horario.dia}</span> <span class="text-primary-gold font-medium" data-astro-cid-7iakxibs>${horario.horario}</span> </div>`)} </div> </div> </div> </div> <!-- Redes Sociais --> <div data-astro-cid-7iakxibs> <div class="flex items-start gap-4" data-astro-cid-7iakxibs> <div class="w-14 h-14 bg-light-bg rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" data-astro-cid-7iakxibs>
🌐
</div> <div data-astro-cid-7iakxibs> <h3 class="text-xl font-bold text-primary-dark mb-4" data-astro-cid-7iakxibs>Redes Sociais</h3> <div class="flex gap-4" data-astro-cid-7iakxibs> <a${addAttribute(pageData.contato.instagramLink, "href")} target="_blank" class="w-12 h-12 bg-primary-dark text-white rounded-xl flex items-center justify-center hover:bg-primary-gold transition-all duration-300 transform hover:scale-110" data-astro-cid-7iakxibs> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-7iakxibs> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" data-astro-cid-7iakxibs></path> </svg> </a> <a${addAttribute(pageData.contato.facebookLink, "href")} target="_blank" class="w-12 h-12 bg-primary-dark text-white rounded-xl flex items-center justify-center hover:bg-primary-gold transition-all duration-300 transform hover:scale-110" data-astro-cid-7iakxibs> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-7iakxibs> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-7iakxibs></path> </svg> </a> <a${addAttribute(whatsappLink, "href")} target="_blank" class="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110" data-astro-cid-7iakxibs> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-7iakxibs> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" data-astro-cid-7iakxibs></path> </svg> </a> </div> </div> </div> </div> </div> </div> </div> </section>  <section class="h-[500px] relative" data-astro-cid-7iakxibs> <iframe${addAttribute(pageData.contato.googleMapsLink, "src")} width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-full" data-astro-cid-7iakxibs></iframe> <!-- Overlay com informações --> <div class="absolute top-8 left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-sm" data-astro-cid-7iakxibs> <h3 class="font-bold text-xl text-primary-dark mb-2" data-astro-cid-7iakxibs>Lúmino Clínica Integrada</h3> <p class="text-gray-600 text-sm mb-4" data-astro-cid-7iakxibs> ${pageData.contato.endereco.rua}, ${pageData.contato.endereco.bairro} </p> <a${addAttribute(pageData.contato.googleMapsLink, "href")} target="_blank" class="text-primary-gold hover:text-gold-dark transition-colors text-sm font-medium" data-astro-cid-7iakxibs>
Obter direções →
</a> </div> </section>  <section class="section bg-light-bg" data-astro-cid-7iakxibs> <div class="shape shape-2" data-astro-cid-7iakxibs></div> <div class="container" data-astro-cid-7iakxibs> <div class="max-w-4xl mx-auto" data-astro-cid-7iakxibs> <div class="text-center mb-16" data-astro-cid-7iakxibs> <h2 class="section-title section-title-center" data-astro-cid-7iakxibs>
Perguntas <span class="accent" data-astro-cid-7iakxibs>frequentes</span> </h2> <p class="section-subtitle section-subtitle-center" data-astro-cid-7iakxibs>
Tire suas dúvidas sobre nosso atendimento
</p> </div> <div class="space-y-4" data-astro-cid-7iakxibs> ${pageData.faqContato.map((item, index) => renderTemplate`<div class="bg-white rounded-2xl overflow-hidden reveal-effect shadow-sm hover:shadow-lg transition-shadow duration-300" data-astro-cid-7iakxibs> <button class="w-full text-left p-6 font-bold text-primary-dark hover:bg-light-bg transition-colors duration-300 flex items-center justify-between faq-toggle"${addAttribute(`faq-${index}`, "data-target")} data-astro-cid-7iakxibs> <span class="flex items-center" data-astro-cid-7iakxibs> <span class="mr-4 text-2xl text-primary-gold" data-astro-cid-7iakxibs>❓</span> ${item.pergunta} </span> <svg class="w-5 h-5 transition-transform duration-300 faq-icon text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-7iakxibs> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-7iakxibs></path> </svg> </button> <div${addAttribute(`faq-${index}`, "id")} class="hidden p-6 pt-0 text-gray-700 leading-relaxed faq-content" data-astro-cid-7iakxibs> ${item.resposta} </div> </div>`)} </div> </div> </div> </section>  <section class="section contact-cta" data-astro-cid-7iakxibs> <div class="contact-cta-shape contact-cta-shape-1" data-astro-cid-7iakxibs></div> <div class="contact-cta-shape contact-cta-shape-2" data-astro-cid-7iakxibs></div> <div class="contact-cta-container" data-astro-cid-7iakxibs> <h2 class="contact-cta-title" data-astro-cid-7iakxibs>
Prefere falar pelo <span class="accent" data-astro-cid-7iakxibs>WhatsApp?</span> </h2> <p class="contact-cta-text" data-astro-cid-7iakxibs>
Resposta rápida e atendimento personalizado. Clique no botão abaixo e fale conosco agora mesmo!
</p> <div class="contact-cta-buttons" data-astro-cid-7iakxibs> ${renderComponent($$result2, "Button", $$MainButton, { "title": "\u{1F4F1} Chamar no WhatsApp", "href": whatsappLink, "variant": "gold", "data-astro-cid-7iakxibs": true })} ${renderComponent($$result2, "Button", $$MainButton, { "title": "\u{1F4DE} Ligar agora", "href": `tel:${pageData.contato.telefone.replace(/\s/g, "")}`, "variant": "outline-white", "data-astro-cid-7iakxibs": true })} </div> </div> </section> ` })} ${renderScript($$result, "/home/zayit/projetos/lumino/apps/frontend/src/pages/contato.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/zayit/projetos/lumino/apps/frontend/src/pages/contato.astro", void 0);

const $$file = "/home/zayit/projetos/lumino/apps/frontend/src/pages/contato.astro";
const $$url = "/contato";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contato,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
