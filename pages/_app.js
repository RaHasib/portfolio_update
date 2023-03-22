import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
