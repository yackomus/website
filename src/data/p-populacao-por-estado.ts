import {data} from "./p-populacao-por-estado.data";
import {autoType} from "d3";

export default data.map(({...d}) => autoType(d));