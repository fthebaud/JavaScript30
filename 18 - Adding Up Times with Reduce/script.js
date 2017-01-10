'use strict';

const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
                  .map(node => node.dataset.time)
                  .map(time => {
                    const [mins, secs] = time.split(':').map(Number.parseFloat); //parseInt ne fonctionne pas car on lui passe un mauvaise radix
                    return mins * 60 + secs;
                  })
                  .reduce((a, b) => a + b, 0);

const hours = Math.floor(seconds / 3600);


const minutesLeft = Math.floor((seconds%3600) / 60);

const secondsLeft = seconds%60;

console.log(seconds, hours, minutesLeft, secondsLeft);
