const mysql = require('mysql2')
const credentials = require('../credentials.json')

const connection = mysql.createConnection(credentials)

// const query = `SELECT * FROM Products`

// // connection.query(query, (err, results, fields) => {
// //     if(err) {
// //         console.log(err)
// //     }
// //     console.log(results)
// // })
// // connection.end()

// const getAllProducts = async () => {
//     const query = `SELECT * FROM Products`
//     const [results, fields] = await connection.promise().query(query)
    
//     console.log(results)
//     return results
// }

// getAllProducts()

// connection.end()

const createProduct = async (product) => {
    const insertQuery = `INSERT INTO Products (Description, SKU, UserId)
    VALUES ('${product.description}', '${product.sku}', ${product.userId})
    `
    const [results, fields] = await connection.promise().query(insertQuery)

    console.log(results)
}

createProduct({
    description: 'Farrukhs New Product',
    sku: 'MBPM1P',
    userId: 1
})

const getAllProducts = async () => {
    const query = `SELECT * FROM Products`
    const [results, fields] = await connection.promise().query(query)
    
    console.log(results)
    return results
}

getAllProducts()