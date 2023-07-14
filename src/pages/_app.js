// import {Provider as AuthProvider} from 'next-auth/client'
// import { store } from '../app/store'
// import '../styles/globals.css'
// import { Provider } from 'react-redux'
// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }

// export default MyApp
import { SessionProvider } from "next-auth/react"
import { store } from '../app/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider >
    </SessionProvider>
  )
}
