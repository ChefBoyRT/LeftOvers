import React, { Component } from 'react'
// import { VictoryBar, VictoryChart, VictoryTheme } from 'victory'
import Dashboard from './Dashboard';
import './Waste.css'

export default class WasteDashboard extends Component {

    state = {
        disposalReasonCount: [],
        foodCategoryCost: [],
        wasteQuantityTime: []
    }

    componentDidMount(){
        setTimeout(() => {
            this.disposalReasonCount(this.props.data)
            this.foodCategoryCost(this.props.data)    
            this.wasteQuantityTime(this.props.data)
        }, 100);
    }

    disposalReasonCount = (data) => {
        let categories = data.map(data => data.disposal_reason)
        let categories_count = categories.reduce((allCategories, category) => {
            if (category in allCategories) {
              allCategories[category]++
            } else {
                allCategories[category] = 1
            }
            return allCategories
        }, {})
        let arrayData = Object.entries(categories_count)
        let victoryData = arrayData.map(data => ({'food_category': data[0], 'count': data[1]}))
        
        this.setState({disposalReasonCount: victoryData})
    }

    foodCategoryCost = (data) => {
        let newObj = {}
        data.map(d => {
            if (newObj[d.food_category]){
                return newObj[d.food_category] += +d.cost
            } else {
                return newObj[d.food_category] = +d.cost
            }
        })
        let arrayData = Object.entries(newObj)
        let victoryData = arrayData.map(data => ({'food_category': data[0], 'cost': data[1]}))
        this.setState({foodCategoryCost: victoryData}) 
    }

    sortByMonth = (data) => {
        var months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
        let sorted = data.sort(function(a, b){
            return months.indexOf(a.month)
                 - months.indexOf(b.month);
        })
        return sorted
      }

    wasteQuantityTime = (data) => {
        let newObj = {}
        data.map(d => {
            let date = new Date(d.created_at)
            let month = this.convertDate(date.getMonth())
            if(newObj[month]){
                return newObj[month] += +d.quantity
            } else {
                return newObj[month] = +d.quantity
            }
        })
        let arrayData = Object.entries(newObj)
        let unsortedData = arrayData.map(data => ({'month': data[0], 'quantity': data[1]}))
        let sortedData = this.sortByMonth(unsortedData)
        this.setState({wasteQuantityTime: sortedData})
    }

    convertDate = (date) => {
        if(+date === 0){
            return 'January'
        } else if (+date === 1) {
            return 'February'
        } else if (+date === 2) {
            return 'March'
        } else if (+date === 3) {
            return 'April'
        } else if (+date === 4) {
            return 'May'
        } else if (+date === 5) {
            return 'June'
        } else if (+date === 6) {
            return 'July'
        } else if (+date === 7) {
            return 'August'
        } else if (+date === 8) {
            return 'September'
        } else if (+date === 9) {
            return 'October'
        } else if (+date === 10) {
            return 'November'
        } else {
            return 'December'
        }
    }

    render() {
        return (
            <>
                <h1 className='dashboard-title'>Waste Dashboard</h1>
                {this.state.disposalReasonCount && this.state.foodCategoryCost
                ? <Dashboard 
                    disposalReasonCount={this.state.disposalReasonCount}
                    foodCategoryCost={this.state.foodCategoryCost}
                    wasteQuantityTime={this.state.wasteQuantityTime}
                    />
                : null
                }
            </>
        )
    }
}
