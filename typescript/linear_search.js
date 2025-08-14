"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystal_ball = exports.binary_search = void 0;
exports.default = linear_search;
function linear_search(haystack, needle) {
    for (var i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}
var binary_search = function (haystack, needle) {
    var lower = 0;
    var high = haystack.length;
    var middle;
    var val;
    while (lower < high) {
        middle = Math.floor(lower + (high - lower) / 2);
        val = haystack[middle];
        if (val === needle) {
            return true;
        }
        else if (val > needle) {
            high = middle;
        }
        else {
            lower = middle + 1;
        }
    }
    return false;
};
exports.binary_search = binary_search;
var crystal_ball = function (breaks) {
    var jumpBreak = Math.floor(Math.sqrt(breaks.length));
    var i = jumpBreak;
    for (; i < breaks.length; i += jumpBreak) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jumpBreak;
    for (var j = 0; j < breaks.length && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
};
exports.crystal_ball = crystal_ball;
