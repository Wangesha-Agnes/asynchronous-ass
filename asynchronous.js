// Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.


async function logMessageWithDelay(message, delaytime) {
    await new Promise(resolve =>
    setTimeout(resolve, delaytime));
    console.log(message);

   }

   logMessageWithDelay("Hello Jesus is my saviour", 4000);


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence. 


async function getUserData(id) {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(`User data for ID ${id}`);
      }, 1000);
    });
  }
  const userId = [1, 2, 3, 4, 5];
  async function fetchAndLogUserDataSequentially(userIds) {
    const results = await userIds.reduce(async (previousPromise, id) => {
    await previousPromise;
    const userData = await getUserData(id);
    console.log(userData);
    return getUserData(id + 1);
    }, Promise.resolve());
    console.log('All user data fetched and logged.');
  }

  fetchAndLogUserDataSequentially(userId)

// You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.

const performTask = true;
const ourPromise = new Promise((resolve, reject)=>{
    if(performTask){
        resolve('The task was successful congratulations');
    }
    else{
        reject('I will try harder')
    }
})

ourPromise.then((response)=>{
    console.log({response});
    console.log('I will continue trying')
})

.catch((error)=>{
    console.log({error});
    console.log('Try once more')
})

.finally(()=>{
    console.log('The task is workable')
})

console.log({performTask});

async function taskPerformance(){
    try{
    console.log('I must get it')
    await performTask;
    }
    catch{
        console.log('Our task is not yet done')
    }
}

taskPerformance();


// Retry Logic:
Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.


function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > failureProbability) {
    resolve(`${taskName} has succeeded`);
    } else {
    reject(`${taskName} has failed`);
    }
    });
   }
   async function executeWithRetry(taskName, retries, failureProbability) {
    for (let i = 0; i <= retries; i++) {
    try {
    const result = await unstableTask(taskName, failureProbability);
    console.log(result);
    return; 
    } catch (error) {
    console.log(error);
    if (i === retries) {
    throw new Error(`Failed after ${retries} retries`);
    }
    }
    }
   }
   executeWithRetry("Partying", 3, 0.5);