import 'bootstrap/dist/css/bootstrap.css'
// import "../css/customcss.css";

import Nav from "../components/Nav/Nav"
import Head from 'next/head'


export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Next.JS</title>
            </Head>
            <Nav />
            <Component {...pageProps} />
            <span>Copyright</span>
        </div>
    )
}
