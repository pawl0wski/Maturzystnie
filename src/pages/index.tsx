import React from "react";
import Head from "next/head";
import WelcomeBanner from "@/components/index/WelcomeBanner";

export default function Home() {
    return (
        <>
            <Head>
                <title>Maturzystnie</title>
            </Head>
            <main>
                <WelcomeBanner />
            </main>
        </>
    );
}
