import { g as f } from './index.D3jsOSc0.js';
import {
  d as w,
  c as u,
  o as d,
  t as h,
  n as i,
  a as o,
  b as x,
  F as _,
  r as y,
  e as p,
  w as z,
  f as C,
  g as E,
  h as v,
} from './runtime-core.esm-bundler.DgU-e43B.js';
/* empty css                        */ const k = (r, a) => {
    const t = r.__vccOpts || r;
    for (const [e, l] of a) t[e] = l;
    return t;
  },
  O =
    'relative inline-block overflow-hidden px-[40px] py-[18px] no-underline font-medium uppercase tracking-[1px] transition-all duration-500 ease-out-expo rounded-[50px] cursor-pointer transform text-sm text-center 2xl:text-lg',
  B =
    "bg-gradient-to-r from-primary-gold to-gold-light text-white shadow-[0_10px_20px_rgba(201,168,116,0.2)] z-[1] before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary-dark before:transition-all before:duration-500 before:ease-out-expo before:z-[-1] hover:shadow-[0_15px_30px_rgba(201,168,116,0.4)] hover:-translate-y-[3px] hover:before:w-full",
  T =
    "bg-transparent text-primary-gold border-2 border-primary-gold shadow-none z-[1] before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-gradient-to-r before:from-primary-gold before:to-gold-light before:transition-all before:duration-500 before:ease-out-expo before:z-[-1] hover:text-white hover:shadow-[0_15px_30px_rgba(201,168,116,0.4)] hover:-translate-y-[3px] hover:before:w-full",
  L = w({
    __name: 'mainButton',
    props: { title: {}, href: {}, variant: {} },
    setup(r, { expose: a }) {
      a();
      const t = { base: O, defaultStyles: B, outlineStyles: T };
      return Object.defineProperty(t, '__isScriptSetup', { enumerable: !1, value: !0 }), t;
    },
  }),
  I = ['href'];
function F(r, a, t, e, l, n) {
  return (
    d(),
    u(
      'a',
      {
        href: t.href,
        class: i([e.base, t.variant === 'outline' ? e.outlineStyles : e.defaultStyles]),
      },
      h(t.title),
      11,
      I,
    )
  );
}
const N = k(L, [['render', F]]),
  m = 'http://localhost:8055';
class R extends Error {
  constructor(a, t, e) {
    super(a), (this.status = t), (this.url = e), (this.name = 'DirectusError');
  }
}
async function P() {
  try {
    const r = `${m}/items/clinicData`,
      a = await fetch(r, {
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      });
    if (!a.ok) throw new R(`Erro ao buscar os dados da clínica: ${a.statusText}`, a.status, r);
    const t = await a.json();
    if (!t.data || t.data.length === 0) return null;
    const e = t.data[0],
      l = {
        logo_escura: e.logo_escura
          ? `${m}/assets/${e.logo_escura}`
          : '/images/placeholder-logo.jpg',
        logo_clara: e.logo_clara ? `${m}/assets/${e.logo_clara}` : '/images/placeholder-logo.jpg',
      };
    return console.log('esses são os dados mapeados', l), l;
  } catch (r) {
    throw (console.error(r), r);
  }
}
const U = w({
    __name: 'mainHeader',
    props: {
      logoUrl: { default: '' },
      ctaText: { default: 'Agendar Consulta' },
      menuItems: {
        default: () => [
          { label: 'Início', url: '#home' },
          { label: 'Sobre Nós', url: '#about' },
          { label: 'Serviços', url: '#services' },
          { label: 'Galeria', url: '#gallery' },
          { label: 'Localização', url: '#location' },
          { label: 'Depoimentos', url: '#testimonials' },
        ],
      },
    },
    setup(r, { expose: a }) {
      a();
      const t = p(),
        e = async () => {
          t.value = await P();
        },
        l = r,
        n = p(!1),
        s = p(!1),
        c = p(null),
        M = p(null),
        S = () => {
          (n.value = !n.value),
            n.value
              ? (document.body.style.overflow = 'hidden')
              : (document.body.style.overflow = 'auto');
        },
        D = () => {
          (n.value = !1), (document.body.style.overflow = 'auto');
        },
        b = () => {
          s.value = window.scrollY > 50;
        };
      z(n, (j) => {
        j &&
          (f.set('.mobile-menu-item', { y: 20, opacity: 0 }),
          f.set('.mobile-cta', { y: 20, opacity: 0 }),
          f.to('.mobile-menu-item', {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            delay: 0.2,
            duration: 0.6,
            ease: 'power3.out',
          }),
          f.to('.mobile-cta', { y: 0, opacity: 1, delay: 0.6, duration: 0.6, ease: 'power3.out' }));
      }),
        C(async () => {
          window.addEventListener('scroll', b),
            b(),
            await e(),
            console.log(t.value),
            c.value &&
              f.fromTo(
                c.value,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
              );
        }),
        E(() => {
          window.removeEventListener('scroll', b), (document.body.style.overflow = 'auto');
        });
      const g = {
        mainData: t,
        fetchMainData: e,
        props: l,
        isMenuOpen: n,
        isScrolled: s,
        headerRef: c,
        sidebarRef: M,
        toggleMenu: S,
        closeMenu: D,
        handleScroll: b,
        MainButton: N,
      };
      return Object.defineProperty(g, '__isScriptSetup', { enumerable: !1, value: !0 }), g;
    },
  }),
  V = { class: 'header-wrapper' },
  A = { class: 'container mx-auto px-4 md:px-8 flex items-center justify-between' },
  H = { class: 'relative z-10' },
  G = { href: '/', class: 'flex items-center' },
  W = ['src'],
  Y = { class: 'hidden lg:block' },
  q = { class: 'flex gap-10' },
  J = ['href'],
  K = { class: 'flex items-center justify-between px-6 py-4' },
  Q = ['src'],
  X = { class: 'flex flex-col h-full pt-4 pb-8 px-8' },
  Z = { class: 'flex flex-col gap-6' },
  $ = ['href'];
