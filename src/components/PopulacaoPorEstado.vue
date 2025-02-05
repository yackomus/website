<script setup>
import * as Plot from "@observablehq/plot";
import {format} from "d3-format";
import PlotFigure from "./PlotRender.js";
import datasource from "../data/p-populacao-por-estado.ts";
</script>

<template>
  <PlotFigure
    :options="{
      marginLeft: 30,
      marginRight: 33,
      marginTop:40,

      color: {
        legend: true,
        range: ['#3ca951', '#ff725C', '#4269D0', '#6cc5b0', '#efb118'],
        domain: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste']
      },

      marks: [
        Plot.barX(datasource, {
          x: 'populacao',
          y: 'uf',
          fill: 'regiao',
          opacity:0.7,
          sort: { y: 'x', reverse: true, limit: 27 },
        }),
        Plot.ruleX([0]),
        Plot.gridX(),
        Plot.axisX({
          anchor:'top',
          labelAnchor:'left',
          label: 'População por unidade federativa em 2024',
          labelOffset:40,
          fontSize: 14,
          tickFormat: format(',.2s'),
        }),
        Plot.axisY({
          fontSize: 14,
          label: null,
        }),

        Plot.text(datasource, {
          text: d => `${Math.round(d.populacao / 1000000)}`,
          rotate: 0,
          y: 'uf',
          x: 'populacao',
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