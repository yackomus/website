<script setup>

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {ref, shallowRef, onMounted} from "vue";

import PopulacaoBrasil from '../components/PopulacaoBrasil.vue';
import MunicipiosPorEstado from '../components/MunicipiosPorEstado.vue';
import PopulacaoPorEstado from '../components/PopulacaoPorEstado.vue';
</script>

:::info Território
<!-- <br /> -->
<MunicipiosPorEstado />
:::

:::info População
<br />
<PopulacaoBrasil />
:::

:::info População
<!-- <br /> -->
<PopulacaoPorEstado />
:::