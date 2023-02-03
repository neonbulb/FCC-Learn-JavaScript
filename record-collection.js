// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  if (value == "" || value == undefined || value == null) {
    delete records[id][prop]; // Should check if record exists before deleting it
  } else if (prop == "tracks") {

    if (records[id][prop] == undefined) { 
      records[id][prop] = [value];
    } else {
      records[id][prop].push(value); // Make sure there is an array using typeof
    }
    
  } else {
    records[id][prop] = value;
  }

  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(recordCollection);