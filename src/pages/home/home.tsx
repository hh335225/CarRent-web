import React from "react";
import './home.scss';
import CarCard from "../../components/molecules/carCard/carCard.tsx";
import CarList from "../../components/organisms/carList/carList.tsx";
import carListData from "../../database/carListData.tsx";

const Home = () => {
    return (
        <section className="home">
            <CarList list={carListData}/>
        </section>
    )
}

export default Home;