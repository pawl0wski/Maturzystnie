import {Montserrat} from "next/font/google";
import React from "react";
import "@/styles/global.scss"

interface AppProps {
    Component: React.FunctionComponent,
    pageProps: {}
}

const montserrat = Montserrat({subsets: ["latin"]})
export default function App({Component, pageProps}: AppProps) {
    return <main className={montserrat.className}>
        <Component {...pageProps}/>
    </main>
}
