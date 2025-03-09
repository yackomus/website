<script setup>
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import PlotFigure from "./PlotRender.js";
import datasource from "../data/p-bolsa-familia-brasil-mensal.ts";
</script>

<template>
  <PlotFigure
    :options="{
      // height: 300,
      // width:1200,
      marginLeft:42,
      marginRight: 30,
      marginBottom: 40,
      marginTop: 33,

      x : {
      label:null,
      interval: d3.utcMonth,
      // ticks:10,
    //   nice: true,
      // fontSize: 12,
      },

      y : {
        label:'Pagamentos do Bolsa Família, em bilhões de reais por mês',
        // tickFormat: d3.format('.2s'), 
        type: 'linear',
        grid: true,
        labelOffset:40,
        nice: true,
      },

      color: {
        legend: true,
        // range: ['#ffed6f', '#80b1d3', '#fb8072'], // set3
        range: ['#e6ab02', '#7570b3', '#e7298a'], // dark2
        domain: ['Bolsa Família', 'Auxílio Brasil', 'Novo Bolsa Família'],
      },

      marks: [

      Plot.ruleY([3 * 1e9], {
        x1: new Date(2020, 1, 1),
        x2: new Date(2024, 11, 1),
        stroke: 'red',
        strokeWidth: 1.2
      }),

    Plot.text(['🎲 Bolsa Família gasto em apostas online em AGO/2024: 3B → '], {
      x: new Date(2019, 9, 1),
      y: [3 * 1e9],
      // fill: 'red',
      textAnchor: 'end',
      // fontWeight: 'bolder',
      fontSize: 14
     }),

      Plot.areaY(datasource, {
          x: 'data',
        //   y1:160*1e6,
          y: 'valor',
          opacity:0.7,
          fill:'programa'
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

      Plot.lineY(datasource, {
          x: 'data',
        //   y1:160*1e6,
          y: 'valor',
          opacity:1,
          strokeWidth:1.2,
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
        nice:true,
        // ticks: 20,
      }),

      Plot.axisY({
        fontSize: 14,
        labelAnchor: 'top',
        // tickFormat: d3.format('.2s'), 
        tickFormat: (x) => x == 0 ? `0` : `${Math.floor(x/1e9)}B`,
      }),

    //   Plot.text(datasource, {
    //   text: d => `${Math.round(d.populacao / 1000000)}`,
    //   rotate: -90,
    //   y: 'valor',
    //   x: 'data',
    //   textAnchor: 'end',
    //   dx: 0,
    //   dy: 4,
    //   fontSize: 12,
    //   }),

      Plot.ruleY([0]),
      ],
    }"
  />
</template>