import {data} from "./p-uf-partido-deputado-mandato.data";
import {autoType} from "d3";

export default data.map(({...d}) => autoType(d));