import {sapa} from './libs/soal1'
import {convert} from './libs/soal2'
import {score} from './libs/soal3'
import { filter } from './libs/soal4'

const myArgs = process.argv.slice(2)
const command = myArgs[0]


switch(command) {
    case "sapa" :
        console.log(sapa(myArgs[1]));
        break;
    case "convert" :
        console.log(convert(myArgs.slice(1)));
        break
    case "checkScore" :
        console.log(score(myArgs.slice(1)))
        break
    case "filterData" :
        console.log(filter(myArgs.slice(1)));
        break;
    default :
        console.log("Unknown command");
}