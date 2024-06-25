import { connection } from "../../db/connection.js";

//4. **Contar la cantidad de oficinas en cada país:**
export const getAllOfficesQuantity = async () => {
    const [result] = await connection.query(`SELECT country, COUNT(*) AS quantityOffices FROM offices GROUP BY country;`);
    return result;
};

//17. **Encontrar el total de ventas realizadas por cada oficina:**
export const getTotalSalesByOffice = async () => {
    const [result] = await connection.query(`
    SELECT off.city, off.country, SUM(od.quantityOrdered * od.priceEach)
    FROM offices off
    INNER JOIN employees e USING(officeCode)
    INNER JOIN customers c ON e.employeeNumber = c.salesRepEmployeeNumber 
    INNER JOIN orders o USING(customerNumber)
    INNER JOIN orderdetails od USING(orderNumber)
    GROUP BY off.city, off.country;
    `);
    return result;
}


