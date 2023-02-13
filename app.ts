abstract class Logger {
  abstract log(message: any): void;

  printDate(date: Date) {
    this.log(date.toString());
  }
}

class TrueLogger extends Logger {
  log(message: any) {
    console.log(message);
  }

  logWithDate() {
    this.printDate(new Date());
    this.log('Hello world!');
  }
}

const tl = new TrueLogger();
tl.logWithDate()