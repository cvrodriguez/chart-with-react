import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';


drilldown(Highcharts);
const MyChartComponent = (props) => {
    const data = props.data

    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Three Level Drilldown Pie Chart'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.2f} {point.unit}'
                }
            }
        },
        series: [{
            name: 'Scope',
            colorByPoint: true,
            data: Object.keys(data).map(function (scope) {
                return {
                    name: scope,
                    y: Object.keys(data[scope]).length,
                    drilldown: scope
                };
            })
        }],
        drilldown: {
            series: Object.keys(data).map(function (scope) {
                return {
                    name: scope,
                    id: scope,
                    data: Object.keys(data[scope]).map(function (category) {
                        return {
                            name: category,
                            y: data[scope][category].reduce(function (sum, activity) {
                                return sum + activity[1];
                            }, 0),
                            drilldown: category
                        };
                    })
                };
            }).concat(
                Object.keys(data).map(function (scope) {
                    return Object.keys(data[scope]).map(function (category) {
                        return {
                            name: category,
                            id: category,
                            data: data[scope][category].map(a => {
                                return {
                                    name: a[0],
                                    y: a[1]
                                }
                            }
                            )
                        }

                    })
                }).reduce((init, serie) => {
                    return init.concat(serie)
                }, [])
            )


        },


    }
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}
export default MyChartComponent;