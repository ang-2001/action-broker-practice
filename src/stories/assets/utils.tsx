import logo from './logos-and-icons/action-broker-logo.svg';
import hamburger from './logos-and-icons/nav-hamburger-icon.svg';
import exit from './logos-and-icons/nav-exit-icon.svg';
import crypto from './images/crypto-cashback.png';
import chart from './images/get-in-early-on-the-next-big-thing.png';
import classic from './images/card-classic.png';
import pro from './images/card-pro.png';
import elite from './images/card-elite.png';
import check from './logos-and-icons/checkmark.png';
import x from './logos-and-icons/x icon.png';
import coin from './images/platforms-trade-with-the-best.png';
import plus from './logos-and-icons/plus-circle 1.png';
import minus from './logos-and-icons/minus-circle 1.png';

// just some util exports to make it easier to add images
export const Logo = () => {
    return (
        <img src={logo} alt='Icon'/>
    )
};

export const Hamborger = () => {
    return (
        <img src={hamburger} alt='Hamburger'/>
    )
};

export const ExitIcon = () => {
    return (
        <img src={exit} alt='Exit' />
    )
};


export const CryptoCashback = () => {
    return (
        <img src={crypto} alt='Crypto Cashback' />
    )
}

export const Chart = () => {
    return (
        <img src={chart} alt='Chart' />
    )
}

export const Classic = () => {
    return (
        <img src={classic} alt="" />
    )
}

export const Pro = () => {
    return (
        <img src={pro} alt="" />
    )
}

export const Elite = () => {
    return (
        <img src={elite} alt="" />
    )
}

export const Check = () => {
    return (
        <img src={check} alt="" />
    )
}

export const XIcon = () => {
    return (
        <img src={x} alt="" width={'24px'} height={'24px'}/>
    )
}

export const Coin = () => {
    return (
        <img src={coin} alt=''/>
    )
}

// set sizes 
export const Plus = () => {
    return (
        <img src={plus} alt="" width={16} height={16}/>
    )
}

export const Minus = () => {
    return (
        <img src={minus} alt="" width={16} height={16}/>
    )
}