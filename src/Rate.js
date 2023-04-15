import './rate.css';
export default function Rate(props) {
    const { number, thing, setRate, rate, setBg, setHover } = props;
    const styles = {
        rate: {
            backgroundColor: thing,
        },
        h1: {
            color: ((thing === '#262E38') ? '#7C8798' : '#FFFFFF'),
        },
    }
    return (
        <div className="rate" style={styles.rate}
            onClick={() => {
                setRate(parseInt(number));
            }}
            onMouseEnter={() => {
                setHover(parseInt(number));
            }}
            onMouseLeave={() => {
                setHover(0);
            }}>
            <h4 style={styles.h1}>{props.number}</h4>
        </div>
    )
}


