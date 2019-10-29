import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory'

export default function FoodCategoryCost({ data }) {
    return (
        <div className='bar-chart'>
            <h3 className='bar-chart-title'>Cost by Category</h3>
            <VictoryChart
                style={{ parent: { maxWidth: "100%" } }}
                padding={{left: 100, top: 80, bottom: 10}}
                height={375}
                width={850}
                domainPadding={25}
            >
            <VictoryAxis
            />
            <VictoryAxis
            />
            <VictoryBar horizontal
                data={data}
                labels={( datum ) => `$${datum.datum.cost}`}
                style={{ data: { fill: "rgb(42, 42, 58)" } }}
                labelComponent={<VictoryLabel dx={1} />}
                barWidth={30}
                x='food_category'
                y='cost'
                sortKey='y'
                sortOrder='ascending'
            />
            </VictoryChart>
        </div>
    )
}
