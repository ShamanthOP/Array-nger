import Button from "../../atoms/Button";
import Switch from "../../atoms/Switch";
import Menu from "../Menu";
import "./styles.css";

const AppControls = ({
    onGenerateRandomArray,
    algorithm,
    onAlgorithmChange,
    arraySize,
    onArraySizeChange,
    darkMode,
    onToggleDarkMode
}) => {
    return (
        <>
            <Menu 
                placeholder="Sort Algorithm"
                items={[
                    'Bubble Sort',
                    'Selection Sort',
                    'Insertion Sort',
                    'Merge Sort',
                    'Quick Sort',
                    'Heap Sort',
                    'Shell Sort'
                ]}
                selected={algorithm}
                onSelect={onAlgorithmChange}
            />

            <div className="AppControls__Size">
                <span>Size</span>
                <Menu 
                    placeholder="Array Size"
                    items={['5', '10', '25', '50', '75', '100']}
                    selected={String(arraySize)}
                    onSelect={onArraySizeChange}
                />
            </div>

            <Button onClick={onGenerateRandomArray}>Randomize</Button>

            <Switch label="Dark Mode" onSwitch={onToggleDarkMode} isChecked={darkMode}/>
        </>
    );
}

export default AppControls;