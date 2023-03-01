function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const orbitalPeriodArr = arr.map(obj => {
    const orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(obj.avgAlt + earthRadius, 3) / GM);
    return ({name: obj.name, orbitalPeriod: Math.round(orbitalPeriod)});
  });
  
  return orbitalPeriodArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));