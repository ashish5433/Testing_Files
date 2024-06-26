import '@/styles/globals.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/components/loading';

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    // Hide loading screen when the component mounts
    handleRouteChangeComplete();

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router]);


  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}
