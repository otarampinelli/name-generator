const names = require('./names.json')

const { firstnames, lastnames } = names.data

module.exports = function nameGenerator(totalOfNames) {
    const listOfGeneratedNames = []
    let initializer = 0
    while (initializer <= totalOfNames) {
        let firstname = firstnames[Number((Math.random() * 9).toFixed())]
        let lastname = lastnames[Number((Math.random() * 9).toFixed())]
        listOfGeneratedNames.push(`${firstname} ${lastname}`)
        initializer++
    }

    return listOfGeneratedNames
}