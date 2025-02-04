<script setup>
import * as Plot from "@observablehq/plot";
import PlotFigure from "./PlotRender.js";
import * as d3 from "d3";
import {ref, shallowRef, onMounted} from "vue";

const datasource = shallowRef([]);

onMounted(() => {
  d3.csv("../data/p-municipios-por-estado.csv", d3.autoType).then((data) => (datasource.value = data));
});
</script>

<template>
  <PlotFigure
    :options="{
      marginLeft: 30,
      marginRight: 30,
      marginTop:40,

      color: {
        legend: true,
        range: ['#3ca951', '#ff725C', '#4269D0', '#6cc5b0', '#efb118'],
        domain: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste']
      },

      marks: [
        Plot.barX(datasource, {
          x: 'Municipios',
          y: 'UF',
          fill: 'Regiao',
          opacity:0.7,
          sort: { y: 'x', reverse: true, limit: 27 },
        }),
        Plot.ruleX([0]),
        Plot.gridX(),
        Plot.axisX({
          anchor:'top',
          labelAnchor:'left',
          label: 'Número de municípios por estado',
          labelOffset:40,
          fontSize: 14,
        }),
        Plot.axisY({
          fontSize: 14,
          label: null,
        }),

        Plot.text(datasource, {
          text: d => `${d.Municipios}`,
          rotate: 0,
          y: 'UF',
          x: 'Municipios',
          textAnchor: 'start',
          // sort: { y: 'x', reverse: true, limit: 24 },
          dx: 3,
          dy: 0,
          fontSize: 12,
        }),
      ]
    }"
  />
</template>