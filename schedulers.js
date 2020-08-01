const cron = require('node-cron')

module.exports = {
  cronify,
  everySecond,
  everyNthSecond,
  everyMinute,
  everyNthMinute,
  everyHour,
  everyNthHour
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
