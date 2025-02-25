import '../styles/button.css';
// import facebook from './assets/logos-and-icons/facebook.svg';


export interface SocialButtonProps {
    /** primary or secondary button type: indicates button style */
    primary?: boolean;
    /** What background color to use (only if button type is secondary)*/
    dark?: boolean;
    /** Button image url */
    image: string;
    /** Optional click handler */
    onClick?: () => void;
}


  /** Primary UI component for user interaction */
  export const SocialButton = ({
    primary = false,
    dark = false,
    image,
    ...props
  }: SocialButtonProps) => {
    // mode is primary if primary tag is included, else if its seconary we can choose between dark and light
    const mode = primary ? 'storybook-button--primary' : dark ? 'storybook-button--secondary--dark' : 'storybook-button--secondary--light';
    return (
      <button
        type="button"
        className={['button-base', 'button-social', mode].join(' ')}
        {...props}
      >
        <img src={image}></img>
      </button>
    );
  };