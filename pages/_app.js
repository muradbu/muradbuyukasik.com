import Head from "next/head"
import "../styles/theme.css"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}