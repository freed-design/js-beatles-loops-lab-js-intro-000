var theBeatlesPlay = (musicians, instruments) => {
  var stringArray = [];
  for (var n=0; n<musicians.length; n++) {
    stringArray[n] = `${musicians[n]} plays ${instruments[n]}`
  }
  return stringArray
}

var johnLennonFacts = (factArray) => {
  var excitedFacts = []
  let counter = 0;
  while (counter < factArray.length) {
    excitedFacts[counter] = `${factArray[counter]}!!!`
    counter++
  }
  return excitedFacts
}

var iLoveTheBeatles = (numberOfTimes) => {
  var superBeatleLove = [];
  let n = 0;
  do{
    superBeatleLove[n] = "I love the Beatles!"
    n += numberOfTimes
  } while (n < 15);
  return superBeatleLove;
}
