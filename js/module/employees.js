import { connection } from "../../db/connection.js";

//2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**
export const getAllEmployeesInSanFrancisco = async() => {
    const [result] = await connection.query(`SELECT * FROM employees WHERE officeCode=1;`);
    return result;
}

//2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**
export const getAllEmployeesThatReport1143 = async() => {
    const [result] = await connection.query(`SELECT CONCAT(firstName,lastName) AS 'name', email FROM employees WHERE reportsTo=1143;`);
    return result;
}

//6. **Obtener la cantidad total de empleados:**
export const getQuantityOfEmployees = async() => {
    const [result] = await connection.query(`SELECT COUNT(*) AS totalEmployees FROM employees;`);
    return result;
}

//10. **Contar la cantidad de empleados por título de trabajo:**
export const getQuantityOfEmployeesByJobTitle = async() => {
    const [result] = await connection.query(`SELECT jobTitle, COUNT(*) AS quantityEmployees FROM employees GROUP BY jobTitle;`);
    return result;
}

//14. **Encontrar la cantidad total de productos vendidos por cada vendedor:**
export const getQuantityOfProductsSoldByEachSalesRep = async() => {
    const [result] = await connection.query(`
    SELECT e.employeeNumber, e.firstName, SUM(od.quantityOrdered)
    FROM employees e
    INNER JOIN customers c ON e.employeeNumber = c.salesRepEmployeeNumber 
    INNER JOIN orders o USING(customerNumber)
    INNER JOIN orderdetails od USING(orderNumber)
    GROUP BY e.employeeNumber, e.firstName;
    `);
    return result;
}

//16. **Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**
export const getAverageCreditLimitByEachSalesRep = async() => {
    const [result] = await connection.query(`
    SELECT e.employeeNumber,  e.firstName, AVG(c.creditLimit) 
    FROM employees e
    INNER JOIN customers c ON e.employeeNumber = c.salesRepEmployeeNumber 
    GROUP BY e.employeeNumber, e.firstName;
    `);
    return result;
}

