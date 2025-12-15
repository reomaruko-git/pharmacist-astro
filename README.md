# 💊 薬剤師 Support.com LP Project

このプロジェクトは「薬剤師 Support.com」のランディングページ（LP）構築用リポジトリです。
**Astro v5** と **Tailwind CSS v4** を使用して構築されており、高速なパフォーマンスとメンテナンス性を重視しています。

## 🛠 技術スタック

- **Framework**: [Astro](https://astro.build) (v5)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) - `@tailwindcss/vite` プラグイン使用
- **UI Library**: [Swiper](https://swiperjs.com/) (カルーセルスライダー)
- **Deployment**: Mixhost (VS Code SFTP 拡張機能による同期)

## 📚 運用マニュアル

サイトの更新手順やトラブルシューティングは、以下の Google ドキュメントにまとめています。
作業前に必ずご一読ください。

- [📖 薬剤師 Support.com サイト運用・更新マニュアル](https://docs.google.com/document/d/1761VuldyVFLAbxw-2aAhH5MqzTOqLrkCzKRAYDTKdCM/edit?usp=sharing)

## 🚀 プロジェクト構造

主要なファイルとフォルダの構成です。

```text
/
├── public/
│   └── assets/
│       └── images/      # 🖼️ 画像ファイルはここに格納（パスは /assets/images/...）
├── src/
│   ├── layouts/
│   │   └── Layout.astro # 📐 共通レイアウト（ヘッダー、フッター、<head>設定）
│   ├── pages/
│   │   ├── index.astro  # 🏠 LPトップページ（メインコンテンツ）
│   │   ├── company.astro
│   │   └── privacy.astro
│   └── styles/
│       └── global.css   # 🎨 Tailwind v4設定・共通スタイル（@theme等はここ）
├── astro.config.mjs     # ⚙️ Astro設定（Viteプラグイン、ビルド出力設定、ショートリンク設定）
├── dist/                # 📦 ビルド生成物（この中身をサーバーにアップロード）
└── package.json
```

## 🧞 コマンド一覧

ターミナルで以下のコマンドを実行して開発・ビルドを行います。

| コマンド          | 説明                                                                               |
| :---------------- | :--------------------------------------------------------------------------------- |
| `npm install`     | **最初のみ実行**。依存関係（node_modules）をインストールします。                   |
| `npm run dev`     | **開発用サーバー起動**。`http://localhost:4321` でプレビューしながら編集できます。 |
| `npm run build`   | **本番用ビルド**。`dist/` フォルダに公開用ファイルを生成します。                   |
| `npm run preview` | ビルドされた `dist/` の内容をローカルで確認します。                                |

## 📦 デプロイ手順（Mixhost へのアップロード）

このプロジェクトは、VS Code の拡張機能（SFTP）を使用してデプロイするように構成されています。

1.  **ビルドを実行する**

    ```sh
    npm run build
    ```

    _エラーなく完了し、`dist` フォルダが更新されたことを確認してください。_

2.  **サーバーへ同期する**

    - VS Code で `F1` (または `Cmd+Shift+P`) を押す。
    - `SFTP: Sync Local -> Remote` を実行。
    - 確認画面で `Yes` を選択。
    - `dist` フォルダの中身のみが、自動的にサーバーの公開ディレクトリへ転送されます。

> **⚠️ 注意:** 手動でアップロードする場合は、`dist` フォルダの**中身すべて**を `public_html/yakuzaisupport/` にアップロードしてください。

## 🎨 スタイル編集について (Tailwind CSS v4)

このプロジェクトは **Tailwind CSS v4** を使用しています。
従来の設定ファイル（`tailwind.config.js`）は使用せず、CSS ファイル内で直接設定を行っています。

- **テーマ設定（色・フォント）**: `src/styles/global.css` 内の `@theme` ブロックを編集してください。
- **CSS の適用**: `src/layouts/Layout.astro` で `import '../styles/global.css';` しています。

## 📝 運用メモ

- **カルーセル**: Swiper.js を使用。設定は `index.astro` 最下部の `<script>` タグ内に記述されています。
  - _注意: `loopAdditionalSlides` 設定はバグの原因になるため使用しないでください。_
- **画像パス**: 必ず `/assets/images/ファイル名` の形式で記述してください。
- **PC/スマホ表示**: Tailwind の `md:` プレフィックス（例: `md:flex`）でレスポンシブ制御を行っています。

---

© 2025 Yakuzaishi Support.com. All Rights Reserved.
