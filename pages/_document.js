import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-50 to-indigo-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
