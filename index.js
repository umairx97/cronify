const schedulers = require('./schedulers')

const cron = {
  cronify: schedulers.cronify,
  everySecond: schedulers.everySecond,
  everyNthSecond: schedulers.everyNthSecond,
  everyMinute: schedulers.everyMinute,
  everyNthMinute: schedulers.everyNthMinute
}

module.exports = {
  cron
}
