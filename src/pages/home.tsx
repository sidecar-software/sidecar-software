import { Helmet } from 'react-helmet-async';
import './home.css';

const HomePage = () => {
    return (
        <>
          <Helmet>
            <title>Sidecar | Elasticsearch &amp; Search Engineering Experts</title>
            <meta name="description" content="Expert Elasticsearch and search engineering consulting. We help teams design, fix, and scale their search infrastructure. Official Elastic Services Partner since 2024." />
            <meta property="og:title" content="Sidecar | Elasticsearch &amp; Search Engineering Experts" />
            <meta property="og:description" content="Expert Elasticsearch and search engineering consulting. Official Elastic Services Partner since 2024." />
            <meta property="og:url" content="https://sidecar.software/" />
          </Helmet>
        </>
    )
}

export default HomePage;