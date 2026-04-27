import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const PlayerCard = ({ playerData, selected, setSelected, coin, setCoin }) => {
  const { name, country, image, role, battingType, price, rating } = playerData;

  const [isSelected, setisSelected] = useState(false);

  const selectedData = () => {

    const newCoin = coin - price;

    if(newCoin >= 0 ){
        setCoin(coin - price)
    }
    else{
        alert('No Coin Available')
        return
    }

    setisSelected(true);
    setSelected([...selected, playerData]);

  };

  return (
    <div className="card bg-base-100 w-96 shadow-2xl">
      <figure>
        <img className="w-full h-64 object-cover" src={image} alt="" />
      </figure>

      <div className="card-body">
        <div className="flex items-center gap-2">
          <FaUser />
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaUser />
            <p className="font-semibold text-md">{country}</p>
          </div>
          <div className="btn">All Rounder</div>
        </div>

        <hr className="text-gray-800" />
        <p>{rating}</p>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-md">{role}</p>
          <h3 className="font-semibold text-md">{battingType}</h3>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-md">Price: {price}</p>

          <button
            onClick={() => selectedData()}
            disabled={isSelected ? true : false}
            className={`btn ${isSelected ? "cursor-pointer" : ""}`}
          >
            {isSelected ? "Selected" : "Choise Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
