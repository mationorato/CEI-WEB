import Head from 'next/head'

export default function CommonHead() {
    return (
        <Head>
            <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            {/* INFO */}
            <title key="title">CEI UBA</title>
            <meta name="title" content="Centro de Estudiantes de Ingeniería" />
            <meta name="description" key="description" content="Centro de estudiantes de La facultad de ingeniería de la UBA" />
            <meta name="keywords" content="fiuba,estudaintes ingeniería,ingeniería uba,uba,centro de estudiantes,cei" />
            <meta name="google-site-verification" content="6t2hDxsOpMM7QybXdCYkMUQz874vPVBe6A3CTkTp4nw" />

            {/* Open Fraph */}
            <meta property="og:title" key="og:title" content="CEI UBA" />
            <meta property="og:description" key="og:description" content="Centro de estudiantes de Ingeniería La Linea Recta" />
            <meta property="og:image" key="og:image" content="https://i.imgur.com/8UlV9Xg.jpg" />
            <meta property="og:url" key="og:url" content="https://cei.fi.uba.ar" />
            <meta property="og:image:type" key="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" key="og:image:width" content="1200" />
            <meta property="og:image:height" key="og:image:height" content="628" />
            <meta property="og:type" key="og:type" content="article" />
            <meta property="fb:app_id" key="fb:app_id" content="138179346792288" />

            {/* Favicon */}
            <link rel="shortcut icon" href="/img/favicon.png" />

            {/* Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet" />
            <link href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all" rel="stylesheet" />

            {/* Emojis */}
            <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />

            {/* Bootstrap */}
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous" />

            {/* crisp.chat */}
            {/* <script src="/scripts/crisp.js"></script> */}

            {/* Global site tag (gtag.js) - Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160933757-1"></script>
            <script src="/scripts/analytics.js"></script>

            {/* Facebook Pixel Code */}
            <script src="/scripts/pixel.js"></script>
        </Head>
    )
}
