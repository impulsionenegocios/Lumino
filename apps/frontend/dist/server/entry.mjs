import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D8YVOP8m.mjs';
import { manifest } from './manifest_Bo_ooquk.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/_slug_.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/contato.astro.mjs');
const _page4 = () => import('./pages/dev.astro.mjs');
const _page5 = () => import('./pages/equipe.astro.mjs');
const _page6 = () => import('./pages/servicos/_slug_.astro.mjs');
const _page7 = () => import('./pages/servicos.astro.mjs');
const _page8 = () => import('./pages/sobre-nos.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../node_modules/.pnpm/astro@5.8.1_@azure+identity@4.10.0_@azure+storage-blob@12.26.0_@types+node@22.15.29_enc_4e6cb1d54c9df16824f2224676e74c23/node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/blog/[slug].astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/contato.astro", _page3],
    ["src/pages/dev.astro", _page4],
    ["src/pages/equipe.astro", _page5],
    ["src/pages/servicos/[slug].astro", _page6],
    ["src/pages/servicos/index.astro", _page7],
    ["src/pages/sobre-nos.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/zayit/projetos/lumino/apps/frontend/dist/client/",
    "server": "file:///home/zayit/projetos/lumino/apps/frontend/dist/server/",
    "host": true,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
