import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='html' lang="en" style={{ margin: 0, padding: 0 }}>
      <Head />
      <body className='body' style={{ margin: 0, padding: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
