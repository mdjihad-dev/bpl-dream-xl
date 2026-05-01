import React from 'react';
import { FaFile } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Selecteds = ({ selected, setSelected, coin, setCoin}) => {

    const handleBtnClick = (player) => {
      const filtered = selected.filter((fiterPlayer) => fiterPlayer.name !== player.name,
      );

      setSelected(filtered);

      setCoin(coin + player.price);
    };

    return (
      <div className="">

        
        {selected.length === 0 ? (
          <div className="w-full min-h-56 flex flex-col items-center justify-center">
            <FaFile className="w-13 h-auto" />
            <h1 className="text-xl font-semibold text-gray-900">No Data</h1>
            <p className="text-md font-semibold">
              Please add players to see them here
            </p>
          </div>
        ) : (
          selected.map((player) => (
            <div
              key={player.id}
              className="border my-8 py-7 px-5 border-red-600 flex items-center justify-between"
            >
              <div className="">
                <img
                  className="w-14 h-auto rounded-lg"
                  src={player.image}
                  alt=""
                />
                <h1 className="text-md font-semibold">{player.name}</h1>
                <p>{player.country}</p>
              </div>
              <div onClick={() => handleBtnClick(player)} className="btn">
                <MdDelete />
              </div>
            </div>
          ))
        )}
      </div>
    );
    }


export default Selecteds;