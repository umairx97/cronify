<div> 
  <h1 align="center" style="font-size: 80px; border:none; margin: 0px; padding: 0px">Cronify</h1>
</div>
<!-- <br/> -->
<h4 align="center" style="margin: 0px; padding: 0px">Making Cron Simple - uses node-cron under the hood</h4>
</div>

<div style="display:flex; align-items:center; justify-content: center">
<img src="./cronify.png" style="height: 400px; width:80%; object-fit: contain">
</div>

### npm
```
npm install cronify
```

### yarn
```
yarn add cronify
```

## 💡 API <a name="api"></a>

**cronify**```(params, opts<optional>, fn, fnArgs)```
```javascript
const cron = require('cronify')

// simple node-cron as you like it
cron.cronify('*/1 * * * * *', console.log, 'hello') // without options

// with options 
cron.cronify(
  '*/1 * * * * *', 
  { timezone: "America/Sao_Paulo" },
  console.log, 
  'hello'
) 
```
---
**everySecond**```(opts<optional>, fn, fnArgs)```
```javascript
const cron = require('cronify')

// without options
cron.everySecond(console.log, 'hello') 

// with options
cron.everySecond({ timezone: "America/Sao_Paulo" }, console.log, 'hello')
```
---
**everyNthSecond**```(seconds, opts<optional> fn, fnArgs)```
```javascript
const cron = require('cronify')

// without options - this will log hello world every 2 seconds
cron.everyNthSecond(2, console.log, 'hello', 'world')

// with options - this will log hello world every 2 seconds
cron.everyNthSecond(2, { timezone: "America/Sao_Paulo" } console.log, 'hello', 'world')
```
---
**everyMinute**```(opts<optional>, fn, fnArgs)```
```javascript
const cron = require('cronify')

// without options
cron.everyMinute(console.log, 'hello') 

// with options
cron.everyMinute({ timezone: "America/Sao_Paulo" }, console.log, 'hello')
```
---
**everyNthMinute**```(minutes, opts<optional>, fn, fnArgs)```
```javascript
const cron = require('cronify')

// without options - this will log hello world every 2 minutes
cron.everyNthMinute(2, console.log, 'hello', 'world')

// with options - this will log hello world every 2 minutes
cron.everyNthMinute(2, { timezone: "America/Sao_Paulo" } console.log, 'hello', 'world')
```
---
**everyHour**```(opts<optional>, fn, fnArgs)```
```javascript
const cron = require('cronify')

// without options
cron.everyHour(console.log, 'hello') 

// with options
cron.everyHour({ timezone: "America/Sao_Paulo" }, console.log, 'hello')
```
---
**everyNthHour**```(hours, opts<optional>, fn, fnArgs)```
```javascript
const cron = require('cronify')

// without options - this will log hello world every 2 hours
cron.everyNthHour(2, console.log, 'hello', 'world')

// with options - this will log hello world every 2 hours
cron.everyNthHour(2, { timezone: "America/Sao_Paulo" } console.log, 'hello', 'world')
```