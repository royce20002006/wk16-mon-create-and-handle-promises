function stretch() {
  return new Promise((res) => {
    setTimeout(() => {
      res('done stretching')
    }, 1000 )
  })
}

function runOnTreadmill() {
  return new Promise((res) => {
    setTimeout(() => {
      res('done running on treadmill')
    }, 500);
  }) 
}

function liftWeights() {
  return new Promise((res) => {
    setTimeout(() => {
      res('done lifting weights')
    }, 2000);
  })
}

function workout() {
  stretch()
    .then(res => console.log(res))
    .then(() => runOnTreadmill())
    .then(res => console.log(res))
    .then(() => liftWeights())
    .then((res) => console.log(res))
    .then(() => console.log('done working out'));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out