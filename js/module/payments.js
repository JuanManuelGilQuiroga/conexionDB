import { connection } from "../../db/connection.js";

//
export const getAllOrderdetailsByCustomers = async({status=["Resolved", "Shipped"],id=103} = arg)=>{
    let [result] = await connection.execute(`
    SELECT d.*
    FROM customers c
    INNER JOIN orders o ON c.customerNumber = o.customerNumber
    INNER JOIN orderdetails d ON o.orderNumber = d.orderNumber
    WHERE o.status IN (${status.map((val,i) => (i+1 == status.length) ? `"${val}"` : `"${val}",`).join("")}) and c.customerNumber = ?
    `,[id]);
    return result;
}

//4. **Listar el monto total de los pagos recibidos de cada cliente:**
export const getTotalPaymentByClients = async()=>{
    let [result] = await connection.query(`SELECT customerNumber, SUM(amount) FROM payments GROUP BY customerNumber;`);
    return result;
}

//5. **Calcular el total de pagos recibidos:**
export const getTotalPayments = async()=>{
    let [result] = await connection.query(`SELECT SUM(amount) AS totalAmount FROM payments;`);
    return result;
}

//1. **Calcular el total de pagos recibidos por cada cliente:**
export const getTotalQuantityOfPayments = async()=>{
    let [result] = await connection.query(`SELECT customerNumber, COUNT(*) AS payments FROM payments GROUP BY customerNumber;`);
    return result;
}

//7. **Calcular el total de pagos recibidos por cada país:**
export const getTotalQuantityOfPaymentsByCountries = async()=>{
    let [result] = await connection.query(
    `SELECT
    country,
    COUNT(*) AS receivedPayments
    FROM payments
    INNER JOIN customers USING(customerNumber)
    GROUP BY country;`);
    return result;
}