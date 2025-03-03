<script setup>
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import PlotFigure from "./PlotRender.js";
import datasource from "../data/pop-brasil.ts";
</script>

<template>
  <PlotFigure
    :options="{
      // height: 300,
      marginLeft:50,
      marginRight: 0,
      marginBottom: 40,
      marginTop: 30,

      x : {
      label:null,
      interval: d3.utcYear,
      // ticks:10,
      nice: true,
      // fontSize: 12,
      },

      y : {
        label:'População brasileira, em milhões de habitantes',
        tickFormat: d3.format('.2s'), 
        type: 'linear',
        grid: true,
        labelOffset:40,
        nice: true,
      },

      marks: [
      Plot.barY(datasource, {
          x: 'aaaa',
          y1:160*1e6,
          y2: 'populacao',
          opacity:0.5,
          // channels: {
          //     População: 'populacao'
          // },
          // tip: true,
          // tip: {
          //     format: {
          //     x: true,
          //     y: true,
          //     // População: true,
          //     }
          // }
      }),

      Plot.axisX({
        fontSize: 14,
        ticks: 10,
      }),

      Plot.axisY({
        fontSize: 14,
        tickFormat: d3.format('.2s'), 
      }),

      Plot.text(datasource, {
      text: d => `${Math.round(d.populacao / 1000000)}`,
      rotate: -90,
      y: 'populacao',
      x: 'aaaa',
      textAnchor: 'end',
      dx: 0,
      dy: 4,
      fontSize: 12,
      }),

      Plot.ruleY([160*1e6]),
      ],
    }"
  />
</template>