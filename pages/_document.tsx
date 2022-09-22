import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/logos/AGlogo.svg"
          />
          <link
            rel="icon"
            type="image/svg"
            sizes="32x32"
            href="/static/logos/AGlogo.svg"
          />
          <link
            rel="icon"
            type="image/svg"
            sizes="16x16"
            href="/static/logos/AGlogo.svg"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
