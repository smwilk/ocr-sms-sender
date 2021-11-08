# OCR SMS Sender

OCR SMS SenderはOCR処理で起こした文字をSMSで送信するアプリです。

## 実行手順

1. 必要な依存パッケージをインストールします。ターミナルで以下のコマンドを実行してください。

```bash
npm i
```

2.  `.env`ファイルを作成してください。

3. `.env`ファイルに認証情報を追加します。`.env`に以下のコードをペーストしてください。

```
TWILIO_ACCOUNT_SID=XXXXX
TWILIO_AUTH_TOKEN=XXXXX
TWILIO_PHONE_NUMBER=XXXXX
```

`XXXXX`の文字列は、Twilioの認証情報のプレースホールダーを表しています。

`TWILIO_ACCOUNT_SID`と`TWILIO_AUTH_TOKEN`は、[Twilio Console](https://www.twilio.com/login)からAccount SIDとAuth Tokenを取得し、`XXXXX`にペーストしてください。
Account SIDとAuth Tokenの取得方法について詳しくは、ヘルプセンターの「[Account SIDとAuthTokenの確認方法](https://support.twilio.com/hc/en-us/articles/1260800697890-Account-SID%E3%81%A8AuthToken%E3%81%AE%E7%A2%BA%E8%AA%8D%E6%96%B9%E6%B3%95)」を参照してください。
`TWILIO_PHONE_NUMBER`は、Twilioから取得した電話番号をE.164形式で`XXXXX`にペーストしてください。

4. Reactアプリを起動します。ターミナルで以下のコマンドを実行してください。

```bash
npm start
```

5. Nodeサーバーを起動します。ターミナルのウィンドウをもう一つ開き、以下のコマンドを実行してください。

```bash
node server.js
```

[http://localhost:3000/](http://localhost:3000/)にブラウザからアクセスしてください。