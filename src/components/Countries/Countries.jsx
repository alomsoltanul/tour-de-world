import { useEffect, useState } from "react";
import Country from "./Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h2>Countires : {countries.length}</h2>
            <div className="grid grid-cols-3 gap-4 m-24">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;