import linear_search, { binary_search, crystal_ball } from "../linear_search";

export const  haystackList = [1, 2, 3, 5, 6, 34, 54, 878, 34, 23];
export const breaksList = [false, true, false, true, false, false, false, false]
export const needleNum = 232323
console.log("linear", linear_search(haystackList, 1));

console.log("binary_search", binary_search(haystackList, needleNum))

console.log("crystal_ball", crystal_ball(breaksList))