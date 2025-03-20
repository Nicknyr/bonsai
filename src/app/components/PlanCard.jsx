import planCardStyles from '../styles/PlanCard.module.css';

const PlanCard = ({ name, description, price, features }) => {
    return (
        <div className={planCardStyles.card}>
            <div className={planCardStyles.description}>
                <h3> { name } </h3>
                <p> {description} </p>
            </div>
            <div className={planCardStyles.price}>
                { price }
            </div>
            <hr />
            <div className={planCardStyles.features}>
                { features }
            </div>
        </div>
    );
}

export default PlanCard;