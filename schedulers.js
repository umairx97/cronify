const cron = require('node-cron')
const cronServices = require('./cron-services')

module.exports = {
  cronify,
  everySecond,
  everyNthSecond,
  everyMinute,
  everyNthMinute,
  everyHour,
  everyNthHour,
  at
}

const isFunction = (arg) => typeof arg === 'function'

function cronify (params = '* * * * * *', opts = {}, fn, ...fnArgs) {
  let args = []
  if (isFunction(opts)) {
    fn = opts
    args = Array.from(arguments).slice(2)
    opts = {}
  }
  return cron.schedule(params, () => args.length ? fn(...args) : fn(...fnArgs), opts)
}

function everySecond (opts, fn, ...fnArgs) {
  let args = []
  if (isFunction(opts)) {
    fn = opts
    args = Array.from(arguments).slice(1)
    opts = {}
  }
  return cron.schedule('*/1 * * * * *', () => args.length ? fn(...args) : fn(...fnArgs), opts)
}

function everyNthSecond (seconds, opts = {}, fn, ...fnArgs) {
  let args = []
  if (isFunction(opts)) {
    fn = opts
    args = Array.from(arguments).slice(2)
    opts = {}
  }
  return cron.schedule(`*/${seconds} * * * * *`, () => args.length ? fn(...args) : fn(...fnArgs), opts)
}

function everyMinute (opts = {}, fn, ...fnArgs) {
  let args = []
  if (isFunction(opts)) {
    fn = opts
    args = Array.from(arguments).slice(1)
    opts = {}
  }
  return cron.schedule('*/1 * * * *', () => () => args.length ? fn(...args) : fn(...fnArgs), opts)
}

function everyNthMinute (minutes, opts = {}, fn, ...fnArgs) {
  let args = []
  if (isFunction(opts)) {
    fn = opts
    args = Array.from(arguments).slice(2)
    opts = {}
  }
  return cron.schedule(`*/${minutes} * * * *`, () => () => args.length ? fn(...args) : fn(...fnArgs), opts)
}

function everyHour (opts = {}, fn, ...fnArgs) {
  let args = []
  if (isFunction(opts)) {
    fn = opts
    args = Array.from(arguments).slice()
    opts = {}
  }
  return cron.schedule('0 0 */1 * * *', () => () => args.length ? fn(...args) : fn(...fnArgs), opts)
}

function everyNthHour (hours, opts = {}, fn, ...fnArgs) {
  let args = []
  if (isFunction(opts)) {
    fn = opts
    args = Array.from(arguments).slice(2)
    opts = {}
  }
  return cron.schedule(`0 0 */${hours} * * *`, () => () => args.length ? fn(...args) : fn(...fnArgs), opts)
}

function at (schedule, opts = {}, fn, ...fnArgs) {
  let args = []
  const [period, , time] = schedule.split(' ')
  const [hours, minutes] = time.split(':')
  const cronFormat = cronServices.getCronFromPeriod(period, hours, minutes)

  if (isFunction(opts)) {
    fn = opts
    args = Array.from(arguments).slice(2)
    opts = {}
  }

  return cron.schedule(cronFormat, () => args.length ? fn(...args) : fn(...fnArgs), opts)
}
