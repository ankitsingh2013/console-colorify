export class Log {
    static success(msg: String) {
        console.log(`%c ${msg}`, 'color: green')
    }
    static danger(msg: String) {
        console.log(`%c ${msg}`, 'color: red')
    }
    static info(msg: String) {
        console.log(`%c ${msg}`, 'color: blue, background: green')
    }
}