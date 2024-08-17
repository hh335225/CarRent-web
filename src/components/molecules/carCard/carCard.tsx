import React from "react";
import './carCard.scss';
import CarModel from "../../../model/carModel.tsx";
import carImage from "../../../assets/car.png";
import { ReactComponent as LikeIcon } from "../../../assets/icons/like.svg";
import { ReactComponent as UnlikeIcon } from "../../../assets/icons/unlike.svg";
import { ReactComponent as GasStationIcon } from "../../../assets/icons/gas-station.svg";
import { ReactComponent as PeopleIcon } from "../../../assets/icons/people.svg";
import { ReactComponent as SteeringIcon } from "../../../assets/icons/steering.svg";

const CarCard: React.FC<CarModel> = (props) => {
    const screenWidth = window.screen.width;
    const carWidth = (screenWidth - 2 * 40 - 5 * 30) / 6;
    const carHeight = carWidth * 4 / 3;

    const { name, type, capacity, gasoline, steering, retalPricePerDay, like } = props;

    return (
        <div className="carCard flexCol" style={{ width: carWidth, height: carHeight }}>
            <div className="carInfo-top flexRow">
                <div>
                    <h3 className="carName">{name}</h3>
                    <span className="carType">{type}</span>
                </div>
                <button className="likeCar">
                    {like ? <LikeIcon /> : <UnlikeIcon />}
                </button>
            </div>
            
            <div className="carImage">
                <img src={carImage} alt="" />
            </div>

            <div className="carInfo-bottom">
                <div className="carDetail flexRow">
                    <span><GasStationIcon />{gasoline}L</span>
                    <span><SteeringIcon />{steering}</span>
                    <span><PeopleIcon />{capacity} people</span>
                </div>
                <div className="price-per-day flexRow">
                    <span>
                        <span className="textBold">${retalPricePerDay.toFixed(2)}/</span>
                        <span className="textSmall">day</span>
                    </span>
                    <button>Rent Now</button>
                </div>
            </div>
        </div>
    )
}

export default CarCard;