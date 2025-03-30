import Link from 'next/link';
import Image from 'next/image';
import Button from './Button.jsx';
import navbarStyles from '../styles/Navbar.module.css';
import Logo from '../../../public/bonsai.svg';
import Hamburger from '../../../public/hamburger.svg';

const Navbar = () => {
    return (
        <header className={navbarStyles.header}>
            <Image 
                className={navbarStyles.logo}
                src={Logo}
                alt="Bonsai Logo"
                height="100"
                width="150"
            />
            <nav className={navbarStyles.nav}>
            <Image 
                className={navbarStyles.hamburger}
                src={Hamburger}
                alt="Hamburger Menu"
                height="35"
                width="35"
            />
            <ul className={navbarStyles.ul}>
                <li>
                <a href="/">Products</a>
                </li>
                <li>
                <a href="/">Templates</a>
                </li>
                <li>
                <a href="/">Pricing</a>
                </li>
                <li>
                <a href="/">Reviews</a>
                </li>
            </ul>
            </nav>
            <a href="/" className={navbarStyles.button}><Button>Log in</Button></a>
            <a href="/" className={navbarStyles.button}><Button>Start Free</Button></a>
        </header>
    )
};

export default Navbar;