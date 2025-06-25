
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angularNuevo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angularNuevo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 450, hash: '88fc312df04ca65122e75d1b021f6206e3e76579c17f8afdefa32bab6b09ea02', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 963, hash: 'c92ac10936e0583cc1b63a67080ec7fb8853e78c6dd1643b16da76236904fc72', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20794, hash: '0abc3c90784f32ea94681347e2d9e92a297e4b23719ad9fbc4d2cb9b5ace8039', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
