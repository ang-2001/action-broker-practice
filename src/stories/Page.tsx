import React, { useState } from 'react';

import { Header } from './Header';
import './page.css';
import { Chart, Coin, CryptoCashback } from './assets/utils';
import { Button } from './Button';
import { Card } from './Card';
import { Accordion } from './Accordion';
import coin from './assets/images/platforms-trade-with-the-best.png';
import computer from './assets/images/platforms-flexibility.png';


export const Page: React.FC = () => {

  
  const [accordion, toggleAccordion] = useState<boolean>(false);
  const handleAccordionToggle = (isActive: boolean) => {
    toggleAccordion(isActive);
  }
  const items = [
    {
      title: 'Trade with the best', 
      text: 'Trade Binary Options with the best platform, on a wide selection of assets, with high payouts, lightning-fast order execution and get personal customer support around the clock, fast withdrawals and the expertise of industry leaders.', 
      image: `${coin}`
    },
    {
        title: 'Flexibility', 
        text: 'Are you a retail trader, money manager or an institutional investor? No worries - we have you covered with all the tools for successful Binary Options trading.', 
        image: `${computer}`
    }];


  return (
    <div className={'page-container'}>
      <Header onAccordionToggle={handleAccordionToggle}/>
      {/* first page section*/}
      {!accordion && (

        <div className={'content-container'}>
          <section className={'trade-page-container page-content'}>
            <div className={'info'}>
              <div className='tagline'>
                <div className={'title-container'}>
                  <h3 className='subtitle-light'>Trade binary options</h3>
                  <h1 className='title-light'>7% Crypto Cashback</h1>
                </div>
                <div className="text-wrapper">
                  <p className='text-light'>Binary Options are a financial instrument which provides you with the ability to trade on the price movements of different currency pairs, commodities and cryptocurrencies.</p>      
                </div>
              </div>
              <div className={'button-container'}>
                <Button primary label='Learn More'/>
              </div>
            </div>
            <div className='image'>
              <CryptoCashback />
            </div>
          </section>

          <section className='chart-page-container page-content'>
            <div className='image'>
              <Chart />
            </div>
            <div className="info">
              <div className="tagline">
                <h1>Get in early on the next big thing</h1>
                <p>With no account fees and no minimums to open an account, we can help even a modest amount of money go far. Our brokerage fees are among the lowest in the industry, for both conventional and crypto assets.</p>
              </div>
              <div className="button-container">
                <Button primary label='Learn More'/>
              </div>
            </div>
          </section>

          <section className={'account-types-container page-content'}>
            <h1>Account Types</h1>
            <div className={'cards-section'}>
              <Card 
                title='CLASSIC' 
                price={89} 
                desc='Entry level account with a recommended minimum deposit of'  
              />
              <Card 
                title='PRO' 
                price={139} 
                desc='Entry level account with a recommended minimum deposit of'
                withdrawls={true}  
                type='pro'
              />
              <Card 
                title='ELITE' 
                price={339} 
                desc='Entry level account with a recommended minimum deposit of'  
                withdrawls={true}
                manage={true}
                type='elite'
              />
            </div>
            
          </section>
          <section className={'page-content'}>
            <Accordion 
              items={items} 
              header='Platforms' 
              description='Easily deployed across any organization of any scale. Unite teams, tools, and systems while maintaining flexibility in how teams prefer to work.'
            />
          </section>
        </div>
      )}
    </div>
  );
};
