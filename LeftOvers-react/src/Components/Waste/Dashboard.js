import React from 'react'
import DisposalReasonCount from './DisposalReasonCount'
import FoodCategoryCost from './FoodCategoryCost'
import WasteQuantityTime from './WasteQuantityTime'

export default function Dashboard({ disposalReasonCount, foodCategoryCost, wasteQuantityTime }) {
    
    return (
        <div className='dashboard' style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-evenly' }}>
            <FoodCategoryCost data={foodCategoryCost}/>
            <DisposalReasonCount data={disposalReasonCount}/>
            <WasteQuantityTime data={wasteQuantityTime}/>
        </div>
    )
}
