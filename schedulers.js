const cron = require('node-cron')

module.exports = {
  cronify,
  everySecond,
  everyNthSecond,
  everyMinute,
  everyNthMinute
}

function cronify (params = '* * * * * *', fn, ...fnArgs) {
  return cron.schedule(params, () => fn(...fnArgs))
}

function everySecond (fn, ...fnArgs) {
  return cron.schedule('*/1 * * * * *', () => fn(...fnArgs))
}

function everyNthSecond (second, fn, ...fnArgs) {
  return cron.schedule(`*/${second} * * * * *`, () => fn(...fnArgs))
}

function everyMinute (fn, ...fnArgs) {
  return cron.schedule('*/1 * * * *', () => fn(...fnArgs))
}

function everyNthMinute (minute, fn, ...fnArgs) {
  return cron.schedule(`*/${minute} * * * *`, () => fn(...fnArgs))
}
