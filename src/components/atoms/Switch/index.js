import { useEffect, useState } from 'react';
import './styles.css';

const Switch = ({ className, label, isChecked, onSwitch }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);

    const toggleChecked = () => {
        setChecked(!checked);
    }

    const handleClick = (event) => {
        event.preventDefault();
        toggleChecked();
        onSwitch();
    }

    let Switch = "Switch";
    if(checked) Switch += " Switch_checked";
    if(className) Switch += ` ${className}`;

    return (
        <div className={Switch}>
            <label className="Switch__Label" htmlFor="Switch__Thumb">{label}</label>
            <div className='Switch__Button'>
                <div className='Switch__Track'></div>
                <input className="Switch__Thumb" onClick={handleClick} type="button" name="Switch__Thumb" id="Switch__Thumb" />
            </div>
        </div>
    );
}

export default Switch;