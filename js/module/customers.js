import { connection } from "../../db/connection.js";

//5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**
export const getAllCustomersByCountryAndCreditLimit = async()=>{
    let [result] = await connection.query(`SELECT * FROM customers WHERE country='USA' AND creditLimit>50000;`);
    return result;
}

//1. **Obtener el promedio del límite de crédito de todos los clientes:**
export const getAllCustomersAverageCreditLimit = async()=>{
    let [result] = await connection.query(`SELECT AVG(creditLimit) AS averageCreditLimit FROM customers;`);
    return result;
}

//2. **Obtener el promedio del límite de crédito de los clientes por país:**
export const getAllCustomersAverageCreditLimitByCountry = async()=>{
    let [result] = await connection.query(`SELECT country, AVG(creditLimit) AS averageCreditLimit FROM customers GROUP BY country;`);
    return result;
}