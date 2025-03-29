/**
Watched this video for help https://www.youtube.com/watch?v=P6RZZMu_maU
Notes here: https://github.com/AlgoMaster-io/leetcode-solutions/blob/main/javascript/longest-consecutive-sequence.md

We are using Set here because the lookup is O(1) on average and also it does not allow duplicates.
*/
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let longestStreak = 0;

    for(let num of numSet) {
        if (!numSet.has(num-1)) {
            let currentNum = num;
            let currentStreak = 1;

            while(numSet.has(currentNum+1)) {
                currentStreak++;
                currentNum++;
            }
            longestStreak = Math.max(currentStreak, longestStreak);
        }
    }

    return longestStreak;
};