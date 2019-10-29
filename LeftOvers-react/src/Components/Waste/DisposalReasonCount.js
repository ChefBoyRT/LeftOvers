import React from 'react'
import { VictoryPie } from 'victory'
import './Waste.css'

export default function disposalReasonCount({ data }) {
    return (
        <div className='pie-chart'>
            <h3 className='pie-chart-title'>Count of Disposal Reason</h3>
            <VictoryPie 
                style={{ parent: { maxWidth: "100%" } }}
                height={450}
                width={500}
                data={data}
                x='food_category'
                y='count'
                innerRadius={90}
                padding={80}
                labelPosition="centroid"
            />
        </div>
    )
}
