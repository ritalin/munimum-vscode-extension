# munimum-vscode-extension

機能拡張がアクティベート（有効化）された際にコンソールに`Hello World`と出すだけの最小構成の`VSCode Extension`

最初に一度`npm install`した後、`npm run build`を実行してソースビルド。
`dist`フォルダに成果物が作られる。

### VSCode for webとして起動

以下を実行すると`chromium`で起動する

```
npm run web
```

`--browserType=firefox`をつけると`Firefox`になる。

### VSCode on desktopとして起動

以下を実行すると、新たなプロセスとして起動する。

```
npm run code
```
