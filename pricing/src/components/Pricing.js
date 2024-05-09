import React from "react";

const Pricing = ({title, price, storage, users, sendUp}) => {
    return(
        <div className="PricingCard">
            <header>
                <p className="card-title">{title}</p>
                <h1 className="card-price">{price}</h1>
            <div className="card-body">
                <div className="card-storage">10</div>
                <div className="card-users">5</div>

            </div>
            </header>
            <button className="card-btn">
                Choose this one
            </button>
            
        </div>
)
}

export default Pricing