import React from "react";
import './avatar.scss';
import defaultAvt from "../../../assets/default-avatar.png";

interface AvatarProps {
    url?: string;
    size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ url = defaultAvt, size = 44}) => {

    return (
        <div className="avatar" style={{ width: size, height: size }}>
            {url && <img src={url} alt="Avatar"/>}
        </div>
    );
}

export default Avatar;
