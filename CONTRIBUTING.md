# Contribution

## 開発

TypeScript で記述され，Webpack + ts-loader を用いて ES3 相当のスクリプトに変更しています[^es3]．  

```bash
yarn        # 依存関係のインストール
yarn dev    # ホットリロード
yarn build  # ビルド
```

- Babel が出力するソースコードを Illustrator のインタプリタが解釈できないため，必要に応じて Polyfill を `./src/polyfill.ts` に手動で記述しています．
- 三項演算子を入れ子で使用すると，適切に処理されない場合があります.

[^es3]: Adobe Illustrator に搭載されているインタプリタは，ECMAScript 3 に相当する JavaScript を解釈します．
