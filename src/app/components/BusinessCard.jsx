import Button from '../components/Button.jsx';
import businessCardStyles from '../styles/BusinessCard.module.css';



const BusinessCard = () => {
    return (
        <div className={businessCardStyles.card}>
            <div className={businessCardStyles.left}>
                    It's
                <span className={businessCardStyles.greenHeading}> your </span>
                    business.
                    <br />
                    We're here to help it grow 
                <div className={businessCardStyles.right}>
                    <Button buttonName='Start Free'></Button>
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;