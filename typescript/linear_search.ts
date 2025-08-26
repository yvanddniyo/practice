export default function linear_search (haystack: number[], needle: number):boolean {
  for(let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
} // this code has time complexity of O(n

export const binary_search = (haystack: number[], needle: number): boolean => {
  let lower = 0;
  let high = haystack.length;
  let middle: number;
  let val: number;

  while(lower < high) {
    middle =  Math.floor(lower + (high - lower) / 2);
    val = haystack[middle]

    if ( val === needle) {
      return true;
    }
    else if (val > needle) {
       high = middle
    }
    else {
      lower = middle + 1
    }
  }
  return false;
}

// crystall ball problem most asked in ld
export const crystal_ball = (breaks: boolean[]):number => {
  const jumpBreak = Math.floor(Math.sqrt(breaks.length));

  let i = jumpBreak;
  for(; i < breaks.length; i +=jumpBreak) {
    if (breaks[i]) {
      break;
    }
  }


  i -= jumpBreak;

  for (let j = 0; j < breaks.length && i < breaks.length; ++j, ++i) {
      if (breaks[i]){
        return i;
      }
  }

  return -1;
}