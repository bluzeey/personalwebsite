import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html prefix="og: http://ogp.me/ns#">
      <Head>
          <meta 
            property="og:title"
            content="Sahil Maheshwari|Web Developer"
            />
          <meta 
            name="image"
            property="og:image" 
            content="%PUBLIC_URL%/shoeDog.jpg" 
          />
          <meta 
            property="og:description" 
            content="A web developer's portfolio"
          />
          <meta 
            property="og:url" 
            content="https://www.sahil-maheshwari.com/" 
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}