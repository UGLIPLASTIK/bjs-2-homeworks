function compareArrays(arr1, arr2) {
  let result = false;
  if(JSON.stringify(arr1) === JSON.stringify(arr2)){
    result = true;
  } else if (arr1.length === arr2.length && arr1.every((element, index, array) => array.includes(arr2[index]))){
    result = false;
  }
  return result
}

function getUsersNamesInAgeRange(users, gender) {
  if(users.filter(users => users.gender === gender).length === 0 || (gender != 'мужской' && gender != 'женский')){
  return 0
}
  return users.filter(users => users.gender === gender).reduce((acc, item) => acc + item.age, 0) / users.filter(users => users.gender === gender).length;
}

module.exports = {
  getUsersNamesInAgeRange
}