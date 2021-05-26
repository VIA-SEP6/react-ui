import {Bar} from 'react-chartjs-2';

export default function BarChart(props) {
    const {labels, datasets} = props

    function getDoughnutData() {
        return {
            labels,
            datasets: datasets
        }
    }

    return (
        <Bar data={getDoughnutData()}/>
    )
}