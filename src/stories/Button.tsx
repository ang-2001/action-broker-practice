import React from 'react';

import './button.css';

export interface ButtonProps {
  /** primary or secondary button type: indicates button style */
  primary?: boolean;
  /** What background color to use (only if button type is secondary)*/
  dark?: boolean;
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  dark = false,
  label,
  ...props
}: ButtonProps) => {
  // mode is primary if primary tag is included, else if its seconary we can choose between dark and light
  const mode = primary ? 'storybook-button--primary' : dark ? 'storybook-button--secondary--dark' : 'storybook-button--secondary--light';
  return (
    <button
      type="button"
      className={['storybook-button', mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
