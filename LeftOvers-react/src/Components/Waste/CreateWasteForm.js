import React, { Component } from 'react'
import './Waste.css'

export default class CreateWasteForm extends Component {
    state = {
        id: this.props.food.id,
        food_name: this.props.food.food_name,
        quantity: this.props.food.quantity,
        quantity_unit: this.props.food.quantity_unit,
        food_category: this.props.food.food_category,
        disposal_method: '',
        disposal_reason: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { addWaste, toggleFoodCard, toggleWasteForm, deleteFood } = this.props
        addWaste(this.state)
        deleteFood(this.state.id)
        toggleFoodCard()
        toggleWasteForm()
        this.setState({
            food_name: '',
            quantity: '',
            quantity_unit: null,
            value: '',
            food_category: null,
            disposal_method: null,
            disposal_reason: null
        })
    }

    render() {
        const { quantity, quantity_unit, disposal_method, disposal_reason } = this.state
        return (
                <div>
                <form onSubmit={this.handleSubmit} className='new-waste-form'>
                    <h3>Add Waste</h3>
                    <div className='waste-form-content'>
                        <label>Quantity:</label>
                        <input className='waste-form-quantity-input' type="number" name="quantity" min="0" step="0.1" value={quantity} onChange={this.handleChange} />
                        
                        <select name="quantity_unit" value={quantity_unit} onChange={this.handleChange}>
                                <option value="">unit</option>
                                <option value="lbs">lbs</option>
                                <option value="oz">oz</option>
                                <option value="count">count</option>
                        </select>

                        <select name="disposal_method" value={disposal_method} onChange={this.handleChange} >
                                <option value="">Disposal Method</option>
                                <option value="composte">Composte</option>
                                <option value="donated">Donated</option>
                                <option value="trash">Trash</option>
                        </select>

                        <select name="disposal_reason" value={disposal_reason} onChange={this.handleChange} >
                                <option value="">Disposal Reason</option>
                                <option value="expired">Expired</option>
                                <option value="over produced">Over Produced</option>
                                <option value="spoiled">Spoiled</option>
                        </select>
                    </div>

                    <input className='submit-waste-form-button' type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
