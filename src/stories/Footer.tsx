import { Logo } from './assets/utils';
import { SocialButton } from './ButtonSocial';
import './footer.css';
import facebook from './assets/logos-and-icons/facebook.svg';
import linkedin from './assets/logos-and-icons/linkedin.svg';
import twitter from './assets/logos-and-icons/twitter.svg';
import rating from './assets/logos-and-icons/rating.svg'
import experience from './assets/images/1.png';
import star from './assets/images/2.png';

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className={'footer-container'}>
        <div className={'content-area'}>
            <section className={'promo-section footer-content-wrapper'}>
                <Logo />
                <p>Trading in the financial markets carries a high level of risk and may not be suitable for every investor. Optionfield recommends that you only trade with money that you can afford to lose.</p>
                <div className={'social-list'}>
                    <SocialButton image={facebook} />
                    <SocialButton image={twitter} />
                    <SocialButton image={linkedin} />                
                </div>
            </section>
            <section className={'extra-section'}>
                <div className={'links-container footer-content-wrapper'}>
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                        <li>
                            <a>Trading</a>
                        </li>
                        <li>
                            <a>Terms and Conditions</a>
                        </li>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className={'awards-container footer-content-wrapper'}>
                    <h3>Awards</h3>
                    <div className={'award-image-container'}>
                        <img src={experience} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                <div className={'ratings-container footer-content-wrapper'}>
                    <h3>Rating</h3>
                    <div>
                        <h3>4.7</h3>
                        <img src={rating} alt="" />
                    </div>
                </div>
            </section>
            {/* 48px (3em) padding bottom border-bottom*/}
        </div>
        {/* 24px (1.5 em) margin */}
        <div className='license-info'>
            <p>
                Action Broker, Suite 305, Griffith Corporate Centre, Kingstown, Saint Vincent and the Grenadines, is incorporated under
                registration number 24466 IBC 2018 by the Registrar of International Business Companies, registered by the Financial Services Authority of Saint Vincent and the Grenadines.
                © 2022 Action Broker. All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}