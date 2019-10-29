import React from 'react'
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory'

export default function WasteQuantityTime({ data }) {
    return (
        <div className='line-graph'>
            <h3 className='line-graph-title'>Quantity Wasted by Month</h3>
            <VictoryChart
                height={400}
                width={1500}
                domainPadding={50}
            >
            <VictoryAxis />
            <VictoryAxis dependentAxis tickFormat={(tick) => `${tick} lbs`}/>
            <VictoryLine
                data={data}
                interpolation="natural"
                x='month'
                y='quantity'
            />
            </VictoryChart>
        </div>
    )
}
