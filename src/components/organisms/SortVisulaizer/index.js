import './styles.css';

import { useState, useEffect, useRef } from 'react';
import SortChart from '../SortChart';
import ColorKey from '../../molecules/ColorKey';
import SortInfo from '../../molecules/SortInfo';
import VisualizerControls from '../../molecules/VisulaizerControls';
import ProgressBar from '../../molecules/ProgressBar';

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

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

    const prevArray = usePrevious(array);
    const prevTrace = usePrevious(trace);

    useEffect(() => {
        if(prevArray!==arrayProps) reset(arrayProps);
    }, [arrayProps]);

    useEffect(() => {
        if(prevTrace!==traceProps) {
            clearTimeouts();
            setTrace(traceProps);
        }
    }, [traceProps]);

    const reset = (array) => {
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

    const changeVisulaState = (visualState) => {
        console.log("Visual State", visualState);
        setArray(visualState.array);
        setGroupA(visualState.groupA);
        setGroupB(visualState.groupB);
        setGroupC(visualState.groupC);
        setGroupD(visualState.groupD);
        setSortedIndices(visualState.sortedIndices);
    }

    const run = (newtrace) => {
        const timeOuts = [];
        const timer = 250 / playbackSpeed;

        console.log("Trace", newtrace);
        newtrace.forEach((item, i) => {
            const timeoutId = setTimeout((item) => {
                setTraceStep(prevStep => prevStep+1);
                changeVisulaState(item);
            }, i*timer, item);
            timeOuts.push(timeoutId);
        });

        const timeoutId = setTimeout(clearTimeouts, newtrace.length*timer);
        timeOuts.push(timeoutId);

        setTimeoutIds(timeOuts);
    }

    const pause = () => {
        clearTimeouts();
    }

    const continueAnimation = () => {
        const newTrace = trace.slice(traceStep);
        console.log("continue", newTrace, traceStep);
        run(newTrace);
    }

    const stepForward = () => {
        if(traceStep < trace.length - 1) {
            const item = trace[traceStep+1];
            setTraceStep(prevStep => prevStep+1);
            changeVisulaState(item);
        }
    }

    const stepBackward = () => {
        if(traceStep > 0) {
            const item = trace[traceStep-1];
            setTraceStep(prevStep => prevStep-1);
            changeVisulaState(item);
        }
    }

    const repeat = () => {
        clearTimeouts();
        setArray(originalArray);
        setTraceStep(-1);
        run(trace);
    }

    const adjustPlaybackSpeed = (newSpeed) => {
        pause();
        const newPlayBackSpeed = Number(newSpeed.split('x')[0]);
        setPlaybackSpeed(newPlayBackSpeed);
    }

    useEffect(() => {
        if(traceStep>-1) {
            continueAnimation();
        }
    }, [playbackSpeed]);

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

            <div className='SortVisualizer__ProgressBar'>
                <ProgressBar width={trace.length>0 ? (traceStep/(trace.length-1))*100 : 0} />
            </div>

            <VisualizerControls 
                onPlay={traceStep===-1 ? run.bind(this, trace) : continueAnimation}
                onPause={pause.bind(this)}
                onBackward={stepBackward.bind(this)}
                onForward={stepForward.bind(this)}
                onRepeat={repeat.bind(this)}
                onAdjustSpeed={adjustPlaybackSpeed}
                playing={timeoutIds.length > 0}
                playDisabled={(traceStep >= trace.length - 1 && traceStep!==-1) || trace.length===0}
                backwardDisabled={traceStep <= 0}
                forwardDisabled={traceStep >= trace.length-1}
                repeatDisabled={traceStep >= trace.length-1}
                playbackSpeed={playbackSpeed}
            />

            <ColorKey {...colorKey} />

            <SortInfo {...desc} />
        </div>
    );
}

export default SortVisulaizer;