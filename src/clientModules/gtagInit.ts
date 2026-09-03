import type {ClientModule} from '@docusaurus/types';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };
  }
}

const clientModule: ClientModule = {};
export default clientModule;
