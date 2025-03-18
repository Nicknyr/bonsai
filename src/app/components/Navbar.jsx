import Link from 'next/link';
import Image from 'next/image';
import Button from './Button.jsx';
import navbarStyles from '../styles/Navbar.module.css';
import Logo from '../../../public/bonsai.svg';

const Navbar = () => {
    return (
        <nav className={navbarStyles.nav}>
            <div className={navbarStyles.logoContainer}>
                <Image src={Logo} alt="Bonsai Logo" width={120} height={120}/>
            </div>
            <div className={navbarStyles.rightContainer}>
                <ul>
                    <li>
                        <Link href='/'>Product</Link>
                    </li>
                    <li> 
                        <Link href='/'>Templates</Link>
                    </li>
                    <li>
                        <Link href='/'>Pricing</Link>
                    </li>
                    <li>
                        <Link href='/'>Reviews</Link>
                    </li>
                </ul>
                <div className={navbarStyles.buttonContainer}>
                    <Button buttonName='Log In'></Button>
                    <Button buttonName='Start Free'></Button>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;