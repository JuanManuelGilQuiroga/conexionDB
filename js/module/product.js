import { connection } from "../../db/connection.js";

//1. **Recuperar todas las líneas de productos con sus descripciones:**
export const getAllProductsDescription = async()=>{
    let [result] = await connection.query(`SELECT productLine, productDescription FROM products;`);
    return result;
}

//1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**
export const getAllProductsWithDescription = async()=>{
    let [result] = await connection.query(
    `SELECT t1.*, t2.textDescription FROM products t1
    INNER JOIN productlines t2
    ON t1.productLine = t2.productLine;`
    );
    return result;
}

//2. **Calcular el total de productos en stock:**
export const getAllProductsStock = async()=>{
    let [result] = await connection.query(`SELECT COUNT(*) AS quantityInStock FROM products WHERE quantityInStock>0;`);
    return result;
}

//3. **Encontrar el precio medio de compra de todos los productos:**
export const getAllProductsAverageBuyPrice = async()=>{
    let [result] = await connection.query(`SELECT AVG(buyPrice) AS averageBuyPrice FROM products;`);
    return result;
}

//8. **Encontrar el precio total de todos los productos:**
export const getAllProductsTotalPrice = async()=>{
    let [result] = await connection.query(`SELECT SUM(buyPrice) AS totalBuyPrice FROM products;`);
    return result;
}

//9. **Calcular el promedio del precio sugerido (MSRP) de los productos:**
export const getAllProductsAverageMSRP = async()=>{
    let [result] = await connection.query(`SELECT AVG(MSRP) AS averageMSRP FROM products;`);
    return result;
}

//6. **Obtener el promedio de la cantidad de productos en stock por línea de productos:**
export const getAllProductsAverageStockByLine = async()=>{
    let [result] = await connection.query(`SELECT productLine, AVG(quantityInStock) AS averageQuantityInStock FROM products GROUP BY productLine;`);
    return result;
}

//13. **Obtener el promedio del precio de compra de los productos por línea de productos:**
export const getAllProductsAverageBuyPriceByLine = async()=>{
    let [result] = await connection.query(`SELECT productLine, AVG(buyPrice) AS averageBuyPrice FROM products GROUP BY productLine;`);
    return result;
}

//20. **Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:**
export const getAllProductsAveragePriceEachByLine = async()=>{
    let [result] = await connection.query(`
    SELECT p.productLine, AVG(od.priceEach)
    FROM products p
    INNER JOIN orderdetails od USING(productCode)
    GROUP BY p.productLine;
    `);
    return result;
}