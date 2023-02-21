import React from "react";
import { Link } from "react-router-dom";

function Country({ data, darkMode, handler}) {
    const sName = (country) => {
        handler(country);
    };

    return (
        <div className={`country ${darkMode}`} onClick={() => sName(data.name.common.replace(" ", "-"))}>
            <Link to={data.name.common.replace(" ", "-")} >
                <img src={data.flags[0]} alt="country flag" className="flag"></img>
                <div className="country_details">
                    <h2>{data.name.common}</h2>
                    <div className="population">
                        <p>
                            <b>Area:</b>{" "}
                            {data.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km2"}
                        </p>
                    </div>
                    <div className="region">
                        <p>
                            <b>Region:</b> {data.region}
                        </p>
                    </div>
                    <div className="capital">
                        <p>
                            <b>Capital:</b> {data.capital}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Country;