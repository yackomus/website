<script setup>

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {ref, shallowRef, onMounted} from "vue";

import DeputadosPorEstado from '../components/DeputadosPorEstado.vue';
import DeputadosPorPartido from '../components/DeputadosPorPartido.vue';

</script>

:::info Mandato atual de cada deputado federal
<!-- <br /> -->
<DeputadosPorEstado />
:::

:::info Mandato atual de cada deputado federal
<!-- <br /> -->
<DeputadosPorPartido />
:::