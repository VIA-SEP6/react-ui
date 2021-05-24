import {Bar} from 'react-chartjs-2';

export default function BarChart(props) {
    const {labels, data} = props

    function getDoughnutData() {
        return {
            labels,
            datasets: [
                {
                    label: data[0].label,
                    data: data[0].values,
                    backgroundColor: ["rgba(104,176,171, 0.2)"],
                    hoverBackgroundColor: ["rgba(104,176,171, 0.5)"],
                    borderColor: ["rgba(104,176,171, 1)"],
                    borderWidth: 1,
                },
                {
                    label: data[1].label,
                    data: data[1].values,
                    backgroundColor: ["rgba(229, 61, 0, 0.2)"],
                    hoverBackgroundColor: ["rgba(229, 61, 0, 0.5)"],
                    borderColor: ["rgba(229, 61, 0, 1)"],
                    borderWidth: 1,
                },
            ],
        }
    }

    return (
        <Bar data={getDoughnutData()}/>
    )
}