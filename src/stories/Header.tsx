import React, { useEffect, useState } from 'react';

import { Button } from './Button';

import './header.css';
import { Logo, Hamborger, ExitIcon } from './assets/utils';


type Props = {
  /** Callback function passed by the containing page: allows dropdown to block out(unrender) page contents when open */
  onAccordionToggle: (isActive: boolean) => void;
}

export const Header: React.FC<Props> = ({ onAccordionToggle }) => {
  const [isOpen, toggleAccordion] = useState<boolean>(false);
  
  // handles the state changes when the burger is clicked
  const handleAccordionToggle = () => {
    if (isOpen) {
      // explicit value assignment because some async rendering not correctly change values
      toggleAccordion(false);
      onAccordionToggle(false);
    }
    else {
      toggleAccordion(true);
      onAccordionToggle(true);
    }
  }

  // closes the accordion if window is resized
  const handleResize = () => {
    toggleAccordion(false);
    onAccordionToggle(false);
  }

  // on page render
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
    // alternate style applied if accordion is open
    <header className={`storybook-header ${isOpen ? "mobile" : ""}`}>
      {/* left-aligned logo */}
      <div className={'header-container'}>
        <div className={`logo ${isOpen ? "mobile" : ""}`}>
          <Logo />
        {/* burger button(hidden by default) until certain viewport width met : when clicked changes open state*/}
          <button className={'storybook-borger'} onClick={handleAccordionToggle}>
            {/* renders different icons depending on if accordion is open or not */}
            { !isOpen ? (
              <Hamborger />
            ):(
              <ExitIcon />
            )}
          </button>
        </div>

        {/* if the accordion is not open ==>  we render links and buttons within the navbar: else unrender/removed */}
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

      {/* if accordion is open we render a dropdown screen containing the navs and buttons */}
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
  </header>
)};
