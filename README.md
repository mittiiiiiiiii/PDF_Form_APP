# 銀行の入力フォームのMock

## 機能

PDFをサイトのバックグラウンドとしてレンダリング
その上にテキストボックス、チェックボックスをレンダリングすることで擬似的にPDFのような入力フォームを作成

### ディレクトリの機能

./server
- GPTからのレスポンスを返すAPI
  - アプリ側の単語を元にフォームにふさわしい文章を作成
    - プロンプトはこれから作成予定
- 入力フォームの情報をjsonで保存
  - 後にPDF(Word)に書き込みするAPIに送信する予定
  - jsonの各要素とフォームの対応付も行うべき

## 実行方法

1. リポジトリをクローン
  ```bash
  % git clone https://github.com/mittiiiiiiiii/PDF_Form_APP.git
  ```

2. ChatGPT APIを取得
  ![OPEN AI Platform](https://platform.openai.com/api-keys)

3. `./server`に`.env`ファイルを作成し、APIキーを環境変数として使えるようにする
  ```.env
  OPEN_API_KEY='取得したAPIキー'
  ```

4. APIの起動
  ```bash
  % cd server
  % make
  ```

5. Reactアプリの起動

  4.と同時に起動する必要があるため、別のターミナルタブを起動
  ```bash
  % yarn dev
  ```

  起動したローカルホストにアクセス

## 動作確認

![スクリーンショット](https://github.com/user-attachments/assets/ca796698-8591-49d7-80fc-4c03933d8152)

- 質問ボタンを押すとテキストボックスを上書き
- チェックボックスを押すとマークが付く
- プリントボタンを押すとAPI側にjsonが出力
  - テキストの内容が出力される
  - チェックしたチェックボックスがtrueになっている
- スタイルが崩れている可能性がある(修正したい)