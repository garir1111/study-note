# study-note

## 免責事項

本ノートに記載されている内容は全て個人の見解であり、所属組織の公式見解ではありません。
また、技術的正確性は保証されていません。

This note represents personal views, not the official stance of my organization.
Technical accuracy is not guaranteed.

## 概要

個人の勉強の記録です．

It's for my personal study records.

## 仕組み

勉強用メモのため、コマンドの実行結果をコピペすることがあります．
その場合、ユーザ名(本名)が記事に載ってしまうことになります．

それを回避するために`pre-commit`ライブラリを用いて、コミットの直前に
匿名化用の js である`src >> anonymizeName.js`を実行しています．

`anonymizeName.js`は同階層にある.env ファイルの`YOURNAME`の値を見に行き、
それを置換前の値とし、置換を行うロジックになっています．

この部分のロジックを使いたければ、ご自由にご活用ください．
