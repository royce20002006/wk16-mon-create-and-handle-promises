function stretch(timeLeft) {
  // refactor your code from phase 1
  return new Promise((res, rej) => {
    console.log(timeLeft)
    
    if (timeLeft >= 1000) {
      setTimeout(() => {
        timeLeft -=1000
        console.log('done stretching')
        res(timeLeft )
        
      }, 1000 )
    }
    else {
      rej('You dont have enough time to stretch')
    }
  })
}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  return new Promise((res, rej) => {
    console.log(timeLeft)
    if (timeLeft >= 500) {
      setTimeout(() => {
        timeLeft -= 500;
        console.log('done running on treadmill' );
        res(timeLeft)
      }, 500);

    } else {
      rej('You dont have enough time to run on treadmill')
    }
  })
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  return new Promise((res, rej) => {
    if (timeLeft >= 2000) {
      setTimeout(() => {
        timeLeft -= 2000;
        console.log('done lifting weights' );
        res(timeLeft);
      }, 2000);

    } else {
      rej('you dont have enough time to lift weights')
    }
  })
}


function workout(totalTime) {
  // refactor your code from phase 1
  stretch(totalTime)
    .then((res) => runOnTreadmill(res))
    .then((res) => liftWeights(res))
    .then(() => console.log('done working out'))
    .catch((rej) => console.error(rej))
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


// workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
