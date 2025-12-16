import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  redirects: {
    // '/自分のサイトのパス': '飛ばしたいアフィリエイトURL'
    "/link/m3career/": "https://agent.m3career.com/",
    "/link/38-8931/": "https://www.38-8931.com/",
    "/link/pharmate/":
      "https://px.a8.net/svt/ejp?a8mat=45KFSQ+7O95GY+31X8+60WN7",
  },

  vite: {
    plugins: [tailwindcss()],
    // ▼ ここから下を追加！ビルドの出力設定です
    build: {
      rollupOptions: {
        output: {
          // JSファイルの出力設定（assets/js/フォルダに、ファイル名.js で出力）
          entryFileNames: "assets/js/[name].js",
          chunkFileNames: "assets/js/[name].js",

          // CSSや画像などの出力設定
          assetFileNames: (assetInfo) => {
            // CSSファイルの場合、強制的に 'style.css' という名前にする
            if (assetInfo.name && assetInfo.name.endsWith(".css")) {
              return "assets/css/style.css";
            }
            // その他のファイル（画像など）は assets/フォルダにそのままの名前で出力
            return "assets/[name][extname]";
          },
        },
      },
    },
  },
});
