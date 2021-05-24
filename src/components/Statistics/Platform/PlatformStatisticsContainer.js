import {makeStyles} from "@material-ui/core/styles";
import {TabContext, TabPanel} from "@material-ui/lab";
import React from "react";
import {Tab, Tabs} from "@material-ui/core";
import TopicHeader from "../../Common/TopicHeader";
import BarChartWrapper from "./BarChartWrapper";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    }
}));

export default function PlatformStatisticsContainer(props) {
    const [tab, setTab] = React.useState("week");
    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <div className={classes.root}>
            <TopicHeader>Platform Statistics</TopicHeader>
            <TabContext value={tab}>
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Week" value="week"/>
                    <Tab label="Month" value="month"/>
                    <Tab label="Year" value="year"/>
                </Tabs>
                <TabPanel value="week">
                    <BarChartWrapper type="week" comments={[3, 8, 8, 19]} reviews={[1, 2, 55, 13]}/>
                </TabPanel>
                <TabPanel value="month">
                    <BarChartWrapper type="month" comments={[3, 8, 8, 19]} reviews={[1, 2, 55, 13]}/>
                </TabPanel>
                <TabPanel value="year">
                    <BarChartWrapper type="year" comments={[1123, 4422, 2333, 6724]} reviews={[4562, 1235, 6453, 2341]}/>
                </TabPanel>
            </TabContext>
        </div>
    )
}