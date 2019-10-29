<p align="center">
  <img width="600" height="400" src="https://media.giphy.com/media/lRk6XwfgYTRHtZfZsj/giphy.gif">
</p>

# Leftovers
> A personal food waste tracking app.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General info
Leftovers is a simple web application that helps users monitor and track food waste. Enter the ingredient name,
expiration date, quantity, and price. Leftovers will display the information on an easy to read card that calculates the 
amount of time in days until the expiration date. The card dynamically updates from green, yellow, to red as the ingredient 
approaches its expiration date to provide visual cues for users. If food will not be used before expiration, convert the food to food waste by filling out the form. Then, navigate to the waste dashboard to view your waste habits over time. To prevent food from turning to waste, check out the find recipes tab to convert your current digital fridge into declicious recipes.

## Technologies
* React
* React Native
* Victory Charts
* Recipe API
* HTML5
* CSS
* Javascript
* Ruby - version 2.6.1
* ActiveRecord - version 5.2
* PostgreSQL - version 11

## Code Examples
```javascript
function dateDifference(expirationDate) {
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
    daysToExpiration * -1

    return daysToExpiration
}
```

## Features
* View food waste cards.
* Create food waste cards.
* Update food waste cards.
* View food waste on waste dashboard.
* Find recipes for food currently stocked in digital fridge.

To-do list:
* Refactor “code smell”

## Status
Project is: finished with option to expand functionality and DRY out code.

## Inspiration
The inspiration for Leftovers comes from a personal goal to reduce my food waste footprint. I believe the first step to
reducing waste is to understand one's contribution to the problem. Providing users with data and a simple to use tracker
will help create awareness and empower users with a personal call to action.

## Contact
[Taylor Stein](www.linkedin.com/in/taylor-stein)

Feel free to contact me with any questions or suggestions for improvement!

## License
[Click to view](https://github.com/ChefBoyRT/leftovers/blob/master/LICENSE)
