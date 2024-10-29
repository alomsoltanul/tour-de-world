import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountryDetails = () => {
    const { id } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${id}`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
            .catch(error => console.error('Error fetching country data:', error));
    }, [id]);

    if (!country) {
        return <div className=' text-center '><span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span></div>;
    }

    const { name, flags, population, area, region, capital, languages } = country;

    return (
        <div
            style={{
                backgroundImage: `url(${flags.png})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className=" min-h-screen flex items-center justify-center text-white p-4"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-1 bg-black bg-opacity-50 p-10 rounded-lg ">
                <h2 className="text-3xl font-bold mb-4">{name.common}</h2>
                <p><strong>人口:</strong> {population}</p>
                <p><strong>エリア:</strong> {area} km²</p>
                <p><strong>地域:</strong> {region}</p>
                <p><strong>資本:</strong> {capital ? capital[0] : 'N/A'}</p>
                <p><strong>言語:</strong> {languages ? Object.values(languages).join(', ') : 'N/A'}</p>
            </div>
        </div>
    );
};

export default CountryDetails;
