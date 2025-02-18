import classic from './assets/images/card-classic.png';
import pro from './assets/images/card-pro.png';
import elite from './assets/images/card-elite.png';
import yellowHighlight from './assets/images/card-yellow-circle.png';
import blueHighlight from './assets/images/card-blue-circle.png';
import './card.css';
import { Check, XIcon } from './assets/utils';
import { Button } from './Button';
import { useState } from 'react';

export interface CardProps {
    /** Card label/title */
    title: string;
    /** Displayed price */
    price: number;
    /** Card description*/
    desc: string;
    /** Max number of open orders */
    orders?: number;
    /** Max single investment */
    single?: number;
    /** Max combined investment */
    combined?: number;
    /** Min investment*/
    min?: number;
    /** allowed free withdrawls*/
    withdrawls?: boolean;
    /** allowed to manage relationships*/
    manage?: boolean;
    /** specifies the card type and what image to display at the top */
    type?: "classic" | "pro" | "elite"; 
}

export const Card = ({
    title,
    price,
    desc,
    orders = 5,
    single = 1000,
    combined = 2000,
    min = 1,
    withdrawls = false,
    manage = false,
    type = "classic",
    ...props
}: CardProps) => {
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <div className={`card-container ${hovered ? "hover" : ""}`} id='card-container'>
            <section className='card-image-container'>
                <div className='overlay-container'>
                    {/* need to directly reference the images here because we need to apply these styles to them */}
                    <img src={yellowHighlight} alt="" className={`overlay-image background background-base ${hovered ? "hover" : ""}`} id='base'/>
                    <img src={blueHighlight} alt="" className={`overlay-image background background-transition ${hovered ? "hover" : ""}`} id='transition'/>
                    
                    {type === "elite" ? (
                        <img src={elite} alt='' className='overlay-image overlay'/>
                    ) : type === "pro" ? (
                        <img src={pro} alt='' className='overlay-image overlay'/>
                    ) : (
                        <img src={classic} alt='' className='overlay-image overlay'/>
                    )}
                </div>
            </section>

            <div className='card-contents'>
                <section className='card-header-container'>
                    <h3 className='title'>{title}</h3>
                    <span className='price-line'>
                        <h3>$</h3>
                        <h2 className='price'>{price}</h2>
                    </span>
                    <p className='description'>{desc}</p>
                </section>
                <hr />
                <section className='card-features-list'>
                    <div className="list-line">
                        <p>Max number of open orders</p>
                        <h4>{orders.toLocaleString('en', {useGrouping:true})}</h4>
                    </div>
                    <div className="list-line">
                        <p>Max single investment</p>
                        <h4>{single.toLocaleString('en', {useGrouping:true})}</h4>
                    </div>
                    <div className="list-line">
                        <p>Max combined investment</p>
                        <h4>{combined.toLocaleString('en', {useGrouping:true})}</h4>
                    </div>
                    <div className="list-line">
                        <p>Min investment</p>
                        <h4>{min.toLocaleString('en', {useGrouping:true})}</h4>
                    </div>
                    <div className="list-line">
                        <p>Free withdrawals once a week</p>
                        {withdrawls ? (
                            <Check />
                        ) : (
                            <XIcon />
                        )}
                    </div>
                    <div className="list-line">
                        <p>Relationship Manage</p>
                        {manage ? (
                            <Check />
                        ) : (
                            <XIcon />
                        )}
                    </div>
                </section>
                <hr />
                <div className={'button-container'} 
                    id='button' 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    <Button label='Open Account' />
                </div>
            </div>
        </div>
    )
}