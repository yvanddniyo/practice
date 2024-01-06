function getCookieValue(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      const cookieValue = cookie.substring(name.length, cookie.length);
      return cookieValue === "true"; // Convert the string back to a boolean
    }
  }
  return false; // Default value if the cookie doesn't exist
}

document.addEventListener("DOMContentLoaded", () => {
  const cookieBannerOpenValue = getCookieValue("cookieBannerOpenValue");
  const cookieButton = document.getElementById("cookie-btn");
  const cookieContainer = document.getElementById("cookie-notification");

  if (cookieBannerOpenValue) {
    cookieContainer.classList.remove("active");
  }

  cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    // Set the cookieBannerOpenValue cookie to true and expire it in 30 days
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie = `cookieBannerOpenValue=true; expires=${expirationDate.toUTCString()}`;
  });
});

// This below code modifies the record list

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  const updatedRecords = Object.assign({}, records);

  if (!updatedRecords[id]) {
    updatedRecords[id] = {};
  }

  if (value === "") {
    delete updatedRecords[id][prop];
  } else {
    if (prop !== "tracks") {
      updatedRecords[id][prop] = value;
    } else {
      if (!updatedRecords[id].hasOwnProperty("tracks")) {
        updatedRecords[id].tracks = [];
      }
      updatedRecords[id].tracks.push(value);
    }
  }

  return updatedRecords;
  // return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");

// adding or multiply nested arrays

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
      console.log(arr[i][j]);
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// Recursive function that function call itself.
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// this quizz

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");

// Hey this recursion function

function countdown(n) {
  if (n < 1) {
    return []; // Base case: return an empty array for n less than 1
  } else {
    const countArray = countdown(n - 1); // Recursive call with decremented n
    countArray.unshift(n); // Add the current value of n to the beginning of the array
    return countArray; // Return the modified array
  }
}

// Example usage:
const result = countdown(5);
console.log(result); // Output: [5, 4, 3, 2, 1]
