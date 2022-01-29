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
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleClick = (e) =>  {
        e = inputRef.current.value
        window.location.assign(`/${e}`)
    }
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://tweet.go5.run/"/>
                <title key="site:title">#TweetMaker(ツイートメーカー) | 🐤ログイン不要でハッシュタグツイートをできます。</title>
                <meta property="og:image" content={"https://" + "tweet.go5.run" + "/img/ogp.png"}/>
            </Head>
            <main className={styles.main}>
                <div></div>
                <p>「#」は入力しないでください</p>
                <div className={styles.input_wrap}>
                <Input
                    endEnhancer={<Search size="18px" />}
                    placeholder="#ハッシュタグを入力"
                    inputRef={inputRef}
                />
                <div id="go">
                <Button onClick={handleClick}>
                    Create
                </Button>
                </div>
                </div>
            </main>
        </div>
    )
}


export default Page