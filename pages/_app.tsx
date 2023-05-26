import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import RPSFunProvider from "context/RPSFunProvider";
import Head from "next/head";
import Layout from "components/layout/Layout/Layout";
import Rules from "components/layout/Rule/rule";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RPSFun</title>
        <meta name="description" content="RPSFun" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <React.Fragment>
        <RPSFunProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Rules />
        </RPSFunProvider>
      </React.Fragment>
    </>
  );
}
