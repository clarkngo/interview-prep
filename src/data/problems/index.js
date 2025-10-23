import twoSum from './two-sum';
import containsDuplicate from './contains-duplicate';
import bestTime from './best-time-to-buy-and-sell-stock';
import mergeIntervals from './merge-intervals';
import longestSubstring from './longest-substring-without-repeating-characters';
import reverseLinkedList from './reverse-linked-list';
import numberOfIslands from './number-of-islands';
import productExceptSelf from './product-of-array-except-self';
import threeSum from './3sum';
import threeSumClosest from './3sum-closest';
import wordSearch from './word-search';
import linkedListCycle from './linked-list-cycle';
import mergeTwoSortedLists from './merge-two-sorted-lists';
import addTwoNumbers from './add-two-numbers';
import palindromeLinkedList from './palindrome-linked-list';
import binaryTreeInorderTraversal from './binary-tree-inorder-traversal';
import binaryTreeLevelOrderTraversal from './binary-tree-level-order-traversal';
import serializeDeserializeBinaryTree from './serialize-and-deserialize-binary-tree';
import validateBST from './validate-binary-search-tree';
import symmetricTree from './symmetric-tree';
import maximumDepthOfBinaryTree from './maximum-depth-of-binary-tree';
import rotateArray from './rotate-array';
import firstMissingPositive from './first-missing-positive';
import findMedianFromDataStream from './find-median-from-data-stream';
import kthLargestElement from './kth-largest-element';
import topKFrequentElements from './top-k-frequent-elements';
import twoSumII from './two-sum-ii';
import threeSumSmaller from './3sum-smaller';
import containerWithMostWater from './container-with-most-water';
import validPalindrome from './valid-palindrome';
import palindromePairs from './palindrome-pairs';
import wordSearchII from './word-search-ii';
import longestPalindromicSubstring from './longest-palindromic-substring';
import minimumWindowSubstring from './minimum-window-substring';
import courseSchedule from './course-schedule';
import courseScheduleII from './course-schedule-ii';
import topKFrequentWords from './top-k-frequent-words';
import longestValidParentheses from './longest-valid-parentheses';
import regularExpressionMatching from './regular-expression-matching';
import kthSmallestInSortedMatrix from './kth-smallest-in-sorted-matrix';
import evaluateDivision from './evaluate-division';
import wordPattern from './word-pattern';
import implementStrStr from './implement-strstr';
import searchInRotatedSortedArray from './search-in-rotated-sorted-array';
import findPeakElement from './find-peak-element';
import designTwitter from './design-twitter';
import wordBreak from './word-break';
import coinChange from './coin-change';
import longestIncreasingSubsequence from './longest-increasing-subsequence';
import longestConsecutiveSequence from './longest-consecutive-sequence';
import subarraySumEqualsK from './subarray-sum-equals-k';

export const problems = [
  twoSum,
  containsDuplicate,
  bestTime,
  mergeIntervals,
  longestSubstring,
  reverseLinkedList,
  numberOfIslands,
  productExceptSelf,
  threeSum,
  threeSumClosest,
  wordSearch,
  linkedListCycle,
  mergeTwoSortedLists,
  addTwoNumbers,
  palindromeLinkedList,
  binaryTreeInorderTraversal,
  binaryTreeLevelOrderTraversal,
  serializeDeserializeBinaryTree,
  validateBST,
  symmetricTree,
  maximumDepthOfBinaryTree,
  rotateArray,
  firstMissingPositive,
  findMedianFromDataStream,
  kthLargestElement,
  topKFrequentElements,
  twoSumII,
  threeSumSmaller,
  containerWithMostWater,
  validPalindrome,
  palindromePairs,
  wordSearchII,
  longestPalindromicSubstring,
  minimumWindowSubstring,
  courseSchedule,
  courseScheduleII,
  topKFrequentWords,
  longestValidParentheses,
  regularExpressionMatching,
  kthSmallestInSortedMatrix,
  evaluateDivision,
  wordPattern,
  implementStrStr,
  searchInRotatedSortedArray,
  findPeakElement,
  designTwitter,
  wordBreak,
  coinChange,
  longestIncreasingSubsequence,
  longestConsecutiveSequence,
  subarraySumEqualsK,
];

export const problemsById = problems.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});

export default problems;
