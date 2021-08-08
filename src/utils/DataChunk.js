export const chunkifyData = (dataList, chunkSize) => {
  let i, j, temporary;
  let finalArray = [];
  if (finalArray.length < 2) {
    for (i = 0, j = dataList.length; i < j; i += chunkSize) {
      temporary = dataList.slice(i, i + chunkSize);
      finalArray.push(temporary);
    }
  }
  return finalArray;
};
