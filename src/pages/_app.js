// import useSWR, { SWRConfig } from 'swr'
// import fetch from 'isomorphic-unfetch';
import faLibraryInit from '../components/layout/fontAwesome';
import "antd/dist/antd.css";

faLibraryInit();

// const SWRValue = {
//     refreshInterval: 2000,
//     fetcher: (...args) => fetch(...args).then(res => res.json())
// }

function MyApp({ Component, pageProps }) {

    return (
        // <SWRConfig value={SWRValue}>
        <Component {...pageProps} />
        // </SWRConfig>
    )
}

export default MyApp