

## Parte 1/2



### Consultas de una sola tabla

1. **Recuperar todas las líneas de productos con sus descripciones:**

   ```sql
   
   ```

2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**

   ```sql
   SELECT * FROM employees WHERE officeCode=1;
   ```

3. **Listar todas las órdenes que tienen un estado de 'Enviado':**

   ```sql
   SELECT * FROM employees WHERE officeCode=1;
   ```

4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**

   ```sql
    SELECT * FROM payments WHERE customerNumber=103;
   ```

5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**

   ```sql
   SELECT * FROM customers WHERE country='USA' AND creditLimit>50000;
   ```

### Consultas de múltiples tablas

1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**

   ```sql
    SELECT t1.*, t2.textDescription FROM products t1
    INNER JOIN productlines t2
    ON t1.productLine = t2.productLine;
   ```

2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**

   ```sql
   SELECT CONCAT(firstName,lastName) AS 'name', email FROM employees WHERE reportsTo=1143;
   ```

3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**

   ```sql
   SELECT * FROM orders INNER JOIN customers USING(customerNumber) WHERE country='France';
   ```

4. **Listar el monto total de los pagos recibidos de cada cliente:**

   ```sql
   SELECT customerNumber, SUM(amount) FROM payments GROUP BY customerNumber;
   ```

5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:**

   ```sql
   
   ```



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



## Parte 2/2

### Consultas de una sola tabla

1. **Obtener el promedio del límite de crédito de todos los clientes:**

   ```
   SELECT AVG(creditLimit) AS averageCreditLimit FROM customers;
   ```

2. **Calcular el total de productos en stock:**

   ```
   SELECT COUNT(*) AS quantityInStock FROM products WHERE quantityInStock>0;
   ```

3. **Encontrar el precio medio de compra de todos los productos:**

   ```
   SELECT AVG(buyPrice) AS averageBuyPrice FROM products;
   ```

4. **Contar la cantidad de oficinas en cada país:**

   ```
   SELECT country, COUNT(*) AS quantityOffices FROM offices GROUP BY country;
   ```

5. **Calcular el total de pagos recibidos:**

   ```
   SELECT SUM(amount) AS totalAmount FROM payments;
   ```

6. **Obtener la cantidad total de empleados:**

   ```
   SELECT COUNT(*) AS totalEmployees FROM employees;
   ```

7. **Calcular la cantidad media de productos pedidos en las órdenes:**

   ```
   SELECT AVG(quantityOrdered) AS averageQuantityOrdered FROM orderdetails;
   ```

8. **Encontrar el precio total de todos los productos:**

   ```
   SELECT SUM(buyPrice) AS totalBuyPrice FROM products;
   ```

9. **Calcular el promedio del precio sugerido (MSRP) de los productos:**

   ```
   SELECT AVG(MSRP) AS averageMSRP FROM products;
   ```

10. **Contar la cantidad de empleados por título de trabajo:**

```
SELECT jobTitle, COUNT(*) AS quantityEmployees FROM employees GROUP BY jobTitle;
```

### Consultas de múltiples tablas

1. **Calcular el total de pagos recibidos por cada cliente:**

   ```
   SELECT customerNumber, COUNT(*) AS payments FROM payments GROUP BY customerNumber;
   ```

2. **Obtener el promedio del límite de crédito de los clientes por país:**

   ```
   SELECT country, AVG(creditLimit) AS averageCreditLimit FROM customers GROUP BY country;
   ```

3. **Calcular el total de órdenes realizadas por cada cliente:**

   ```
   SELECT customerNumber, COUNT(*) AS quantityOrders FROM orders GROUP BY customerNumber;
   ```

4. **Encontrar la cantidad total de productos pedidos por cada cliente:**

   ```
   SELECT 
   customerNumber, 
   SUM(quantityOrdered) AS totalProductsOrdered 
   FROM orderdetails 
   INNER JOIN orders USING(orderNumber) 
   GROUP BY customerNumber;
   ```

5. **Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**

   ```
   
   ```

6. **Obtener el promedio de la cantidad de productos en stock por línea de productos:**

   ```
   SELECT productLine, AVG(quantityInStock) AS averageQuantityInStock FROM products GROUP BY productLine;
   ```

7. **Calcular el total de pagos recibidos por cada país:**

   ```
   SELECT
   country,
   COUNT(*) AS receivedPayments
   FROM payments
   INNER JOIN customers USING(customerNumber)
   GROUP BY country;
   ```

8. **Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:**

   ```
   
   ```

9. **Calcular el total de órdenes gestionadas por cada empleado:**

   ```
   
   ```

10. **Obtener la cantidad total de productos vendidos por cada línea de productos:**

    ```
    SELECT 
    productLine,
    SUM(quantityOrdered) AS totalOrdered
    FROM orderdetails
    INNER JOIN products USING(productCode)
    GROUP BY productLine;
    ```

11. **Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**

    ```
    SELECT 
    customerNumber,
    AVG(quantityOrdered) AS averageQuantityOrdered
    FROM orderdetails
    INNER JOIN orders USING(orderNumber)
    GROUP BY customerNumber;
    ```

12. **Calcular el total de ventas realizadas en cada país:**

    ```
    
    ```

13. **Obtener el promedio del precio de compra de los productos por línea de productos:**

    ```
    SELECT productLine, AVG(buyPrice) AS averageBuyPrice FROM products GROUP BY productLine;
    ```

14. **Encontrar la cantidad total de productos vendidos por cada vendedor:**

    ```
    
    ```

15. **Calcular el total de pagos recibidos por cada vendedor:**

    ```
    
    ```

16. **Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**

    ```
    
    ```

17. **Encontrar el total de ventas realizadas por cada oficina:**

    ```
    
    ```

18. **Calcular la cantidad media de productos pedidos por cada cliente:**

    ```
    
    ```

19. **Obtener el total de pagos realizados en cada año:**

    ```
    
    ```

20. **Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:**

    ```
    
    ```