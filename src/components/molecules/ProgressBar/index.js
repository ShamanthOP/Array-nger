import './styles.css';

const ProgressBar = ({ width }) => {

    console.log("Width", width);
    return (
        <div className='ProgressBar'>
            <div className='ProgressBar__Active' style={{ width: `${width}%` }} />
        </div>
    );
}

export default ProgressBar;