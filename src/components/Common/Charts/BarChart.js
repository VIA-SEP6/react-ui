import {Bar} from 'react-chartjs-2';

export default function BarChart(props) {
    const {labels, datasets} = props

    function getBarData() {
        return {
            labels,
            datasets: datasets
        }
    }

    return (
        <Bar data={getBarData()}/>
    )
}