import React, {useRef} from 'react';
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

const App = (props: HighchartsReact.Props) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
            {...props}/>
    )
}

export default App;
