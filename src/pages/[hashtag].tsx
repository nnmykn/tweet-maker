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
    if (!router.isReady) {
        return null
    }
    const { hashtag } = router.query
    const hash: string = hashtag as string
    const urlcomp = encodeURI(hash)
    const ogpurl = "https://res.cloudinary.com/nixo/image/upload/l_text:Sawarabi%20Gothic_50_bold:%23" + hash + ",co_rgb:fff,w_1100,c_fit/v1643418283/tweetmaker-template_viwniv.png"
    return (
        <div>
            <Head>
                <link rel="canonical" href={"https://tweet.go5.run/" + hash}/>
                <title>#{hashtag} | #TweetMaker</title>
                <meta property="og:image" content={String(ogpurl)} />
            </Head>
            <main className={styles.main}>
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
                <h1>#{hashtag}</h1>
                <img src={`${ogpurl}`} alt={`#${hashtag}`} width="80%" height="auto" />
                <div></div>
                <a href={`https://twitter.com/intent/tweet?text=%23${hash}%20https%3A%2F%2Ftweet.go5.run%2F${hash}`}>ツイートする</a>
            </main>
        </div>
    )
}


export default Page