/** 
* Author: Cigomba Miler
* Date: Friday March 20, 2020 9:27 PM
* Notes: This is just the beginning. First js program I made. Took me 2 days
* Basically just a stopwatch that starts, stops, and tells you the current time you're at in seconds 
***/

function Stopwatch()
{
    //GETTERS
    let duration = 0;
    let isRunning = false;
    let timer;
    //SETTERS
    this.start = function(){
        if (isRunning)
            throw new Error("Already Started");    
        else {       
        timer = setInterval(counter, 1000);
        isRunning = true;
                };
        }
    function counter() {
    duration++;
    console.log(duration);
    }
    this.stop = function(){
        if (!isRunning)
            throw new Error('Already Off');
        else
        clearInterval(timer);
        isRunning = false;
    };
    this.reset = function(){
        isRunning = false;
        duration = 0;
        console.log('Stopwatch has been reset.');
        console.log('isRunning:\t' + isRunning);
        console.log('Duration:\t' + duration + '\n');
    }

    Object.defineProperty(this, 'duration', { get: function() 
        {  
            console.log('Duration: ' + duration);} });
    /*Object.defineProperty(this, 'start', { set: function() 
        { return start();} });  */
}
console.log("\n\t\t------- Stopwatch Program Test --------");
console.log('\t\t\t      C. Miler \n')
console.log('This stopwatch calculates basic time in seconds. To begin choose from the following 4 options by entering 1, 2 ,3 , or 4.\t\t\n');
console.log('\t\t1. Start: Starts the clock from zero, until it is stopped.');
console.log('\t\t2. Stop: Pauses the watch at the current time');
console.log('\t\t3. Reset: sw.reset()');
console.log('\t\t4. Duration: Enter 4 at any point to see the current time\n');
console.log('Disclaimer: press Control + C to end loop\n');

//  RUN THIS CODE TO TEST IT




