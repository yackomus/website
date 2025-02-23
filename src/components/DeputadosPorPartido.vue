<script setup>
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import PlotFigure from "./PlotRender.js";
import datasource from "../data/p-uf-partido-deputado-mandato.ts";
</script>

<template>
  <PlotFigure
    :options="{
        marginLeft: 120,
        marginBottom:40,
        x: { domain:[0,100], grid:true},
        y: { label: null },
        color: { label: true, legend: true, scheme: 'Turbo', type: 'categorical' },
        marks: [
            Plot.barX(datasource, {
            y: 'siglaPartido',
            x: 1,
            inset: 0.8,
            fill: 'numMandatos',
            reverse: true,
            sort: {
                y: 'x',
                order: 'descending'
            }
            }),
            Plot.ruleX([0]),
            Plot.axisX({
              fontSize:14,
              label: 'Número de deputados federais por partido político',
              labelAnchor:'center',
              ticks:10,
              // labelOffset:45,

            }),
            Plot.axisY({
              fontSize:14
            }),
        ]
    }"
  />
</template>