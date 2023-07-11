import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Script from 'next/script'


const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-NMK1WMJZYB" async/>

        <Script id="google-analytics" strategy="afterInteractive" >
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NMK1WMJZYB');
           `}
        </Script>

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
