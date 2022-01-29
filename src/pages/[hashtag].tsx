import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'
import { useRouter } from 'next/router'


import styles from "../styles/top.module.scss"

import { Notification, KIND } from "baseui/notification"
import { Input } from "baseui/input"
import {Search} from 'baseui/icon'
import {Button} from 'baseui/button'

// identicon lib
import BoringAv from "boring-avatars"


const Page = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleClick = (e) =>  {
        e = inputRef.current.value
        window.location.assign(`/${e}`)
    }
    const router = useRouter()
    
    const { hashtag } = router.query
    if (!router.isReady) {
        return null
    }
    const hash: string = hashtag as string
    return (
        <div>
            <Head>
                <link rel="canonical" href={`https://identicon.go5.run/${hash}`}/>
                <title key="site:title">#{hashtag} | #TweetMaker</title>
                <meta property="og:image" content={`https://res.cloudinary.com/nixo/image/upload/l_text:Sawarabi%20Gothic_50_bold:%23${hash},co_rgb:fff,w_1100,c_fit/v1643418283/tweetmaker-template_viwniv.png`}/>
            </Head>
            <main className={styles.main}>
                <div className={styles.notify}>
                <Notification  kind={KIND.warning}>
                    {() => "This is a demo version under development. Basically, it does not work properly."}
                </Notification>
                </div>
                <p>{hashtag}</p>
            </main>
        </div>
    )
}


export default Page