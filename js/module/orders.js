import { connection } from "../../db/connection.js";

//3. **Listar todas las órdenes que tienen un estado de 'Enviado':**
export const getAllOrdersShipped = async () => {
    const [result] = await connection.query(`SELECT * FROM orders WHERE status='Shipped';`);
    return result;
};

//3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**
export const getAllOrdersByFrance = async () => {
    const [result] = await connection.query(`SELECT * FROM orders INNER JOIN customers USING(customerNumber) WHERE country='France';`);
    return result;
};

//3. **Calcular el total de órdenes realizadas por cada cliente:**
export const getAllOrdersMadeByEveryClient = async () => {
    const [result] = await connection.query(`SELECT customerNumber, COUNT(*) AS quantityOrders FROM orders GROUP BY customerNumber;`);
    return result;
};

//