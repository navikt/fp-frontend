const FP_FRONTEND = 'fpsak';
const FP_TILBAKE_FRONTEND = 'fp/web/tilbake';
const LOKAL_FP_FRONTEND_PORT = '9000';
const LOKAL_FP_TILBAKE_FRONTEND_PORT = '9005';

const getPathToFpTilbakeFrontend = (href: string): string => {
  const hostAndContextPath = href.substr(0, href.lastIndexOf(FP_FRONTEND) + FP_FRONTEND.length);
  // Replace av port er lagt til for at kjøring i docker skal fungere korrekt. Vil ikke påvirke miljøene
  return hostAndContextPath.replace(new RegExp(FP_FRONTEND, 'g'), FP_TILBAKE_FRONTEND).replace(LOKAL_FP_FRONTEND_PORT, LOKAL_FP_TILBAKE_FRONTEND_PORT);
};

// @ts-ignore
window.getFpTilbakeUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:9005';
  }

  return getPathToFpTilbakeFrontend(window.location.href);
};

// Use dynamic import here to allow webpack to interface with module federation code
import('./bootstrap');
