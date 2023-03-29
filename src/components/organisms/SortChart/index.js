import './styles.css';
import Bar from '../../atoms/Bar';

const getBarsList = (
    numbers,
    maxNum,
    groupA,
    groupB,
    groupC,
    groupD,
    sortedIndices
) => {
    return (
        <>
            {numbers.map((number, index) => {
                const width = 100 / numbers.length;
                const height = number * 100 / maxNum;
                const stateA = groupA.includes(index);
                const stateB = groupB.includes(index);
                const stateC = groupC.includes(index);
                const stateD = groupD.includes(index);
                const sorted = sortedIndices.includes(index);

                const margin = index===numbers.length ? '0' : width>3 ? '0.5rem' : '0.125rem';

                return (
                    <Bar 
                        key={`${number}_${index}`}
                        width={width}
                        height={height}
                        val={width>4 ? number : null}
                        inSorted={sorted}
                        inStateA={stateA}
                        inStateB={stateB}
                        inStateC={stateC}
                        inStateD={stateD}
                        style={{ marginRight: `${margin}` }}
                    />
                );
            })}
        </>
    );
}

const SortChart = ({
    numbers,
    maxNum,
    groupA,
    groupB,
    groupC,
    groupD,
    sortedIndices
}) => {
    return (
        <div className='SortChart'>
            {getBarsList(numbers, maxNum, groupA, groupB, groupB, groupC, groupD, sortedIndices)}
        </div>
    );
}

export default SortChart;