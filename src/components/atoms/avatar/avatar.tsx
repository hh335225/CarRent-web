import React from "react";
import './avatar.scss';

interface AvatarProps {
    url?: string;
    size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ url, size = 44}) => {

    return (
        <div className="avatar" style={{ width: size, height: size }}>
            {url && <img src={url} alt="Avatar"/>}
        </div>
    );
}
export default Avatar;
