import React from 'react'
import SocialLinks from '../components/SocialLinks'
import Card from '../components/Card'
import Head from 'next/head'

const headerClasses = `
    text-3xl
    font-extrabold
    text-white
`

const paragraphClasses = `
    text-lg
    text-white
`

const index = () => {
    return (
        <>
            <Head>
                <title>Murad Büyükaşık</title>
            </Head>
            <Card>
                <h1 className={headerClasses}>Hi! My name's Murad,</h1>
                <p className={paragraphClasses}>
                    a fullstack developer based in the Netherlands.
                </p>
                <p className={`${paragraphClasses} mt-5`}>
                    This website is a work-in-progress and it's source can be found <a href="https://github.com/MuradBuyukasik/muradbuyukasik.com" className="underline">here</a>.
                </p>
                <p className={`${paragraphClasses} my-5`}>
                    I will use this website to list my portfolio projects, resume, and to write my blog!
                </p>
                <SocialLinks />
            </Card>
        </>
    )
}

export default index
