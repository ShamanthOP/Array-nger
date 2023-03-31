import { addToTrace, createKey, lastSorted, newTrace, swap, createRange } from "./helperFunctions"


const QuickSort = (nums) => {
    const trace = newTrace(nums);

    const choosePivot = (start, end) => {
        return Math.floor(Math.random() * (end - start)) + start;
    }

    const partition = (nums, start, end) => {
        let i = start + 1;
        let j = start + 1;
    
        addToTrace(trace, nums, lastSorted(trace), [start]);
    
        while (j <= end) {
          if (nums[j] < nums[start]) {
            addToTrace(trace, nums, lastSorted(trace), [start], [j], [], createRange(start + 1, i));
            swap(nums, i, j);
            addToTrace(trace, nums, lastSorted(trace), [start], [i], [], createRange(start + 1, i));
            i += 1;
          }
          j += 1;
        }
    
        addToTrace(trace, nums, lastSorted(trace), [i - 1], [], [], createRange(start, i - 1));
        swap(nums, start, i - 1);
        addToTrace(trace, nums, lastSorted(trace), [i - 1], [], [], createRange(start, i - 1));
        return i - 1;
    }

    const quickSort = (nums, start, end) => {
        if(start>end) {
            return;
        }
        if(start===end) {
            addToTrace(trace, nums, [...lastSorted(trace), start]);
            return;
        }

        let pivot = choosePivot(start, end);

        addToTrace(trace, nums, lastSorted(trace), [pivot]);
        swap(nums, start, pivot);
        addToTrace(trace, nums, lastSorted(trace), [pivot]);

        pivot = partition(nums, start, end);
        addToTrace(trace, nums, [...lastSorted(trace), pivot]);

        quickSort(nums, start, pivot - 1);
        quickSort(nums, pivot + 1, end);
    }

    quickSort(nums, 0, nums.length-1);

    return trace;
}

export const QuickSortKey = createKey('Comparing', 'Swapping', null, 'Less than Pivot');

export const QuickSortDesc = {
    title: 'Quick Sort',
    description: (
      <div>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Quicksort"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Sort
          </a>{' '}
          is an efficient, in-place sorting algorith that in practice is
          faster than MergeSort and HeapSort. However, it is not a stable
          sorting algorithm, meaning that the relative positioning of
          equal sort items is not preserved.Quicksort is a divide and
          conquer algorithm. Quicksort first divides a large array into
          two smaller sub-arrays: the low elements and the high elements.
          Quicksort can then recursively sort the sub-arrays. The steps
          are:
        </p>
        <ol>
          <li>
            Pick an element, called a pivot, from the array. This is
            usually done at random.
          </li>
          <li>Move pivot element to the start of the array.</li>
          <li>
            <em>Partitioning:</em> reorder the array so that all elements
            with values less than the pivot come before the pivot, while
            all elements with values greater than the pivot come after it
            (equal values can go either way). After this partitioning, the
            pivot is in its final position. This is called the{' '}
            <em>partition</em> operation.
          </li>
          <li>
            Recursively apply the above steps to the sub-array of elements
            with smaller values and separately to the sub-array of
            elements with greater values.
          </li>
        </ol>
        <p>
          The base case of the recursion is an array of size zero or one,
          which are sorted by definition.
        </p>
      </div>
    ),
    worstCase: (
      <span>
        O(<em>n</em>
        <sup>2</sup>)
      </span>
    ),
    avgCase: (
      <span>
        O(<em>n</em>log<em>n</em>)
      </span>
    ),
    bestCase: (
      <span>
        O(<em>n</em>log<em>n</em>)
      </span>
    ),
    space: (
      <span>
        O(log<em>n</em>)
      </span>
    )
};

export default QuickSort;