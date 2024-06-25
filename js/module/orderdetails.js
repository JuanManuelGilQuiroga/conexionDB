import { connection } from "../../db/connection.js";

//7. **Calcular la cantidad media de productos pedidos en las órdenes:**
export const getAverageOfProductsOrdered = async () => {
    const [result] = await connection.query(`SELECT AVG(quantityOrdered) AS averageQuantityOrdered FROM orderdetails;`);
    return result;
};

//4. **Encontrar la cantidad total de productos pedidos por cada cliente:**
export const getQuantityOfProductsOrderedByAnyClient = async () => {
    const [result] = await connection.query(`
    SELECT 
    customerNumber, 
    SUM(quantityOrdered) AS totalProductsOrdered 
    FROM orderdetails 
    INNER JOIN orders USING(orderNumber) 
    GROUP BY customerNumber;
    `);
    return result;
};

//5. **Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**
export const getTotalSalesByClient = async () => {
    const [result] = await connection.query(`
    SELECT c.customerName, SUM(od.quantityordered * od.priceEach)
    FROM orderdetails od
    INNER JOIN orders o USING(orderNumber)
    INNER JOIN customers c USING(customerNumber)
    GROUP BY c.customerName;
    `);
    return result;
}

//8. **Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:**
export const getAverageSalesByEmployee = async () => {
    const [result] = await connection.query(`
    SELECT e.firstName, AVG(od.quantityordered * od.priceEach) AS salesAverage
    FROM orderdetails  od
    INNER JOIN orders o USING(orderNumber)
    INNER JOIN customers c USING(customerNumber)
    INNER JOIN employees e ON e.employeeNumber = c.salesRepEmployeeNumber 
    GROUP BY e.firstName;
    `);
    return result;
}

//9. **Calcular el total de órdenes gestionadas por cada empleado:**
export const getTotalOrdersByEmployee = async () => {
    const [result] = await connection.query(`
    SELECT e.firstName, COUNT(*)
    FROM orderdetails od
    INNER JOIN orders o USING(orderNumber)
    INNER JOIN customers c USING(customerNumber)
    INNER JOIN employees e ON e.employeeNumber = c.salesRepEmployeeNumber
    GROUP BY e.firstName;
    `);
    return result;
}

//10. **Obtener la cantidad total de productos vendidos por cada línea de productos:**
export const getTotalProductsSoldByProductLine = async () => {
    const [result] = await connection.query(`
    SELECT 
    productLine,
    SUM(quantityOrdered) AS totalOrdered
    FROM orderdetails
    INNER JOIN products USING(productCode)
    GROUP BY productLine;
    `);
    return result;
}

//11. **Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**
export const getAverageOfProductsOrderedByClient = async () => {
    const [result] = await connection.query(`
    SELECT 
    customerNumber,
    AVG(quantityOrdered) AS averageQuantityOrdered
    FROM orderdetails
    INNER JOIN orders USING(orderNumber)
    GROUP BY customerNumber;`);
    return result;
}

//12. **Calcular el total de ventas realizadas en cada país:**
export const getTotalSalesByCountry = async () => {
    const [result] = await connection.query(`
    SELECT c.country, SUM(od.quantityOrdered)
    FROM customers c
    INNER JOIN orders o USING(customerNumber)
    INNER JOIN orderdetails od USING(orderNumber)
    GROUP BY c.country;
    `);
    return result;
}