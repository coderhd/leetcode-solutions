/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const preReqMap = {};
    for(let i = 0; i < numCourses; i++) {
        preReqMap[i] = [];
    }
    for (let [crs, pre] of prerequisites) {
        preReqMap[crs].push(pre);
    }

    const visitSet = new Set();

    function dfs(course) {
        if (visitSet.has(course)) return false;
        if (preReqMap[course].length === 0) return true;

        visitSet.add(course);
        for(let pre of preReqMap[course]) {
            if (!dfs(pre)) return false;
        }
        visitSet.delete(course);
        preReqMap[course] = [];
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if(!dfs(i)) return false;
    }
    return true;
};