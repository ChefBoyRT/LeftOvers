import React, { Component } from 'react'
import EditFoodForm from './EditFoodForm'
import CreateWasteForm from '../Waste/CreateWasteForm'

export default class FoodCard extends Component {
    state = {
        foodCard: true,
        editForm: false,
        wasteForm: false
    }

        dateDifference = (expirationDate) => {
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
    
    toggleEditForm = () => {
        this.setState({
            editForm: !this.state.editForm,
            foodCard: !this.state.foodCard
        })
    }

    toggleWasteForm = () => {
        this.setState({
            wasteForm: !this.state.wasteForm,
            foodCard: !this.state.foodCard
        })
    }

    toggleFoodCard = () => {
        this.setState({
            foodCard: !this.state.foodCard
        })
    }

    dynamicHeaderColor = (date) => {
        const days = this.dateDifference(date)
        if(days < 4){
            return 'header-red'
        } else if (days > 3 && days < 7){
            return 'header-yellow'
        } else {
            return 'header-green'
        }
    }

    render() {
        const { food, deleteFood, updateFood, addWaste } = this.props
        return (
            <div className='food-card'>
                {this.state.wasteForm
                ? <CreateWasteForm food={food} deleteFood={deleteFood} toggleWasteForm={this.toggleWasteForm} toggleFoodCard={this.toggleFoodCard} addWaste={addWaste} />
                : null
                }
                {this.state.editForm 
                ? <EditFoodForm food={food} toggleEditForm={this.toggleEditForm} updateFood={updateFood}/> 
                : null
                }
                {this.state.foodCard
                    ? <div>
                        <div className='food-card-header'>
                            <h3 className={`food-card-title ${this.dynamicHeaderColor(food.expiration_date)}`}>{food.food_name}</h3>
                        </div>
                        <img className='food-card-delete-button' onClick={() => deleteFood(food.id)} src='https://image.flaticon.com/icons/svg/59/59836.svg' alt='delete button' />
                        <p className='food-card-expiration-date'>{this.dateDifference(food.expiration_date)} {this.dateDifference(food.expiration_date) > 1 ? 'days' : 'day'} to expiration</p>
                        <p className='food-card-quantity'>Quantity: {food.quantity} {food.quantity_unit}</p>
                        <img className='food-card-edit-button' onClick={() => this.toggleEditForm()} src='https://image.flaticon.com/icons/svg/1159/1159633.svg' alt='update button' />
                        <img className='food-card-waste-button' onClick={() => this.toggleWasteForm()} src='https://image.flaticon.com/icons/svg/149/149343.svg' alt='waste button' />
                    </div>
                    : null
                }
            </div>
        )
    }
}
