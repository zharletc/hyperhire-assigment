import { Viewport } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  height: "device-height"
}
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="viewport"
          content={`
            width=${viewport.width},
            initial-scale=${viewport.initialScale},
            user-scalable=${viewport.userScalable},
            minimum-scale=${viewport.minimumScale},
            maximum-scale=${viewport.maximumScale},
            viewport-fit=${viewport.viewportFit},
            height=${viewport.height}
          `}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
