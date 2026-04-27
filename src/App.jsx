import { Suspense, useState } from "react";
import AvailablePlayer from "./Component/AvailablePlayer/AvailablePlayer";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Newsletter from "./Component/Newsletter/Newsletter";

const playerData = async () => {
  const data = await fetch("data.json").then((res) => res.json());
  return data;
};

function App() {
  const fetchData = playerData();

  const [coin, setCoin] = useState(5000);

  return (
    <>
      <Header coin={coin}></Header>
      <main>
        <Hero></Hero>
        <Suspense
          fallback={
            <span className="loading loading-spinner text-success"></span>
          }
        >
          <AvailablePlayer
            fetchData={fetchData}
            coin={coin}
            setCoin={setCoin}
          ></AvailablePlayer>
        </Suspense>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
