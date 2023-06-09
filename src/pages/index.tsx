import React from "react";
import Head from "next/head";
import WelcomeBanner from "@/components/index/WelcomeBanner";
import FeaturesBanner from "@/components/index/FeaturesBanner";
import InvisibleSeparator from "@/components/global/InvisibleSeparator";

export default function Home() {
    return (
        <>
            <Head>
                <title>Maturzystnie</title>
            </Head>
            <main>
                <WelcomeBanner />
                <InvisibleSeparator />
                <FeaturesBanner />
                <InvisibleSeparator />
            </main>
        </>
    );
}
