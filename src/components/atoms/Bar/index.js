import './styles.css';

const Bar = ({
    width,
    height,
    val,
    inStateA,
    inStateB,
    inStateC,
    inStateD,
    inSorted,
    style
}) => {
    let classNames = 'Bar';
    if(inSorted) classNames += ' Bar_sorted';
    if(inStateA) classNames += ' Bar_stateA';
    else if(inStateB) classNames += ' Bar_stateB';
    else if(inStateC) classNames += ' Bar_stateC';
    else if(inStateD) classNames += ' Bar_stateD';

    let barStyle = {...style, width: `${width}%`, height: `${height}%`};
    if(inStateA || inStateB || inStateC || inStateD) {
        barStyle['marginRight'] = `${0.3*width}%`;
        barStyle['marginLeft'] = `${0.3*width}%`;
    }

    return (
        <div style={barStyle} className={classNames}>
            <span className="Bar__Text">{val}</span>
        </div>
    );
}

export default Bar;