import { addToTrace, createKey, createRange, lastSorted, newTrace, swap } from "./helperFunctions"


const HeapSort = (nums) => {
    const trace = newTrace(nums);

    const buildMaxHeap = (nums) => {
        const start = Math.floor(nums.length/2);
        const heapSize = nums.length;

        for(let i = start; i>=0; i--) {
            maxHeapify(nums, i, heapSize);
        }
        addToTrace(trace, nums, lastSorted(trace), [], [], [], createRange(0, nums.length));
    }

    const maxHeapify = (nums, i, heapSize) => {
        const left = (i) => 2 * i + 1;
        const right = (i) => 2 * i + 2;

        const leftChild = left(i);
        const rightChild = right(i);

        addToTrace(trace, nums, lastSorted(trace), [i, leftChild]);
        let largest = leftChild < heapSize && nums[leftChild] > nums[i] ? leftChild : i;
    
        addToTrace(trace, nums, lastSorted(trace), [largest, rightChild]);
        if (rightChild < heapSize && nums[rightChild] > nums[largest]) largest = rightChild;

        if (largest !== i) {
            addToTrace(trace, nums, lastSorted(trace), [], [i, largest]);
            swap(nums, i, largest);
            addToTrace(trace, nums, lastSorted(trace), [], [i, largest]);
        
            maxHeapify(nums, largest, heapSize);
        }
    }

    const heapSort = (nums) => {
        buildMaxHeap(nums);
        let heapSize = nums.length;

        for(let i = nums.length-1; i>0; i--) {
            addToTrace(trace, nums, lastSorted(trace), [], [0, i]);
            swap(nums, 0, i);
            addToTrace(trace, nums, [...lastSorted(trace), i], [], [0, i]);

            heapSize -= 1;
            maxHeapify(nums, heapSize);

            addToTrace(trace, nums, lastSorted(trace), [], [], [], createRange(0, heapSize));

        }

        addToTrace(trace, nums, [...lastSorted(trace), 0]);
    }

    heapSort(nums);

    return trace;
}

export const HeapSortKey = createKey('Comparing', 'Swapping', null, 'Heap built');

export const HeapSortDesc = {
    title: 'Heap Sort',
    description: (
      <div>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Heapsort"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heap Sort
          </a>{' '}
          can be thought of as an improved selection sort that uses the
          heap data structure rather than a linear-time search to find the
          maximum or minimum element. It is an in-place sorting algorithm
          that is not stable and has a somewhat slower running time than
          Quicksort in practice.
        </p>
        <p>
          The heapsort algorithm can be divided into two parts. In the
          first step, a heap is built out of the data. The heap is often
          placed in an array with the layout of a complete binary tree. In
          the second step, a sorted array is created by repeatedly
          removing the largest element from the heap (the root of the
          heap), and inserting it into the array. The heap is updated
          after each removal to maintain the heap property. Once all
          objects have been removed from the heap, the result is a sorted
          array.
        </p>
        <ol>
          <li>
            Call the buildMaxHeap() function on the list. Also referred to
            as heapify(), this builds a heap from a list in O(n)
            operations.
          </li>
          <li>
            Swap the first element of the list with the final element.
            Decrease the considered range of the list by one.
          </li>
          <li>
            Call the <em>siftDown()</em>, also called{' '}
            <em>maxHeapify()</em> function on the list to sift the new
            first element to its appropriate index in the heap.
          </li>
          <li>
            Go to step (2) unless the considered range of the list is one
            element.
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
    space: <span>O(1)</span>
}

export default HeapSort;