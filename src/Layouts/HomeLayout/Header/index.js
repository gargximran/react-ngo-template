import React from "react";
import SubNav from "./SubNav";
import {ReactComponent as WebLogo} from './../../../Assets/Images/logo.svg'

const Header = () => {
    return (
        <div className={'absolute top-0 left-0 w-full flex justify-between z-30'}>
            <div className={'flex items-center pl-2 md:pl-4 pt-2'}>
                <h2 className={'text-gray-800 flex items-center'}><WebLogo size={60} className={'hidden md:flex'}/>
                    <WebLogo size={32} className={'md:hidden'}/> <span
                        className={'pl-1 md:pl-3 md:font-bold font-primary text-sub-head-6 md:text-sub-head-2 font-medium tracking-wider'}>NGO</span>
                </h2>
            </div>
            <div className={''}>
                <SubNav />
            </div>
        </div>
    );
};

export default Header;
