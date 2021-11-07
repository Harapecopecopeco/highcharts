import React from 'react';
import Highcharts from "highcharts"

import HighchartsReact from "highcharts-react-official";

import './App.css';

const options = {
    title: {
        text: 'DEMO DATA'
    },
    series: [{
        data: [1, 1, 3, 4, 2, 6, 7, 8, 9]
    }, {
        data: [0, 1, 0, 2, 1, 5, 2, 6, 9]
    }]
}

function App() {
    return (
        <div>
            <div className="App">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}/>
            </div>
        </div>
    );
}

export default App;
