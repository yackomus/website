import {data} from "./pop-brasil.data";
import {autoType} from "d3";

export default data.map(({...d}) => autoType(d));
