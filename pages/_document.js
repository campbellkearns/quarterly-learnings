import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;400&family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}