import Script from 'next/script'
import '@/styles/styles.scss';
import Header from '@/components/Basics/Header';
import Footer from '@/components/Basics/footer';

const web_resources = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: 'Abre tu Cuenta Digital - LAFISE Honduras',
  description: 'Con tu nueva Cuenta Digital podrás manejar tu dinero, depositar y pagar sin complicaciones. No esperes más y abre la tuya en minutos aquí.',
  openGraph: {
    keywords: 'Cuenta Digital, Cuenta de ahorro, Cuenta digital LAFISE',
    title: 'Abre tu Cuenta Digital - LAFISE Honduras',
    description: 'Con tu nueva Cuenta Digital podrás manejar tu dinero, depositar y pagar sin complicaciones. No esperes más y abre la tuya en minutos aquí.',
    images: [{ "url": web_resources+"/imagenes/open-graph/img_blhn_cuenta_digital_open_graph_meta_01@.webp" }],
    type: 'website',
  },
  alternates: {
    canonical: `https://www.lafise.com/blh/cuenta-digital`,
  },
}

export default function RootLayout(props) {
  const env = process.env.NODE_ENV;
  const IDTagManager = 'GTM-MK6G6C3';
  const web_resources = process.env.NEXT_PUBLIC_WEB_RESOURCES;
  const site = process.env.NEXT_PUBLIC_SITE;
  const headerName = '/cdn/basics/header-banco/v3.0/header-blh.html';
  const footerName = '/cdn/basics/footer-banco/v3.0/footer-blh.html';

  return (
    <html lang="es">
      <head>
      <title>Abre tu Cuenta Digital - LAFISE Honduras</title>
        <meta name="robots" content="index"></meta>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5" />
        <meta name="description" content="Con tu nueva Cuenta Digital podrás manejar tu dinero, depositar y pagar sin complicaciones. No esperes más y abre la tuya en minutos aquí."></meta>
        <meta name="keywords" content="Cuenta Digital, Cuenta de ahorro, Cuenta digital LAFISE" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin={"anonymous"} />
        <link rel="stylesheet" href="https://www.lafise.com/cdn/esmeralda/lafise-esmeralda-ds.v2.0.css" />
        <link rel="shortcut icon" href="https://www.lafise.com/cdn/imagenes/default/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://www.lafise.com/blh/cuenta-digital" />

        {/* <meta property="og:image" itemProp="image" content={`${web_resources}/og/contenido-seguro-opengraph.webp`} /> */}

        {
          process.env.NODE_ENV !== 'development' && <>
            <link rel="stylesheet" href="/cdn/basics/header-banco/v3.0/header.css" />
            <link rel="stylesheet" href="/cdn/basics/footer-banco/v3.0/css/footer-blh.css" />
          </>
        }

        {
          env !== 'development' && <>
            <script type="text/javascript" async defer
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${IDTagManager}');
            `}} />
          </>
        }
      </head>
      <body>
        <Header filename={headerName} />
        {props.children}
        <Footer filename={footerName} />
        <Script
          id="popper"
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          strategy='beforeInteractive'
        />
        <Script
          id="bootstrap5.0.2"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          strategy='beforeInteractive'
        />

        {
          env !== 'development' && <>
            <Script
              id="header-cdn"
              src="/cdn/basics/header-banco/v3.0/header.js"
              strategy='beforeInteractive'
            />
          </>
        }
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${IDTagManager}`} height="0" width="0" style={{ "display": "none", "visibility": "hidden" }}></iframe>
        </noscript>
      </body>
    </html>
  )
}


