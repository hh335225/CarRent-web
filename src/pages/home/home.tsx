import React from "react";
import './home.scss';
import CarCard from "../../components/molecules/carCard/carCard.tsx";
import CarList from "../../components/organisms/carList/carList.tsx";
import carListData from "../../database/carListData.tsx";

const Home = () => {
    return (
        <section className="home">
            <div className="title">Popular Car</div>
            <CarList list={carListData}/>

            <div className="title">Recomendation Car</div>
            <CarList list={carListData}/>
            <button className="showMoreCar">Show more car</button>
        </section>
    )
}

export default Home;