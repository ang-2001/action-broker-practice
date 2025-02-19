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
  /** list of items each containing title, text, and image(optional) */
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
      {/* default image, hidden on mobile */}
      <div className="item-image-base">
          {/* gets the image of the item that is currently open */}
          <img src={items[openIndex].image} alt='' />
      </div>

      <div className='accordion-content'>
        {/* page info (title and description) */}
        <div className='accordion-header'>
          {header && (
            <h1>{header}</h1>
          )}
          {description && (
            <p>{description}</p>
          )}
        </div>

        {/* the actual accordion maps each item in the list to the content */}
        {items.map((item, index) => (
          <div key={index} className={'accordion-item-container'}>
            
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

               {/* image will be hidden if not mobile (not ideal) */}
              {openIndex === index && (
                <div className={'item-image'}>
                  <img src={item.image} alt=""/>
                </div>
              )}
              {/* the text that will display if the accordion item is opened */}
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