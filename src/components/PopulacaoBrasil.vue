<script setup>
import * as Plot from "@observablehq/plot";
import PlotFigure from "./PlotRender.js";
import * as d3 from "d3";
import {ref, shallowRef, onMounted} from "vue";
import popBRA from "../data/pop-brasil.ts";

const popBR = shallowRef([]);

onMounted(() => {
  d3.csv("../data/pop-brasil.csv", d3.autoType).then((data) => (popBR.value = data));
});
</script>

<template>
  <PlotFigure
    :options="{
      height: 300,
      marginLeft:50,
      marginRight: 0,
      marginBottom: 40,
      marginTop: 20,

      x : {
      label:null,
      interval: d3.utcYear,
      // ticks:10,
      nice: true,
      // fontSize: 12,
      },

      y : {
        label:'População brasileira',
        tickFormat: d3.format('.2s'), 
        type: 'linear',
        grid: true,
        labelOffset:40,
        nice: true,
      },

      marks: [
      Plot.barY(popBR, {
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

      Plot.text(popBR, {
      text: d => `${Math.round(d.populacao / 1000000)}`,
      rotate: -90,
      y: 'populacao',
      x: 'aaaa',
      textAnchor: 'start',
      dx: 0,
      dy: -4,
      fontSize: 12,
      }),

      Plot.ruleY([160*1e6]),
      ],
    }"
  />
</template>