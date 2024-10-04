import "@/styles/globals.css";
import { AppProps } from 'next/app';
import { Layout } from "@/src/Core/index";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-full ">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default App;