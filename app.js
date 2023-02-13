"use strict";
class Logger {
    printDate() {
        this.log(new Date().getDate());
    }
}
class TrueLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate() {
        this.printDate();
        this.log('Hello world!');
    }
}
const tl = new TrueLogger();
tl.logWithDate();
