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
                <link rel="canonical" href="https://tweet.go5.run/"/>
                <title key="site:title">#TweetMaker | 🐤ログイン不要でハッシュタグツイートをできます。</title>
            </Head>
            <main className={styles.main}>
                <Link href="mailto:hi@kan.run"><a>
                    <button className={styles.button}><span>Contact</span></button>
                </a></Link>
                <div></div>
                <Link href="/en"><a>
                    <button className={styles.button}><span>EN site</span></button>
                </a></Link>
                <div></div>
            </main>
        </div>
    )
}


export default Page