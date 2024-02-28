// the parts to be randomly generate in the pop up window
const astroStuff = {
  signs: [
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ],
  elements: ["earth", "water", "fire", "air"],
  horoscope: ["excellent", "great", "good", "bad", "terrible", "dreadful"],
};

// creating random number
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

function myHoroscope() {
  // final message array
  let myMessage = [];
  // Iterate over the data in asrtoSuff object
  for (let word in astroStuff) {
    let randomIndex = randomNumber(astroStuff[word].length);

    // Randomize message
    switch (word) {
      case "signs":
        myMessage.push(`${astroStuff[word][randomIndex]} your emelment is `);
        break;
      case "elements":
        myMessage.push(`${astroStuff[word][randomIndex]} and your day looks `);
        break;
      case "horoscope":
        myMessage.push(`${astroStuff[word][randomIndex]} !`);
        break;
    }
  }

  console.log(myMessage);
  // output the final message
  alert(myMessage.join(""));
}

// example
myHoroscope();
