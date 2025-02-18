import React, { useState } from 'react'
import './accordion.css';
import { Minus, Plus } from './assets/utils';



type AccordionItem = {
  title: string;
  text: string;
  image?: string;
}

export interface AccordionProps {
  /** header string for the page */
  header?: string;
  /** page description */
  description?: string;
  /** list of items containing title, text, and image(optional) */
  items: AccordionItem[];
}

export const Accordion = ({
  header,
  description,
  items,
}: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const toggleAccordion = (index: number) => {
    // if the selected index === currently open index, set to 0(first item) else open the index
    setOpenIndex(openIndex === index ? 0 : index);
  };

  return (
    
    <div className='accordion'>
      <div className="item-image-base">
          <img src={items[openIndex].image} alt='' />
      </div>
      <div className='accordion-content'>
        <div className='accordion-header'>
          {header && (
            <h1>{header}</h1>
          )}
          {description && (
            <p>{description}</p>
          )}
        </div>
        {items.map((item, index) => (
          <div key={index} className={'accordion-item-container'}>
            {/* image will be hidden if on mobile(inefficient) */}
            
            <div className={'item-content'}>
              <span onClick={ () => toggleAccordion(index)}>
                {openIndex === index ? (
                  <Minus />
                ): (
                  <Plus />
                )}
                <h3 className={`item-title ${openIndex !== index ? "inactive" : ""}`}>
                  {item.title}
                </h3>
              </span>
              {openIndex === index && (
                <div className={'item-image'}>
                  <img src={item.image} alt=""/>
                </div>
              )}

              {openIndex === index && (
                <p>
                  {item.text}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};