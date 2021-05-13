import {Doughnut} from 'react-chartjs-2';

export default function DoughnutChart(props) {
    const {labels, data, title} = props

    function getDoughnutData() {
        const [fillColors, borderColors] = generateColors(labels.length)
        return {
            labels,
            datasets: [
                {
                    label: title,
                    data,
                    backgroundColor: fillColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                },
            ],
        }
    }

    function getRandomFillAndBorderColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return ["rgba(" + r + "," + g + "," + b + ", 0.2)", "rgba(" + r + "," + g + "," + b + ", 1)"];
    }

    function generateColors(amount) {
        const fillColors = []
        const borderColors = []
        for (let i = 0; i < amount; i++) {
            const [fill, border] = getRandomFillAndBorderColor()
            fillColors.push(fill)
            borderColors.push(border)
        }
        return [fillColors, borderColors]
    }

    return (
        <Doughnut data={getDoughnutData()}/>
    )
}