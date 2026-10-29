'use strict';
const workEntries = ['period-purse', 'lovelytics', 'suprstudent', 'qualcomm'];
const destination = workEntries.includes(location.hash.slice(1)) ? 'work.html' : 'research.html';
location.replace(destination + location.hash);
