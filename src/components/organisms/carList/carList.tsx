import React from "react";
import './carList.scss';
import carModel from "../../../model/carModel.tsx";
import CarCard from "../../molecules/carCard/carCard.tsx";

interface CarListProps {
    list: carModel[];
}

const CarList: React.FC<CarListProps> = ({ list }) => {
    return (
        <div className="carList">
            {list.map((item, index) => (
                <CarCard
                    key={index}
                    name={item?.name}
                    imageUrl={item?.imageUrl}
                    type={item?.type}
                    capacity={item?.capacity}
                    steering={item?.steering}
                    gasoline={item?.gasoline}
                    retalPricePerDay={item?.retalPricePerDay}
                    like={item?.like}
                />
            ))}
        </div>
    );
}

export default CarList;
