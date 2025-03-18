import buttonStyles from '../styles/Button.module.css';

const Button = ({ buttonName }) => {
    return (
        <>
            <button className={buttonStyles.button}>{buttonName}</button>
        </>
    )
};

export default Button;