import { Link } from "react-router-dom";

const Country = ({ country }) => {
    const { name, flags, cca3, capital} = country;
    const styles = {
        width: '100%',
        height: '100%',
        objectFit: 'cover', 
        borderRadius: '8px',
    };
    const stylesBox = {
        width: '100%',
        height: '250px',
        
    };
    return (
        <div>
            <div className="card bg-base-100 image-full w-96 shadow-xl">
                <figure style={stylesBox} >
                    <img
                        style={styles}
                        src={flags.png}
                        alt="country flags" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title mr-auto ">{name?.common}</h2>
                    <p>国の首都: {capital}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/country/${cca3}`}>
                            <button className="btn btn-primary ">もっと知る</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;