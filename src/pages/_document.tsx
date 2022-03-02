import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto+Slab:wght@400;600;900&display=swap" rel="stylesheet" />
          <link rel='shortcut icon' type='image/x-icon' href='/images/favicon.ico' />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      </Html>
    )
  }
}
