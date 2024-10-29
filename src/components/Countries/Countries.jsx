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
            {/* <Banner></Banner> */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">世界の国の総数 : {countries.length}</h1>
                        <p className="mb-5">
                        すべての国のリストとその詳細を提供します
                        </p>
                    </div>
                </div>
            </div>
            {/* <Banner></Banner> */}
            <div className="grid grid-cols-3 gap-4 m-24">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;