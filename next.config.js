module.exports = {
    trailingSlash: true,
    env: {
        serviceName: '#TweetMaker', //大文字小文字を区別する正式名称
        serviceNamePlain: 'tweetmaker', //大文字小文字を区別しない正式名称
        serviceDomain: 'tweet.go5.run', //httpsや語尾の/無しのドメインのみ(例:pennso.com)
        serviceDescription: '🐤Tweet maker that requires no login', //サービスの説明文を入力
        serviceIcon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f424.png' //サービスのアイコンを指定するためのURL
    }
};