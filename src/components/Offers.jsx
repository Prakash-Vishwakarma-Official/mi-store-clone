import React from 'react';
import "../styles/Offers.css";
import Offer1 from './Offer1';
import "./Offer1.jsx"
const Offers = ({offer}) => {
    return (
        <>
            <div className="offersSection">
                {offer.map((item, index) => (
                    <Offer1 key={item.image} index={index} src={item.image} link={item.url} />
                ))}
            </div>
        </>
    )
}

export default Offers