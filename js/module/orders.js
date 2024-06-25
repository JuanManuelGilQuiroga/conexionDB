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

//5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:**
export const getAllOrderDetailsOfClient101 = async (customerNumber = 101) => {
    const [result] = await connection.query(`
    SELECT orders.*, orderdetails.*, products.*
    FROM orders
    JOIN orderdetails USING(orderNumber)
    JOIN products USING(productCode)
    WHERE orders.customerNumber = ?;`,[customerNumber]);
    return result;
}

//3. **Calcular el total de órdenes realizadas por cada cliente:**
export const getAllOrdersMadeByEveryClient = async () => {
    const [result] = await connection.query(`SELECT customerNumber, COUNT(*) AS quantityOrders FROM orders GROUP BY customerNumber;`);
    return result;
};

//