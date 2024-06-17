import { connection } from "../../db/connection.js";

export const getAllProductsDescription = async()=>{
    let [result] = await connection.query(`SELECT productLine, productDescription FROM products;`);
    return result;
}