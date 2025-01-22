import Appearable from '../components/appearable';
import './home.css';

let HomePage = () => {
    return (
        <Appearable>
            <div className='home-page'>
                <h1>Welcome to Sidecar</h1>
                <p>
                    We are a software development company based in Prague, Czech Republic.
                    We specialize in web and mobile applications, as well as custom software solutions.
                </p>
            </div>
        </Appearable>
    )
}

export default HomePage;