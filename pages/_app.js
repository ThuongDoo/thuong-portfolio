import "../styles/globals.css";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

// Head
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Đỗ Mạnh Thường - Dịch Vụ Web & IT</title>

        <meta
          name="description"
          content="Portfolio và dịch vụ lập trình web của Đỗ Mạnh Thường"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Đỗ Mạnh Thường - Dịch Vụ Web & IT"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta property="og:title" content="Đỗ Mạnh Thường - Dịch Vụ Web & IT" />
        <meta
          property="og:description"
          content="Portfolio và dịch vụ lập trình web của Đỗ Mạnh Thường"
        />
        <meta
          property="og:image"
          content="https://thuongdo.workfolio.asia/thumbnail.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thuongdo.workfolio.asia" />

        {/* Twitter Card (phòng khi share qua Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Đỗ Mạnh Thường - Dịch Vụ Web & IT"
        />
        <meta
          name="twitter:description"
          content="Portfolio và dịch vụ lập trình web của Đỗ Mạnh Thường"
        />
        <meta
          name="twitter:image"
          content="https://thuongdo.workfolio.asia/thumbnail.png"
        />
      </Head>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
