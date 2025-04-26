/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Sort the Array first for better comparison
    const sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
    // Initialise result with first item
    const result = [sortedIntervals[0]];
    // Iterate over remaining items
    for (let i = 1; i < sortedIntervals.length; i++) {
        // Get the last ending value of the interval in the result
        const lastEnd = result[result.length - 1][1];
        // Get the start and end value of current interval
        const start = sortedIntervals[i][0];
        const end = sortedIntervals[i][1];
        // If start value of current interval is less or equal (overlapping) compare end values of result and current interval and assign max out of it
        if (start <= lastEnd) {
            result[result.length - 1][1] = Math.max(lastEnd, end);
        } else {
            // If not overlapping just insert the current interval
            result.push(sortedIntervals[i]);
        }
    }
    return result;
};