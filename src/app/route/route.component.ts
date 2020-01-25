import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
 ngOnInit() {
     this.makePlot();
 }
 makePlot() {
    const group1 = {
      x: [0.1, 0.2, 0.2, 0.75, 0.3, 0.45, 0.7, 1],  y: [0.1, 0.4, 0.4, 0.2, 0.2, 0.2, 0.2, 1], z: [0.1, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 1],
      mode: 'markers',
      marker: {
        size: 12,
        line: {
          color: 'rgba(217, 217, 217, 0.14)',
          width: 0.5
        },
        opacity: 1
      },
      type: 'scatter3d'
    };
    const group2 = {
      x: [1, 1.4, 1, 1, 1, 1],  y: [3, 3, 2.8, 2.9, 2.9, 2.9], z: [1, 1.6, 1, 1, 1.2, 1.1],
      mode: 'markers',
      marker: {
        color: 'rgb(210,145,188)',
        size: 12,
        symbol: 'circle',
        line: {
          color: 'rgb(204, 204, 204)',
          width: 1
        },
        opacity: 1
      },
      type: 'scatter3d'
    };
    const group3 = {
      x: [1, 0.9, 1, 1, 0.8, 1.1],  y: [2, 2, 1.9, 2, 1.9, 2], z: [2, 2, 2, 1.9, 2, 2.1],
      mode: 'markers',
      marker: {
        color: 'rgb(255,105,97)',
        size: 12,
        symbol: 'circle',
        line: {
          color: 'rgb(204, 204, 204)',
          width: 1
        },
        opacity: 1
      },
      type: 'scatter3d'
    };
    let data = [];
    data = [group1, group2, group3];
    let layout = {};
    layout = {
      dragmode: false,
      gridlines: false,
      aaxis : {
        showgrid: false,
        showline: true
      },
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
      },
      legend : {
        orientation: 'h',
        x: 0.5,
        y: 1,
        xanchor: 'auto'
      }
    };
    let config = {};
    config = {showSendToCloud: true};
    Plotly.newPlot('myDiv', data, layout, config);
  }
  onResize(event) {
    console.log('chart resized: ', event);
    this.makePlot();
  }

}
