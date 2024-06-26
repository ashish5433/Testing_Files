import '@/styles/globals.css'
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import Loading from '@/components/loading';
import FontFaceObserver from 'fontfaceobserver';

import Router from 'next/router';
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);

    // Ensure the loading screen stays until Material Icons are loaded
    const loadMaterialIcons = () => {
      return new Promise((resolve) => {
        const materialIconsObserver = new FontFaceObserver('Material Symbols Outlined', { weight: 100 });

        materialIconsObserver.load(null, 10000).then(() => {
          resolve();
        }).catch(() => {
          resolve(); // Resolve even if it fails to prevent getting stuck
        });
      });
    };

    const onLoad = async () => {
      await loadMaterialIcons();
      handleRouteChangeComplete();
    };

    onLoad(); // Trigger the initial load check

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, []);
  return (
    <>
    {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}
