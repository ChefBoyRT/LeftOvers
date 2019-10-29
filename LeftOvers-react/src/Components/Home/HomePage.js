import React from 'react'
import Footer from '../Footer/Footer'

export default function HomePage({ foods, wastes }) {

    const totalMoneyWasted = (wastesArray) => {
        let wastesObj = {cost: 0}
        wastesArray.map(waste => {
            return wastesObj.cost += +waste.cost
        })
        return wastesObj
    }

    const totalQuantityWasted = (wastesArray) => {
        let wastesObj = {quantity: 0}
        wastesArray.map(waste => {
            if(waste.quantity_unit === 'oz') {
                return wastesObj.quantity += +waste.quantity / 16
            } else {
                return wastesObj.quantity += +waste.quantity
            }
        })
        return wastesObj
    }

    const aboutToExpire = (foodsArray) => {
        let foodsObj = {'low': 0, 'medium': 0, 'high': 0}
        foodsArray.map(food => {
            if(dateDifference(food.expiration_date) < 4) {
                return foodsObj['low'] += 1
            } else if (dateDifference(food.expiration_date) > 3 && dateDifference(food.expiration_date) < 7) {
                return foodsObj['medium'] += 1
            } else {
                return foodsObj['high'] += 1
            }
        }
    )
    return foodsObj
}

    const dateDifference = (expirationDate) => {
        let todaysDate = new Date(Date.now()).toLocaleString().split(', ')[0]
        let splitTodaysDate = todaysDate.split('/')
        let todaysDay = parseInt(splitTodaysDate[1], 10)
        let todaysMonth = parseInt(splitTodaysDate[0], 10)
        let todaysYear = parseInt(splitTodaysDate[2], 0)
        
        let splitExpirationDate = expirationDate.split('-')
        let expirationDay = parseInt(splitExpirationDate[2], 10)
        let expirationMonth = parseInt(splitExpirationDate[1], 10)
        let expirationYear = parseInt(splitExpirationDate[0])
        
        let daysToExpiration = (expirationDay - todaysDay) + ((expirationMonth - todaysMonth) * 30) + ((expirationYear - todaysYear))
        if( daysToExpiration < 0 ) {
            return daysToExpiration * -1
        } else {
            return daysToExpiration
        }
    }

    return (
        <div>
            <div className='home-page-container'>
                <div className='home-page-food-count-container'>
                    <h3 className='home-page-food-count-message'>Items in Fridge</h3>
                    <img className='home-page-food-count-img' src='https://image.flaticon.com/icons/svg/810/810179.svg' alt='fridge' />
                    <h4 className='home-page-food-count'>{foods.length}</h4>
                </div>
                <div className='food-page-expiration-count-container'>
                    <h3 className='home-page-food-count-message'>Items About to Expire</h3>
                    <div>
                        <h3 className='expiration-number low'>{aboutToExpire(foods).low}</h3>
                        <h3 className='expiration-message'> <span>&#60;</span> 3 days</h3>
                    </div>
                    <div>
                        <h3 className='expiration-number medium'>{aboutToExpire(foods).medium}</h3>
                        <h3 className='expiration-message'>between 4 & 7 days</h3>
                    </div>
                    <div>
                        <h3 className='expiration-number high'>{aboutToExpire(foods).high}</h3>
                        <h3 className='expiration-message'> <span>&#62;</span> 7 days</h3>
                    </div>
                </div>
            </div>
            <div className='home-page-waste-cost-quantity-container'>
                <div className='home-page-wasted'>
                    <h4 className='home-page-food-count-message-bottom'>{totalQuantityWasted(wastes).quantity.toFixed(2)} lbs</h4>
                    <h3 className='home-page-food-count-message-bottom'>Total Food Wasted</h3>
                </div>
                <div>
                    <h4 className='home-page-food-count-message-bottom'>${totalMoneyWasted(wastes).cost.toFixed(2)}</h4>
                    <h3 className='home-page-food-count-message-bottom'>Total Cost of Waste</h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}
