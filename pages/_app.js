import Head from "next/head"
import "tailwindcss/tailwind.css"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}