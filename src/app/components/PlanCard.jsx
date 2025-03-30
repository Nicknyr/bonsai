import planCardStyles from '../styles/PlanCard.module.css';
import Image from 'next/image';
import Button from './Button.jsx';
import Checkmark from '../../../public/checkmark.svg';

const PlanCard = ({ name, description, price, features }) => {
    return (
        <div className={planCardStyles.card}>
            <div className={planCardStyles.description}>
                <h3> { name } </h3>
                <p> {description} </p>
            </div>
            <div className={planCardStyles.price}>
                $ { price }
                <span>/MONTH</span>
            </div>
            <hr className={planCardStyles.horizontalRule}/>
            <ul className={planCardStyles.features}>
                {features.map((feature, index) => {
                    return (
                        <div className={planCardStyles.featureItem}>  
                            <Image src={Checkmark} className={planCardStyles.checkmark} alt="Checkmark" height="10" width="10" />
                            <li key={index}>{feature}</li>
                        </div>
                    );
                })}
            </ul>
            <div className={planCardStyles.buttonContainer}>
                <Button buttonName="Start Free"></Button>
            </div>
        </div>
    );
}

export default PlanCard;