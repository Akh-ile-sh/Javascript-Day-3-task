var friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];

var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];

function dataHandling(input) {
  // Combine and sort the arrays alphabetically
  var combinedFriends = input[0].concat(input[1]).sort();

  // 1. Get the first item, the middle item, and the last item of the array
  var firstItem = combinedFriends[0];
  var middleItem = combinedFriends[Math.floor(combinedFriends.length / 2)];
  var lastItem = combinedFriends[combinedFriends.length - 1];

  // 2. Add your name to the end of the friends array, and add another name to the beginning
  combinedFriends.push("YourName");
  combinedFriends.unshift("AnotherName");

  // 3. Add Mr or Ms to the names in the friends array
  var formattedFriends = combinedFriends.map(function (friend) {
    return friend.includes(" ") ? "Ms " + friend : "Mr " + friend;
  });

  // 4. Concat all the names in the friends array and return as comma-separated string
  var commaSeparatedNames = combinedFriends.join(", ");

  // 5. Find the friends' names who have the letter ‘a’ and return the list
  var namesWithA = combinedFriends.filter(function (friend) {
    return friend.toLowerCase().includes("a");
  });

  // 6. Find the avg length of all the friends' names
  var totalLength = combinedFriends.reduce(function (acc, friend) {
    return acc + friend.length;
  }, 0);
  var avgLength = totalLength / combinedFriends.length;

  // 7. Find the names and return the list starting with letter M
  var namesStartingWithM = combinedFriends.filter(function (friend) {
    return friend.charAt(0).toLowerCase() === "m";
  });

  // 8. Find the name with max characters and return the name
  var maxCharName = combinedFriends.reduce(function (max, friend) {
    return friend.length > max.length ? friend : max;
  }, "");

  // 9. Find the name with min characters and return the name
  var minCharName = combinedFriends.reduce(function (min, friend) {
    return friend.length < min.length ? friend : min;
  }, combinedFriends[0]);

  return {
    firstItem: firstItem,
    middleItem: middleItem,
    lastItem: lastItem,
    friendsArray: formattedFriends,
    commaSeparatedNames: commaSeparatedNames,
    namesWithA: namesWithA,
    avgLength: avgLength,
    namesStartingWithM: namesStartingWithM,
    maxCharName: maxCharName,
    minCharName: minCharName,
  };
}

var result = dataHandling([friends1, friends2]);
console.log(result);
