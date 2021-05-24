import {Tab, Tabs} from "@material-ui/core";
import {TabContext, TabPanel} from "@material-ui/lab";
import React from "react";
import DoughnutChart from "../../Common/Charts/DoughnutChart";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    tabPanel: {
        width: "85%"
    }
}))

export default function PersonStatisticsContainer(props) {
    const [value, setValue] = React.useState('1');
    const classes = useStyles()

    const {crewStatistics, castStatistics} = props

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const noData = (
        <div style={{textAlign: "center"}}>
            <h5>No Data</h5>
        </div>
    )

    return (
        <TabContext value={value}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
            >
                <Tab label="Cast" value="1"/>
                <Tab label="Crew" value="2"/>
            </Tabs>
            <TabPanel className={classes.tabPanel} value="1">
                {castStatistics
                    ? <DoughnutChart labels={Object.keys(castStatistics)} data={Object.values(castStatistics)}
                                     title="Test"/>
                    : noData}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value="2">
                {crewStatistics.length === 0
                    ? <DoughnutChart labels={Object.keys(crewStatistics)} data={Object.values(crewStatistics)}
                                     title="Test"/>
                    : noData}
            </TabPanel>
        </TabContext>
    )
}