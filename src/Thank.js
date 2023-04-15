import './thank.css';
import illustration from './assets/illustration-thank-you.svg';
export default function Thank(props) {
    return (
        <div className="how thank">
            <img src={illustration} alt="illustation" />
            <div className="selected">
                <p>You selected {props.rate} out of 5</p>
            </div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    );
}
