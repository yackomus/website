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
      interval: d3.utcYear,
      },

      y : {
        label:'Pagamentos do Bolsa Família, em bilhões de reais por ano',
        type: 'linear',
        grid:true,
        labelOffset:40,
        nice: true,
      },

      color: {
        legend: true,
        range: ['#e6ab02', '#7570b3', '#e7298a'], // dark2
        domain: ['Bolsa Família', 'Auxílio Brasil', 'Novo Bolsa Família'],
      },

      marks: [

      Plot.ruleY([110.9 * 1e9], {
        x1: new Date(2020, 1, 1),
        x2: new Date(2024, 1, 1),
        stroke: 'red',
        strokeWidth: 1.2
      }),

      Plot.text(['📚 Ministério da Educação em 2024: 111B →'], {
        x: new Date(2019, 1, 1),
        y: [110.9 * 1e9],
        // fill: 'red',
        textAnchor: 'end',
        // fontWeight: 'bolder',
        fontSize: 14
      }),

      Plot.text(['Bolsa Família 2024:      '], {
        x: new Date(2024, 1, 1),
        y: [168 * 1e9],
        // fill: '#e7298a',
        textAnchor: 'end',
        // fontWeight: 'bolder',
        fontSize: 14
       }),

       Plot.text(['163B'], {
        x: new Date(2024, 1, 1),
        y: [168 * 1e9],
        fill: '#e7298a',
        textAnchor: 'center',
        fontWeight: 'bolder',
        fontSize: 14
      }),

      Plot.barY(datasource, 
        Plot.groupX(
          {y:'sum'},
          {x:'data', y:'valor',fill:'programa',opacity:0.7}
        ),
      ),

      Plot.tickY(datasource, 
        Plot.groupX(
          {y:'sum'},
          {x:'data', y:'valor',opacity:1, strokeWidth:1.2}
        ),
      ),

      Plot.axisX({
        fontSize: 14,
        nice:true,
      }),

      Plot.axisY({
        fontSize: 14,
        labelAnchor: 'top',
        // tickFormat: d3.format('.2s'), 
        tickFormat: (x) => x == 0 ? `0` : `${Math.floor(x/1e9)}B`,
      }),

      Plot.ruleY([0]),
      ],
    }"
  />
</template>