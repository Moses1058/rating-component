import { useState } from 'react';
import './how.css';
import star from './assets/icon-star.svg'
import Rate from './Rate';
function How(props) {
    const rate = props.rate;
    const setRate = props.setRate;
    const [hover, setHover] = useState(0);
    const [bg, setBg] = useState('#262E38');
    return (
        <div className="how">
            <div className="star">
                <img src={star} alt="star" />
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="rating">

                <Rate number="1" rate={rate} setRate={setRate}
                    thing={(rate === 1) ? '#7C8798' :
                        ((hover === 1) ? '#FC7614' : '#262E38')}
                    setBg={setBg}
                    setHover={setHover} />
                <Rate number="2" rate={rate} setRate={setRate}
                    thing={(rate === 2) ? '#7C8798' :
                        ((hover === 2) ? '#FC7614' : '#262E38')}
                    setBg={setBg}
                    setHover={setHover} />
                <Rate number="3" rate={rate} setRate={setRate}
                    thing={(rate === 3) ? '#7C8798' :
                        ((hover === 3) ? '#FC7614' : '#262E38')}
                    setBg={setBg}
                    setHover={setHover} />
                <Rate number="4" rate={rate} setRate={setRate}
                    thing={(rate === 4) ? '#7C8798' :
                        ((hover === 4) ? '#FC7614' : '#262E38')}
                    setBg={setBg}
                    setHover={setHover} />
                <Rate number="5" rate={rate} setRate={setRate}
                    thing={(rate === 5) ? '#7C8798' :
                        ((hover === 5) ? '#FC7614' : '#262E38')}
                    setBg={setBg}
                    setHover={setHover} />
            </div>
            <button type="button" onClick={props.handleClick}>SUBMIT</button>
        </div>
    );
}

export default How;