import './styles.css';

import { useState, useEffect } from 'react';
import SortChart from '../SortChart';

const SortVisulaizer = ({
    array: arrayProps,
    trace: traceProps,
    colorKey,
    desc
}) => {
    const [array, setArray] = useState([]);
    const [originalArray, setOriginalArray] = useState([]);
    const [groupA, setGroupA] = useState([]);
    const [groupB, setGroupB] = useState([]);
    const [groupC, setGroupC] = useState([]);
    const [groupD, setGroupD] = useState([]);
    const [sortedIndices, setSortedIndices] = useState([]);

    const [trace, setTrace] = useState([]);
    const [traceStep, setTraceStep] = useState(-1);

    const [timeoutIds, setTimeoutIds] = useState([]);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);

    useEffect(() => {
        _reset(arrayProps);
    }, [arrayProps]);

    useEffect(() => {
        clearTimeouts();
        setTrace(traceProps);
    }, [traceProps]);

    const _reset = (array) => {
        setArray(array);
        setOriginalArray([...array]);
        setGroupA([]);
        setGroupB([]);
        setGroupC([]);
        setGroupD([]);
        setSortedIndices([]);

        setTrace([]);
        setTraceStep(-1);
    }

    const clearTimeouts = () => {
        timeoutIds.forEach(timeOut => {
            clearTimeout(timeOut);
        });
        setTimeoutIds([]);
    }

    return (
        <div className='SortVisualizer'>
            <SortChart 
                numbers={array}
                maxNum={Math.max(...array)}
                groupA={groupA}
                groupB={groupB}
                groupC={groupC}
                groupD={groupD}
                sortedIndices={sortedIndices}
            />
        </div>
    );
}

export default SortVisulaizer;