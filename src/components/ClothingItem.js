import React from "react";
import "./ClothingItem.css"

function ClothingItem({name, type, color, image}) {
    return (
        <div className="clothingitem">
            <img src = {image} alt={name} className="clothingview" />
            <h3>{name}</h3>
            <p>Type: {type}</p>
            <p>Color: {color}</p>
        </div>
    );
}

export default ClothingItem;