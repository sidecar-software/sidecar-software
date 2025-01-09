
import './home.css';
import Services from '../components/services.tsx';

let HomePage = () => {
    return <div>
<h1>Sidecar modes of operation</h1>
<p>Usually, our services are offered in some of the following modes:</p>

<div className="homeContainer">
    <Services />
</div>


    </div>;
}

export default HomePage;