import "../styles/globals.css"
import { Provider } from "../context"
// import { StateContext } from "../context/StateContext"
import { Toaster } from "react-hot-toast"
import Layout from "../components/Layout"
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
