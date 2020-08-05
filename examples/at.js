const cron = require('../index')
/*
according to this example the job will start daily at 6:52 AM
which is 24 Hour format and we have a future timestamp of 5 seconds later i.e.
"job start time - 5 seconds later"
so the condition that we have written at the top of our function would
execute and stop the job from running anymore

period = 'daily' | 'weekly' | 'monthly'
time = hh:mm
cron.at("period" at "time", opts<optional>, function, ...functionArgs)
*/
const job = cron.at('daily at 6:52', sayMyName, 'Cronify')
const jobStartDate = new Date()

// Set this as the time your job needs to start from
// Hours - Minutes - Seconds - Milliseconds
jobStartDate.setHours(6, 52, 0, 0, 0)

// Any future timestamp that will be used as ending time for your job
const afterDate = new Date().setTime(jobStartDate.getTime() + 5000)

function sayMyName (name) {
  if (Date.now() >= afterDate) return job.stop()
  console.log(`Hi ${name}`)
}
