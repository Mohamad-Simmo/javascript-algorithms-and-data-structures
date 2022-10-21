function power(base, exponent) {
  if (exponent === 1) return base;
  return base * power(base, --exponent);
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function capitalizeWords(array) {
  // 1 [ab, cd, ef]
  // 2 [ab, cd]
  // 3[ab] -> length 1 return [AB]
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  //3 returns -> res = [AB]
  //2 continues
  //2 res = [AB].push([ab, cd].slice(1)[0].upper) -> res = [AB, CD]
  res.push(array.slice(array.length - 1)[0].toUpperCase());

  return res;
}

function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

function capitalizeFirst(array) {
  if (array.length === 1)
    return [array[0].charAt(0).toUpperCase() + array[0].slice(1)];
  let res = capitalizeFirst(array.slice(0, -1));
  res.push(
    array
      .slice(array.length - 1)[0]
      .charAt(0)
      .toUpperCase() + array.slice(array.length - 1)[0].slice(1)
  );
  return res;
}

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function collectStrings(obj) {
  let arr = [];
  function gatherStrings(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'object') return gatherStrings(obj);
      if (typeof (obj[key] === 'string')) arr.push(obj[key]);
    }
  }
  gatherStrings(obj);
  return arr;
}

function collectStringPure(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') arr.push(obj[key]);
    else if (typeof obj[key] === 'object')
      arr = arr.concat(collectStringPure(obj[key]));
  }
  return arr;
}

function collectStringsPure2(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}

function binarySearch(arr, num) {
  start = 0;
  end = arr.length - 1;
  middle = Math.floor((start + end) / 2);
  if (!(start <= middle)) {
    console.log(start, middle, end);
    return -1;
  }
  if (arr[middle] === num) {
    return num;
  } else {
    if (num > arr[middle]) {
      return binarySearch(arr.slice(middle + 1, end + 1), num);
    } else {
      return binarySearch(arr.slice(start, middle), num);
    }
  }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 99));
