import { NotificationProvider } from "web3uikit"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { MoralisProvider } from "react-moralis"
//import { Toaster } from "react-hot-toast"


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Component {...pageProps} />
                {/* <Toaster /> */}
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
