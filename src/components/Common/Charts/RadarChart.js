import {Bar} from 'react-chartjs-2';
import {useTheme} from "@material-ui/core";


export default function RadarChart(props) {
    const {labels, data, label, color} = props
    const theme = useTheme();

    function getBarData() {
        return {
            labels,
            datasets: [
                {
                    label: label,
                    data: data,
                    backgroundColor: theme.palette[color].chartColor || theme.palette.primary.chartColor,
                    hoverBackgroundColor: theme.palette[color].chartHover || theme.palette.primary.chartHover,
                    borderColor: theme.palette[color].chartBorder || theme.palette.primary.chartBorder,
                    borderWidth: 1,
                }
            ],
        }
    }

    return (
        <Bar data={getBarData()}/>
    )
}