import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'


import styles from "../styles/top.module.scss"

import { Notification, KIND } from "baseui/notification"
import { Input } from "baseui/input"
import {Search} from 'baseui/icon'
import {Button} from 'baseui/button'


const Page = () => {
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://tweet.go5.run/en/"/>
                <title key="site:title">#TweetMaker | 🐤Tweet maker that requires no login</title>
                <meta property="og:image" content={"https://" + "tweet.go5.run" + "/img/ogp.png"}/>
            </Head>
            <main className={styles.main}>
                <div className={styles.notify}>
                <Notification  kind={KIND.warning}>
                    {() => "This is a demo version under development. Basically, it does not work properly."}
                </Notification>
                </div>
                <Link href="mailto:hi@kan.run"><a>
                    <button className={styles.button}><span>Contact</span></button>
                </a></Link>
                <div></div>
            </main>
        </div>
    )
}


export default Page