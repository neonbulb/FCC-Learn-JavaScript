function whatIsInAName(collection, source) {
  // collection is an array of objects
  // source is a single object
  // This function returns a reference to the collection objects that match the source object keys and values.

  const matchingObjArr = [];

  const sourceObjKeys = Object.keys(source);
  collection.forEach(collectionObj => {
    
    let allSourceMatched = true;
    sourceObjKeys.forEach((sourceKey) => {

      const collectionVal = collectionObj[sourceKey];
      const sourceVal = source[sourceKey];
      if (collectionVal !== sourceVal) allSourceMatched = false;
     
    });

  if (allSourceMatched) {
    matchingObjArr.push(collectionObj);
  }

  });

  return matchingObjArr; // Returns a reference to the collection objects
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));