import React from 'react';
import { BsActivity } from "react-icons/bs";
import { TbZodiacCancer } from "react-icons/tb";
import '../style/Header.css'
const Header = () => {
    return (
        <div className="header">
            <div>
                <BsActivity/>
            </div>
            <div>
                CancerWisePro
            </div>
        </div>
    );
};

export default Header;