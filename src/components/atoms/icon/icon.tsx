import React from "react";
import './icon.scss';

interface IconProps {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
    size?: number;
    noti?: boolean;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 44, noti = false }) => {
    return (
        <div className="icon" style={{ width: size, height: size }}>
            {IconComponent && <IconComponent />}
        </div>
    );
}

export default Icon;
