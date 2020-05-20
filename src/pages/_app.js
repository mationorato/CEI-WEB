import faLibraryInit from '../components/layout/fontAwesome';
import "antd/dist/antd.css";

faLibraryInit();

function MyApp({ Component, pageProps }) {

    return (
        <Component {...pageProps} />
    )
}

export default MyApp