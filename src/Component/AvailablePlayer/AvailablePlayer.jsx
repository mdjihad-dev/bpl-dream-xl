import React, { use, useState } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import Selected from '../Selected/Selected';


const AvailablePlayer = ({ fetchData, coin, setCoin }) => {

    const useData = use(fetchData);
    
    const [tab, setTab] = useState("Available");

    const [selected, setSelected] = useState([])
    
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-black">
          Avaliable Players {useData.length} / {selected.length}
        </h2>
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => setTab("Available")}
            className={`btn ${tab === "Available" ? "bg-amber-400" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setTab("Selected")}
            className={`btn ${tab === "Selected" ? "bg-amber-400" : ""}`}
          >
            Selected ({selected.length})
          </button>
        </div>
      </div>
      
      {tab === "Available" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-7 my-10">
          {useData.map((playerData) => (
            <PlayerCard
              coin={coin}
              setCoin={setCoin}
              playerData={playerData}
              selected={selected}
              setSelected={setSelected}
            ></PlayerCard>
          ))}
        </div>
        
      ) : (
        <Selected
          setSelected={setSelected}
          selected={selected}
          coin={coin}
          setCoin={setCoin}
        ></Selected>
      )}
    </div>
  );
};

export default AvailablePlayer;