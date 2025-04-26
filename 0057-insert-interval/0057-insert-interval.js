/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];
    const result = [];
    // Iterate over intervals
    for (let i = 0; i < intervals.length; i++) {
        // If new interval's end is less than current interval start then return results and remaining intervals because intervals are sorted by starting point
        if (newInterval[1] < intervals[i][0]) {
            const remainingIntervals = intervals.slice(i);
            return [...result, newInterval, ...remainingIntervals];
        }
        // If new interval's start point is greater than current interval end then push current interval to result array
        else if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
        }
        // Otherwise interval must be overlapping
        else {
            // Update new interval start and end with minimum from current interval start and new interval start and maximum from current interval end and new interval end
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1])
            ];
        }
    }
    // Insert new interval at end in case if statement in the for loop is not executed and then return result
    result.push(newInterval);
    return result;
};