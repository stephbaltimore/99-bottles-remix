const onLoadHandler = (evt) => {
  // this is a best practice to keep the code below -- *do not edit*
  console.log('DOMContentLoaded fired');
  //do not edit above

// button functionality
    //user input begin
      const grabUserInput = function(userInputBottleNumber) {
        console.log(userInputBottleNumber);
      };
    //user input end
    //button click listener + action begin
      const btn = document.getElementById('my-input-button');
      btn.addEventListener('click', function(event) {
        event.preventDefault();
        // console.log('click');
    //grabs user input - begin
        const inputElement = document.getElementById('my-input')
        grabUserInput(inputElement.value);
    //grabs user input - end
      singIt(inputElement.value);
    //button click listener + action end
    //clear input begin
      inputElement.value = '';
    //clear input end
      });
// end button functionality


// a function that does the iteration and provides the lyrics based on input
      async function singIt(userInputBottleNumber) {
        //function to stop loop for a period of time
        function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
         }
        //stop end
        for (let beerOnTheWall = userInputBottleNumber; beerOnTheWall >= 1; beerOnTheWall--) {

        let bottleNumber;
        let whatsLeftOnWall;

          if (beerOnTheWall >= 3) {
          bottleNumber = "bottles";
          whatsLeftOnWall = beerOnTheWall - 1 + " " + bottleNumber + " " + "of beer on the wall.";
          }
          if (beerOnTheWall == 2) {
              bottleNumber = "bottles";
              whatsLeftOnWall = beerOnTheWall - 1 + " " + "bottle" + " " + "of beer on the wall.";
          }
          if (beerOnTheWall == 1 ) {
            bottleNumber = "bottle";
            whatsLeftOnWall = 'No more bottles of beer on the wall!';
          }


        theLyrics = beerOnTheWall + " " + bottleNumber + " " + "of beer on the wall," + " " + beerOnTheWall + " " + bottleNumber + " " + "of beer!" + " " + "Take one down, Pass it around," + " " + whatsLeftOnWall;

        lyrics(theLyrics);
        await sleep(5000);
        const createLineBreak = document.createElement('br');
    };
    };
// end iteration

// a function that creates the styling around the iterations function
      function lyrics(lyricVariability) {
        const listElement = document.createElement("li");
        listElement.setAttribute("class", "line-1");
        listElement.setAttribute("id", "typewriter");
        const plainTextLyrics = document.createTextNode(lyricVariability);
        listElement.appendChild(plainTextLyrics);
        dynamic.appendChild(listElement);
    };
// end styling function

    };
//end of onLoadHandler

// this is a best practice to keep the code below -- *do not edit*
 if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', onLoadHandler);
 } else {
   onLoadHandler();
 }
