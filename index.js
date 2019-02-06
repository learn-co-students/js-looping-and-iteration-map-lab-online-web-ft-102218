function lowerCaseDrivers(array) {
  const names = array.map(function(driver) {
    return driver.toLowerCase();
  });
  return names;
}

function nameToAttributes(array) {
  const names = array.map(function(name) {
    const nameArray = name.split(' ');
    return Object.assign({}, { firstName: nameArray[0], lastName: nameArray[1] });
  });
  return names;
}

function attributesToPhrase(array) {
  const names = array.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return names;
}