function ee(r, a, t, e, l, n) {
  return (
    d(),
    u('div', V, [
      o(
        'header',
        {
          class: i([
            'fixed top-0 left-0 w-full py-4 z-50 transition-all duration-500',
            [e.isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'],
          ]),
          ref: 'headerRef',
        },
        [
          o('div', A, [
            o('div', H, [
              o('a', G, [
                o(
                  'img',
                  {
                    class: 'h-[60px]',
                    width: '120',
                    height: '100',
                    format: 'webp',
                    src: e.mainData?.logo_escura,
                    alt: 'Logo',
                  },
                  null,
                  8,
                  W,
                ),
              ]),
            ]),
            o('nav', Y, [
              o('ul', q, [
                (d(!0),
                u(
                  _,
                  null,
                  y(
                    t.menuItems,
                    (s, c) => (
                      d(),
                      u('li', { key: c }, [
                        o(
                          'a',
                          {
                            href: s.url,
                            class: i([
                              'relative font-medium text-base pb-1 transition-colors duration-500 group',
                              {
                                'text-primary-dark hover:text-primary-gold': !e.isScrolled,
                                'hover:text-primary-gold': e.isScrolled,
                              },
                            ]),
                          },
                          [
                            v(h(s.label) + ' ', 1),
                            a[0] ||
                              (a[0] = o(
                                'span',
                                {
                                  class:
                                    'absolute bottom-0 left-0 w-full h-px bg-primary-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300',
                                },
                                null,
                                -1,
                              )),
                          ],
                          10,
                          J,
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
            x(
              e.MainButton,
              {
                class: '2xl:!text-sm text-xs !hidden lg:!block',
                title: t.ctaText,
                href: '#contact',
              },
              null,
              8,
              ['title'],
            ),
            o(
              'button',
              {
                class:
                  'relative z-50 lg:hidden flex flex-col justify-center items-center w-10 h-10',
                onClick: e.toggleMenu,
                'aria-label': 'Toggle Menu',
              },
              [
                o(
                  'span',
                  {
                    class: i([
                      'block w-7 h-0.5 transition-all duration-500 ease-in-out',
                      e.isMenuOpen ? 'bg-primary-dark rotate-45 translate-y-2' : 'bg-primary-dark',
                    ]),
                  },
                  null,
                  2,
                ),
                o(
                  'span',
                  {
                    class: i([
                      'block w-7 h-0.5 transition-all duration-500 ease-in-out my-1.5',
                      e.isMenuOpen ? 'bg-primary-dark opacity-0' : 'bg-primary-dark',
                    ]),
                  },
                  null,
                  2,
                ),
                o(
                  'span',
                  {
                    class: i([
                      'block w-7 h-0.5 transition-all duration-500 ease-in-out',
                      e.isMenuOpen
                        ? 'bg-primary-dark -rotate-45 -translate-y-2'
                        : 'bg-primary-dark',
                    ]),
                  },
                  null,
                  2,
                ),
              ],
            ),
          ]),
        ],
        2,
      ),
      o(
        'div',
        {
          class: i([
            'fixed top-0 right-0 w-80 h-screen bg-white shadow-2xl transform transition-transform duration-700 ease-in-out z-[99999]',
            e.isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          ]),
          ref: 'sidebarRef',
        },
        [
          o('div', K, [
            o('img', { class: 'h-[60px]', src: e.mainData?.logo_escura, alt: 'Logo' }, null, 8, Q),
            o(
              'button',
              {
                onClick: e.closeMenu,
                'aria-label': 'Fechar menu',
                class:
                  'text-2xl font-bold cursor-pointer text-primary-dark hover:text-primary-gold transition-colors duration-300',
              },
              ' × ',
            ),
          ]),
          o('div', X, [
            o('ul', Z, [
              (d(!0),
              u(
                _,
                null,
                y(
                  t.menuItems,
                  (s, c) => (
                    d(),
                    u('li', { key: c, class: 'mobile-menu-item' }, [
                      o(
                        'a',
                        {
                          href: s.url,
                          class:
                            'relative font-medium text-lg cursor-pointer pb-1 text-primary-dark hover:text-primary-gold transition-colors duration-300 inline-block group',
                          onClick: e.closeMenu,
                        },
                        [
                          v(h(s.label) + ' ', 1),
                          a[1] ||
                            (a[1] = o(
                              'span',
                              {
                                class:
                                  'absolute bottom-0 left-0 w-0 h-px bg-primary-gold transition-all duration-300 group-hover:w-full',
                              },
                              null,
                              -1,
                            )),
                        ],
                        8,
                        $,
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]),
            x(
              e.MainButton,
              {
                onClick: e.closeMenu,
                ref: 'mobileCta',
                class: '2xl:!text-sm text-xs !block lg:!hidden mt-8 mobile-cta',
                title: t.ctaText,
                href: '#contact',
              },
              null,
              8,
              ['title'],
            ),
          ]),
        ],
        2,
      ),
      o(
        'div',
        {
          class: i([
            'fixed inset-0 bg-black/50 z-[9999] transition-opacity duration-500',
            e.isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
          ]),
          onClick: e.closeMenu,
        },
        null,
        2,
      ),
    ])
  );
}
const re = k(U, [
  ['render', ee],
  ['__scopeId', 'data-v-625c45c6'],
]);
export { re as default };
