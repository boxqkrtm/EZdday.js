# Welcome to EZdday.js
Multi timezone support D-day javascript library

Usage and example Sourcecode [on index.html](https://github.com/boxqkrtm/EZdday.js/blob/master/index.html)

## Usage
```js
new EZdday().checkLocalUTC(); // check your timezone
EZdday().set(Date Object, timezone); // set target time
EZdday().getDate||getHours||getMinute||getSeconds() //get remain time
```

## Example Make realtime widget
```js
var mydday = new EZdday();
mydday.set(new Date('Fri Jul 31 2020 01:41:02'), 9); //your target date, your timezone<br>
var mydday = new EZdday();
mydday.set(new Date(vdateStr), 9);
var time = document.getElementById('time');
setInterval(function(){
  time.innerHTML = mydday.getDate()+':'+mydday.getHours()+':'+mydday.getMinute()+':'+mydday.getSeconds();
},100);
```
