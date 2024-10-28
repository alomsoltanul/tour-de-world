import { Link } from "react-router-dom";

const Country = ({ country }) => {
    const { name, flags, cca3 } = country;
    return (
        <div>
            <div className="card bg-base-100 image-full w-96 shadow-xl">
                <figure>
                    <img
                        src={flags.png}
                        alt="country flags" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name?.common}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/country/${cca3}`}>
                            <button className="btn btn-primary">Know More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;