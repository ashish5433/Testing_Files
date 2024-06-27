import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */}
      </Head>
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */}

      <link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@300,500&display=swap" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
      />

      <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,300,200&display=swap" rel="stylesheet" />
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

