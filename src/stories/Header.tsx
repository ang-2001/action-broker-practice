import React, { useEffect, useState } from 'react';

import { Button } from './Button';

import './header.css';
import { Logo, Hamborger, ExitIcon } from './assets/utils';


type Props = {
  /** Callback function passed by the page: allows accordion to block out(unrender) page when open */
  onAccordionToggle: (isActive: boolean) => void;
}

export const Header: React.FC<Props> = ({ onAccordionToggle }) => {
  const [isOpen, toggleAccordion] = useState<boolean>(false);
  
  // handles the state changes when the burger is clicked
  const handleAccordionToggle = () => {
    if (isOpen) {
      toggleAccordion(false);
      onAccordionToggle(false);
    }
    else {
      toggleAccordion(true);
      onAccordionToggle(true);
    }
  }

  // closes the accordion if window
  const handleResize = () => {
    toggleAccordion(false);
    onAccordionToggle(false);
  }

  useEffect(() => {
    // if the accordion menu is open, then we also add an event listener to close it if the window is resized
    if (isOpen) {
      window.addEventListener('resize', handleResize);
    }

    // then we clean up the event listener by unmounting
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <header className={`storybook-header ${isOpen ? "mobile" : ""}`}>
      {/* left-aligned logo */}
      <div className={'header-container'}>
        <div className={`logo ${isOpen ? "mobile" : ""}`}>
          <Logo />
        {/* center navigation links(goes nowhere)  */}
          <button className={'storybook-borger'} onClick={handleAccordionToggle}>
            { !isOpen ? (
              <Hamborger />
            ):(
              <ExitIcon />
            )}
          </button>
        </div>

        {!isOpen && (
          <>
            <ul className={`storybook-links ${isOpen ? "mobile" : ""}`}>
              <li>
                <a>Trading</a>
              </li>
              <li>
                <a>Company</a>
              </li>
              <li>
                <a>Contests</a>
              </li>
              <li>
                <a>Promotions</a>
              </li>
            </ul>
            <div className={`storybook-button-wrapper ${isOpen ? "mobile" : ""}`}>
              <Button dark label='Log In'/>
              <Button primary label='Sign Up'/>
            </div>
          </>
        )}
      </div>

      
      {isOpen && (
        <div className={`dropdown-container ${isOpen ? "mobile" : ""}`}>
          <ul className={`storybook-links ${isOpen ? "mobile" : ""}`}>
            <li>
              <a>Trading</a>
            </li>
            <li>
              <a>Company</a>
            </li>
            <li>
              <a>Contests</a>
            </li>
            <li>
              <a>Promotions</a>
            </li>
          </ul>
          <div className={`storybook-button-wrapper ${isOpen ? "mobile" : ""}`}>
            <Button dark label='Log In'/>
            <Button primary label='Sign Up'/>
          </div>
        </div>
      )}
    {/* sign in/sign up buttons */}
    {/* accordion only appears on medium/small viewport */}
  </header>
)};
