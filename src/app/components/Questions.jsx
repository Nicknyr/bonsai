import questionStyles from '../styles/Questions.module.css';
import Caret from '../../../public/caret.svg';
import Image from 'next/image';

const Questions = () => {
    return (
        <div className={questionStyles.container}>
            <h2 className={questionStyles.h2}>Frequently Asked Questions</h2>
            <div className={questionStyles.question}>
                <h2 className={questionStyles.h2}>How does the free trial work? </h2>
                <div className={questionStyles.panelOne + questionStyles.trial}></div>
                <Image src={Caret} className={questionStyles.caret} alt="Caret" height="25" width="25" />
            </div>
            <div className={questionStyles.question}>
                <h2 className={questionStyles.h2}>Can I change plans anytime?</h2>
                <div className={questionStyles.panelOne + questionStyles.change}></div>
                <Image src={Caret} className={questionStyles.caret} alt="Caret" heigh="25" width="25" />
            </div>
            <div className={questionStyles.question}>
                <h2 className={questionStyles.h2}>How do I pause my Bonsai subscription?</h2>
                <div className={questionStyles.panelOne + questionStyles.pause}></div>
                <Image src={Caret} className={questionStyles.caret} alt="Caret" height="25" width="25" />
            </div>
            <div className={questionStyles.question}>
                <h2 className={questionStyles.h2}>What is your refund policy?</h2>
                <div className={questionStyles.panelOne + questionStyles.refund}></div>
                <Image src={Caret} className={questionStyles.caret} alt="Caret" height="25" width="25" />
            </div>
        </div>
    );
}

export default Questions;