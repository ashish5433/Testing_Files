import '@/styles/globals.css'
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import Loading from '@/components/loading';
import FontFaceObserver from 'fontfaceobserver';

import Router, { useRouter } from 'next/router';
import MainNav from '@/components/MainNav';
import CustomCursor from '@/components/CustomCursor';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => {
      setInterval(()=>{

        setLoading(false);
      },11000)
    }

    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);

    // Ensure the loading screen stays until Material Icons are loaded
    const loadMaterialIcons = () => {
      return new Promise((resolve) => {
        const materialIconsObserver = new FontFaceObserver('Material Symbols Outlined', { weight: 100 });

        materialIconsObserver.load(null, 10000).then(() => {
          resolve();
          setIsLoaded(true);
        }).catch(() => {
          resolve(); // Resolve even if it fails to prevent getting stuck
          setIsLoaded(true);
        });
      });
    };

    const onLoad = async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 3000); // Ensure at least 3 seconds of loading
      });

      await loadMaterialIcons();
      handleRouteChangeComplete();
    };

    if (router.pathname === '/') {
      onLoad(); // Trigger the initial load check only for the main landing page
    } else {
      setLoading(false);
    }

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router.pathname]);
  return (
    <>
    <Head>
        <title>Kir.AI - Rental Platform</title>
        <link rel="icon" href="/favicons/home.png"/>
      </Head>
      {loading && <Loading />}
      <CustomCursor/>
      <MainNav/>

      <Component {...pageProps} />
    </>
  );
}
