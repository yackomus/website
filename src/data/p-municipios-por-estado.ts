import {data} from "./p-municipios-por-estado.data";
import {autoType} from "d3";

export default data.map(({...d}) => autoType(d));