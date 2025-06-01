import { g as decodeKey } from './chunks/astro/server_Hu3wlXJ5.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_28MJRhDf.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/zayit/projetos/lumino/apps/frontend/","cacheDir":"file:///home/zayit/projetos/lumino/apps/frontend/node_modules/.astro/","outDir":"file:///home/zayit/projetos/lumino/apps/frontend/dist/","srcDir":"file:///home/zayit/projetos/lumino/apps/frontend/src/","publicDir":"file:///home/zayit/projetos/lumino/apps/frontend/public/","buildClientDir":"file:///home/zayit/projetos/lumino/apps/frontend/dist/client/","buildServerDir":"file:///home/zayit/projetos/lumino/apps/frontend/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../node_modules/.pnpm/astro@5.7.12_@azure+identity@4.9.1_@azure+storage-blob@12.26.0_@types+node@22.15.17_enc_5f67b7ca413d594ebbd4eb6a6cecbce5/node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DVO8TgOe.css"},{"type":"external","src":"/_astro/_slug_.JYP3Y3V5.css"},{"type":"inline","content":".blog-content{font-family:Montserrat,sans-serif}.blog-content h2,.blog-content h3,.blog-content h4{font-family:Cormorant,serif;color:var(--primary-dark);font-weight:600;margin-top:2rem;margin-bottom:1rem;line-height:1.3}.blog-content h2{font-size:2rem}.blog-content h3{font-size:1.5rem}.blog-content h4{font-size:1.25rem}.blog-content p{margin-bottom:1.5rem;line-height:1.8}.blog-content ul,.blog-content ol{margin:1.5rem 0;padding-left:2rem}.blog-content li{margin-bottom:.5rem;line-height:1.7}.blog-content blockquote{border-left:4px solid var(--primary-gold);background:var(--light-bg);padding:1.5rem;margin:2rem 0;border-radius:.5rem;font-style:italic}.blog-content strong{color:var(--primary-dark);font-weight:600}.line-clamp-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DVO8TgOe.css"},{"type":"external","src":"/_astro/_slug_.JYP3Y3V5.css"},{"type":"inline","content":".blog-card[data-astro-cid-5tznm7mj],.blog-card-featured[data-astro-cid-5tznm7mj]{position:relative}.blog-card[data-astro-cid-5tznm7mj]:before,.blog-card-featured[data-astro-cid-5tznm7mj]:before{content:\"\";position:absolute;inset:0;background:linear-gradient(145deg,transparent 0%,rgba(201,168,116,.01) 100%);opacity:0;transition:opacity .5s ease;pointer-events:none}.blog-card[data-astro-cid-5tznm7mj]:hover:before,.blog-card-featured[data-astro-cid-5tznm7mj]:hover:before{opacity:1}.line-clamp-3[data-astro-cid-5tznm7mj]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contato","isIndex":false,"type":"page","pattern":"^\\/contato\\/?$","segments":[[{"content":"contato","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contato.astro","pathname":"/contato","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DVO8TgOe.css"}],"routeData":{"route":"/dev","isIndex":false,"type":"page","pattern":"^\\/dev\\/?$","segments":[[{"content":"dev","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dev.astro","pathname":"/dev","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/equipe","isIndex":false,"type":"page","pattern":"^\\/equipe\\/?$","segments":[[{"content":"equipe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/equipe.astro","pathname":"/equipe","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DVO8TgOe.css"},{"type":"external","src":"/_astro/_slug_.JYP3Y3V5.css"}],"routeData":{"route":"/servicos/[slug]","isIndex":false,"type":"page","pattern":"^\\/servicos\\/([^/]+?)\\/?$","segments":[[{"content":"servicos","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/servicos/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DVO8TgOe.css"},{"type":"external","src":"/_astro/_slug_.JYP3Y3V5.css"}],"routeData":{"route":"/servicos","isIndex":true,"type":"page","pattern":"^\\/servicos\\/?$","segments":[[{"content":"servicos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicos/index.astro","pathname":"/servicos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sobre-nos","isIndex":false,"type":"page","pattern":"^\\/sobre-nos\\/?$","segments":[[{"content":"sobre-nos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobre-nos.astro","pathname":"/sobre-nos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DVO8TgOe.css"},{"type":"external","src":"/_astro/_slug_.JYP3Y3V5.css"},{"type":"inline","content":".certification-badge[data-astro-cid-vu3dmwmy]{box-shadow:0 10px 20px #c9a8744d}.certification-card[data-astro-cid-vu3dmwmy]{position:relative}.certification-card[data-astro-cid-vu3dmwmy]:before{content:\"\";position:absolute;inset:0;background:linear-gradient(145deg,transparent 0%,rgba(201,168,116,.02) 100%);opacity:0;transition:opacity .5s ease;pointer-events:none}.certification-card[data-astro-cid-vu3dmwmy]:hover:before{opacity:1}.team-card[data-astro-cid-n5ltlhjm]{position:relative}.team-card[data-astro-cid-n5ltlhjm]:before{content:\"\";position:absolute;inset:0;background:linear-gradient(145deg,transparent 0%,rgba(201,168,116,.02) 100%);opacity:0;transition:opacity .5s ease;pointer-events:none}.team-card[data-astro-cid-n5ltlhjm]:hover:before{opacity:1}.team-card[data-astro-cid-n5ltlhjm]:hover{box-shadow:0 25px 50px #131f2f26}.blog-card[data-astro-cid-li4jkggb],.blog-card-featured[data-astro-cid-li4jkggb]{position:relative}.blog-card[data-astro-cid-li4jkggb]:before,.blog-card-featured[data-astro-cid-li4jkggb]:before{content:\"\";position:absolute;inset:0;background:linear-gradient(145deg,transparent 0%,rgba(201,168,116,.01) 100%);opacity:0;transition:opacity .5s ease;pointer-events:none}.blog-card[data-astro-cid-li4jkggb]:hover:before,.blog-card-featured[data-astro-cid-li4jkggb]:hover:before{opacity:1}.line-clamp-3[data-astro-cid-li4jkggb]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://joqueianapolis.com.br","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/zayit/projetos/lumino/apps/frontend/src/pages/dev.astro",{"propagation":"none","containsHead":true}],["/home/zayit/projetos/lumino/apps/frontend/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["/home/zayit/projetos/lumino/apps/frontend/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/home/zayit/projetos/lumino/apps/frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/zayit/projetos/lumino/apps/frontend/src/pages/servicos/[slug].astro",{"propagation":"none","containsHead":true}],["/home/zayit/projetos/lumino/apps/frontend/src/pages/servicos/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contato@_@astro":"pages/contato.astro.mjs","\u0000@astro-page:src/pages/dev@_@astro":"pages/dev.astro.mjs","\u0000@astro-page:src/pages/equipe@_@astro":"pages/equipe.astro.mjs","\u0000@astro-page:src/pages/servicos/[slug]@_@astro":"pages/servicos/_slug_.astro.mjs","\u0000@astro-page:src/pages/sobre-nos@_@astro":"pages/sobre-nos.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:../../node_modules/.pnpm/astro@5.7.12_@azure+identity@4.9.1_@azure+storage-blob@12.26.0_@types+node@22.15.17_enc_5f67b7ca413d594ebbd4eb6a6cecbce5/node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/servicos/index@_@astro":"pages/servicos.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/home/zayit/projetos/lumino/node_modules/.pnpm/astro@5.7.12_@azure+identity@4.9.1_@azure+storage-blob@12.26.0_@types+node@22.15.17_enc_5f67b7ca413d594ebbd4eb6a6cecbce5/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BOmBepNp.mjs","/home/zayit/projetos/lumino/node_modules/.pnpm/unstorage@1.16.0_@azure+identity@4.9.1_@azure+storage-blob@12.26.0_ioredis@5.5.0/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","\u0000@astrojs-manifest":"manifest_Cq2p7H3n.mjs","/home/zayit/projetos/lumino/apps/frontend/src/components/headers/mainHeader.vue":"_astro/mainHeader.C2l2U9Er.js","@astrojs/vue/client.js":"_astro/client.B7scYDlA.js","/home/zayit/projetos/lumino/apps/frontend/src/components/sections/counterSection.astro?astro&type=script&index=0&lang.ts":"_astro/counterSection.astro_astro_type_script_index_0_lang._oxbXWoP.js","/home/zayit/projetos/lumino/apps/frontend/src/components/animations/Animations.astro?astro&type=script&index=0&lang.ts":"_astro/Animations.astro_astro_type_script_index_0_lang.PMXKGKiS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/zayit/projetos/lumino/apps/frontend/src/components/sections/counterSection.astro?astro&type=script&index=0&lang.ts","const g=document.querySelectorAll(\"[data-countup]\"),a=new IntersectionObserver(e=>{e.forEach(n=>{if(n.isIntersecting){const t=n.target,o=parseInt(t.dataset.target||\"0\",10),c=1200,i=performance.now(),r=u=>{const m=u-i,s=Math.min(m/c,1),l=Math.floor(s*o);t.textContent=l.toString(),s<1?requestAnimationFrame(r):(t.textContent=o.toString(),a.unobserve(t))};requestAnimationFrame(r)}})},{threshold:.6});g.forEach(e=>a.observe(e));"]],"assets":["/_astro/bg.CIn-t9Yh.jpg","/_astro/logo-escuro.B7izeyKT.png","/_astro/_slug_.JYP3Y3V5.css","/_astro/_slug_.DVO8TgOe.css","/favicon.svg","/favicon.svg:Zone.Identifier","/_astro/Animations.astro_astro_type_script_index_0_lang.PMXKGKiS.js","/_astro/_slug_.C8z62YO-.css","/_astro/client.B7scYDlA.js","/_astro/index.D3jsOSc0.js","/_astro/mainHeader.C2l2U9Er.js","/_astro/runtime-core.esm-bundler.CYLR8qJs.js","/fonts/PoetsenOne-Regular.ttf","/fonts/PoetsenOne-Regular.ttf:Zone.Identifier","/images/bg-full.jpg","/images/bg-full.jpg:Zone.Identifier","/images/bg-full.jpg:Zone.Identifier:Zone.Identifier","/images/bg.jpg","/images/bg.jpg:Zone.Identifier","/images/boia-praia.png","/images/boia-praia.png:Zone.Identifier","/images/boia-praia.png:Zone.Identifier:Zone.Identifier","/images/bola-praia.png","/images/bola-praia.png:Zone.Identifier","/images/bola-praia.png:Zone.Identifier:Zone.Identifier","/images/girl-joquei-full.jpg","/images/girl-joquei-full.jpg:Zone.Identifier","/images/girl-joquei.jpg","/images/girl-joquei.jpg:Zone.Identifier","/images/icon.png","/images/icon.png:Zone.Identifier","/images/icon.png:Zone.Identifier:Zone.Identifier","/images/logo-base.svg","/images/logo-base.svg:Zone.Identifier","/images/logo-branca.png","/images/logo-branca.png:Zone.Identifier","/images/logo.png","/images/logo.png:Zone.Identifier","/images/water-joquei.jpg","/images/water-joquei.jpg:Zone.Identifier","/images/water-joquei.jpg:Zone.Identifier:Zone.Identifier"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"xq0WxrFxxK2NTQlpShBupvB7Hsgwknh7S3tV3Fa0CBk=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/zayit/projetos/lumino/apps/frontend/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
