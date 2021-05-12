import React from 'react'
import SocialLinks from '../components/SocialLinks/SocialLinks'
import Card from '../components/Card/Card'
import Head from 'next/head'
import styles from './index.module.css'

const index = () => {
    return (
        <>
            <Head>
                <title>Murad Büyükaşık</title>
                <body className={styles.body} />
            </Head>
            <Card>
                <h1>Hi! My name's Murad,</h1>
                <p>
                    a fullstack developer based in the Netherlands.
                </p>
                <p className={styles.mt}>
                    This website is a work-in-progress and its source can be found <a href="https://github.com/MuradBuyukasik/muradbuyukasik.com" className="underline">here</a>.
                </p>
                <p className={styles.my}>
                    I will use this website to list my portfolio projects, resume, and to write my blog!
                </p>
                <SocialLinks />
            </Card>
        </>
    )
}

export default index
