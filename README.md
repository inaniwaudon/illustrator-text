# illustrator-text

文字サイズを良い具合に調整する Adobe Illustrator 用スクリプトです．広告等に散見される，行頭と行末が揃ったテキストを表現するために，文字サイズを行ごとに調節します．

**illustrator-text** - a script for Adobe Illustrator that adjusts the font size just right. It adjusts font sizes line by line to represent text that is aligned at the beginnings and ends of a lines.

## 使用方法

### スクリプトの入手

[Releases](https://github.com/inaniwaudon/illustrator-text/releases) から `text.jsx` をダウンロードします．

### スクリプトの実行

1. ルビを振るテキストを選択します．テキストは適当に改行しておく必要があります．
2. Illustrator 上で `text.jsx` を実行します．

Illustrator では，以下のいずれかの方法でスクリプトを実行できます．
- `text.jsx` ファイルをワークスペース内にドラッグアンドドロップする．
- ファイル → スクリプト → その他スクリプト から `text.jsx` を選択する．
- 以下のディレクトリに `text.jsx` を配置し，ファイル → スクリプト から実行する．
  - Mac: `/Applications/Adobe Illustrator CC xxxx/Presets/ja_JP/スクリプト`
  - Windows: `C:\Program Files\Adobe\Adobe Illustrator CC 2020\Presets\Scripts`

### 仕様

- **行間**  
1 行目の行間を基準にして，各行の行間が均等になるように調整されます．
- **その他項目**  
スクリプトは文字サイズのみを調整するため，その他の項目（カーニング等）は維持されます．
- **級下げ・級下げ**  
文字サイズは行ごとに統一されます．特定の箇所のみ小さく／大きく（級下げ／上げ）したい場合には，水平比率・垂直比率を設定してください．

## License

Copyright (c) 2024 いなにわうどん.
This script is released under the MIT License, see [LICENSE](./LICENSE).

- MIT ライセンスに従って，自由に使用・再配布等を行うことができます．
