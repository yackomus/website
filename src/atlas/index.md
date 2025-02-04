<script setup>

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {ref, shallowRef, onMounted} from "vue";

import PopulacaoBrasil from '../components/PopulacaoBrasil.vue';
import MunicipiosPorEstado from '../components/MunicipiosPorEstado.vue';
import PopulacaoPorEstado from '../components/PopulacaoPorEstado.vue';
</script>

# Brasil

## Municípios

:::info MG e SP têm 27% dos 5570 municípios brasileiros
<br />
<MunicipiosPorEstado />
:::

## População

:::info 212.6 milhões foi a população brasileira estimada em 2024
<br />
<PopulacaoBrasil />
:::

:::info SP, MG e RJ formaram 40% da população brasileira em 2024
<br />
<PopulacaoPorEstado />
:::