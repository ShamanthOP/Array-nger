import BubbleSort, {BubbleSortKey, BubbleSortDesc} from './algorithms/BubbleSort';
import SelectionSort, {SelectionSortKey, SelectionSortDesc} from './algorithms/SelectionSort';
import InsertionSort, {InsertionSortKey, InsertionSortDesc} from './algorithms/InsertionSort';
import MergeSort, {MergeSortKey, MergeSortDesc} from './algorithms/MergeSort';
import QuickSort, {QuickSortKey, QuickSortDesc} from './algorithms/QuickSort';
import HeapSort, {HeapSortKey, HeapSortDesc} from './algorithms/HeapSort';
import ShellSort, {ShellSortKey, ShellSortDesc} from './algorithms/ShellSort';

export const ALGORITHM = {
    'Bubble Sort': BubbleSort,
    'Selection Sort': SelectionSort,
    'Insertion Sort': InsertionSort,
    'Merge Sort': MergeSort,
    'Quick Sort': QuickSort,
    'Heap Sort': HeapSort,
    'Shell Sort': ShellSort
};

export const ALGORITHM_KEY = {
    'Bubble Sort': BubbleSortKey,
    'Selection Sort': SelectionSortKey,
    'Insertion Sort': InsertionSortKey,
    'Merge Sort': MergeSortKey,
    'Quick Sort': QuickSortKey,
    'Heap Sort': HeapSortKey,
    'Shell Sort': ShellSortKey
};

export const ALGORITHM_DESC = {
    'Bubble Sort': BubbleSortDesc,
    'Selection Sort': SelectionSortDesc,
    'Insertion Sort': InsertionSortDesc,
    'Merge Sort': MergeSortDesc,
    'Quick Sort': QuickSortDesc,
    'Heap Sort': HeapSortDesc,
    'Shell Sort': ShellSortDesc
}
