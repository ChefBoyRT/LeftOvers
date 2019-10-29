import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';

const FoodTable = ({ foods }) => {
    const tableHead = ['Name', 'Expiration (days)', 'Category', 'Quantity', 'Unit']

    const rows = (data) => {
        return data.map((food, index) => {
            let array = []
            array.push(food.food_name, dateDifference(food.expiration_date), food.food_category, food.quantity, food.quantity_unit)
            return <Row key={index} data={array} textStyle={styles.rowText} />
        })
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
        <View>
            <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
            {rows(foods)}
        </View>
    )
}

export default FoodTable

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff' 
    },
    head: { 
        height: 50, 
        backgroundColor: '#rgb(42, 42, 58)',
        marginBottom: 10
    },
    row: {
        borderRightColor: 'black',
        borderRightWidth: 1
    },
    rowText: { 
        textAlign: 'center',
        marginBottom: 10
    },
    headText: { 
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
  });