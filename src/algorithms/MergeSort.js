import { addToTrace, createKey, createRange, lastSorted, newTrace } from "./helperFunctions"


const MergeSort = (nums) => {
    const trace = newTrace(nums);

    const mergeSort = (nums, start, end) => {
        if(end-start<=1) {
            return;
        }

        let midPoint = Math.floor((end-start)/2);

        addToTrace(trace, nums, lastSorted(nums), [...createRange(start, midPoint)]);
        mergeSort(nums, start, midPoint);
        addToTrace(trace, nums, lastSorted(nums), [...createRange(midPoint, end)]);
        mergeSort(nums, midPoint, end);

        merge(nums, start, midPoint, end);
    }

    const merge = (nums, start, midPoint, end) => {
        const left = nums.slice(start, midPoint);
        const right = nums.slice(midPoint, end);
        let i = 0, j = 0, k = 0;

        while(i<left.length && j<right.length) {
            if (left[i] <= right[j]) {
                addToTrace(trace, nums, lastSorted(trace), [], [k + start]);
                nums[k + start] = left[i];
                i++;
                addToTrace(trace, nums, lastSorted(trace), [], [k + start]);
            } else {
                addToTrace(trace, nums, lastSorted(trace), [], [k + start]);
                nums[k + start] = right[j];
                j++;
                addToTrace(trace, nums, lastSorted(trace), [], [k + start]);
            }
            k++;
        }

        while (i < left.length) {
            addToTrace(trace, nums, lastSorted(trace), [], [k + start]);
            nums[k + start] = left[i];
            i++;
            k++;
            addToTrace(trace, nums, lastSorted(trace), [], [k + start]);
        }
        while (j < right.length) {
            addToTrace(trace, nums, lastSorted(trace), [], [k + start]);
            nums[k + start] = right[j];
            j++;
            k++;
            addToTrace(trace, nums, lastSorted(trace), [], [k + start]);
        }
    }

    mergeSort(nums, 0, nums.length-1);
    addToTrace(trace, nums, [...createRange(0, nums.length)]);

    return trace;
}

export const MergeSortKey = createKey('Call Merge Sort', 'Overwriting from auxiliary array');

export const MergeSortDesc = {
    title: 'Merge Sort',
    description: (
        <div>
        <p>
            <a
                href="https://en.wikipedia.org/wiki/Merge_sort"
                target="_blank"
                rel="noopener noreferrer"
            >
                Merge Sort
            </a>{' '}
            is an efficient, stable sorting algorith that makes use of the
            divide and conquer strategy. Conceptually the algorithm works as
            follows:
        </p>
        <ol>
            <li>
            Divide the unsorted list into <em>n</em> sublists, each
            containing one element(a list of one element is considered
            sorted)
            </li>
            <li>
            Repeatedly merge sublists to produce new sorted sublists until
            there is only one sublist remaining. This will be the sorted
            list.
            </li>
        </ol>
        </div>
    ),
    worstCase: (
        <span>
        O(<em>n</em> log <em>n</em>)
        </span>
    ),
    avgCase: (
        <span>
        O(<em>n</em> log <em>n</em>)
        </span>
    ),
    bestCase: (
        <span>
        O(<em>n</em> log <em>n</em>)
        </span>
    ),
    space: (
        <span>
        O(<em>n</em>)
        </span>
    )
};

export default MergeSort;