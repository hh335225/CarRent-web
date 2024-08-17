import React from "react";
import './home.scss';
import CarCard from "../../components/molecules/carCard/carCard.tsx";

const Home = () => {
    return (
        <section className="home">
            <CarCard name={"Koenigsegg"} imageUrl={""} type={"Sport"} capacity={2} steering={"Manual"} gasoline={90} retalPricePerDay={99.00} like={false}/>
        </section>
    )
}

export default Home;