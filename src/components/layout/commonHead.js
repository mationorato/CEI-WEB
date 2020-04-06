import Head from 'next/head'

export default function CommonHead() {
    return (
        <Head>        
            <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            {/* Fonts */}
            <link 
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" 
                rel="stylesheet"/>
            <script 
                src="https://kit.fontawesome.com/2d58059109.js" 
                crossOrigin="anonymous"></script>
            <link href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css" media="all" rel="stylesheet"/>
            <link href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css" media="all" rel="stylesheet"/>
            <link href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all" rel="stylesheet"/>

            {/* Bootstrap */}
            <link 
                rel="stylesheet" 
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
                crossOrigin="anonymous"/>

            {/* crisp.chat */}            
            <script src="/scripts/crisp.js"></script>

            {/* Global site tag (gtag.js) - Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160933757-1"></script>
            <script src="/scripts/analytics.js"></script>

            {/* Facebook Pixel Code */}
            <script src="/scripts/pixel.js"></script>
        </Head>
    )
}
