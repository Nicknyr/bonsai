import Link from 'next/link';
import footerStyles from '../styles/Footer.module.css';


const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <ul>
                <h3>PRODUCT</h3>
                <li>
                    <Link href="/">Proposals</Link>
                </li>
                <li>
                    <Link href="/">Contracts</Link>
                </li>
                <li>
                    <Link href="/">Invoicing</Link>
                </li>
                <li>
                    <Link href="/">Client CRM</Link>
                </li>
                <li>
                    <Link href="/">Time Tracking</Link>
                </li>
                <li>
                    <Link href="/">Task Tracking</Link>
                </li>
                <li>
                    <Link href="/">Forms</Link>
                </li>
                <li>
                    <Link href="/">Accounting</Link>
                </li>
                <li>
                    <Link href="/">Bonsai Tax</Link>
                </li>
                <li>
                    <Link href="/">Bonsai Cash</Link>
                </li>
                <li>
                    <Link href="/">Pricing</Link>
                </li>
                <li>
                    <Link href="/">Bonsai Reviews</Link>
                </li>
            </ul> 
            <ul>
                <h3>FREE RESOURCES</h3>
                <li>
                    <Link href="/">Freelance Resources</Link>
                </li>
                <li>
                    <Link href="/">Freelance Blog by Bonsai</Link>
                </li>
                <li>
                    <Link href="/">How to Write a Contract</Link>
                </li>
                <li>
                    <Link href="/">Online Signature Maker</Link>
                </li>
                <li>
                    <Link href="/">Self-Employed Taxes Hub</Link>
                </li>
                <li>
                    <Link href="/">Self-Employed Tax Calculator</Link>
                </li>
                <li>
                    <Link href="/">Self Employed Tax Deductions</Link>
                </li>
            </ul>
            <ul>
                <h3>Templates</h3>
                <li>
                    <Link href="/">Invoice Templates</Link>
                </li>
                <li>
                    <Link href="/">Proposal Templates</Link>
                </li>
                <li>
                    <Link href="/">Contract Templates</Link>
                </li>
                <li>
                    <Link href="/">Agreement Templates</Link>
                </li>
                <li>
                    <Link href="/">Scope of Work Templates</Link>
                </li>
                <li>
                    <Link href="/">Quote Templates</Link>
                </li>
                <li>
                    <Link href="/">Credit Note Templates</Link>
                </li>
                <li>
                    <Link href="/">Estimate Templates</Link>
                </li>
                <li>
                    <Link href="/">Form Templates</Link>
                </li>
            </ul>
            <ul>
                <h3>BONSAI</h3>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/">Careers</Link>
                </li>
                <li>
                    <Link href="/">Support</Link>
                </li>
                <li>
                    <Link href="/">LinkedIn</Link>
                </li>
                <li>
                    <Link href="/">Twitter</Link>
                </li>
                <li>
                    <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="/">Legal</Link>
                </li>
                <li>
                    <Link href="/">Affiliates</Link>
                </li>
                <li>
                    <Link href="/">Write for Us</Link>
                </li>
                <li>
                    <Link href="/">Comparisons</Link>
                </li>
            </ul>
        </footer>
    );
}


export default Footer;