import {
    getAllCustomersByCountryAndCreditLimit,
    getAllCustomersAverageCreditLimit,
    getAllCustomersAverageCreditLimitByCountry,
    getAverageProductsOrderedByCustomer
} from "./module/customers.js"
import {
    getAllEmployeesInSanFrancisco,
    getAllEmployeesThatReport1143,
    getQuantityOfEmployees,
    getQuantityOfEmployeesByJobTitle,
    getQuantityOfProductsSoldByEachSalesRep,
    getAverageCreditLimitByEachSalesRep
} from "./module/employees.js"
import {
    getAllOfficesQuantity,
    getTotalSalesByOffice
} from "./module/offices.js"
import {
    getAverageOfProductsOrdered,
    getQuantityOfProductsOrderedByAnyClient,
    getTotalSalesByClient,
    getAverageSalesByEmployee,
    getTotalOrdersByEmployee,
    getTotalProductsSoldByProductLine,
    getAverageOfProductsOrderedByClient,
    getTotalSalesByCountry
} from "./module/orderdetails.js"
import {
    getAllOrdersShipped,
    getAllOrdersByFrance,
    getAllOrderDetailsOfClient101,
    getAllOrdersMadeByEveryClient
} from "./module/orders.js"
import {
    getAllOrderdetailsByCustomers,
    getTotalPaymentByClients,
    getTotalPayments,
    getTotalQuantityOfPayments,
    getTotalQuantityOfPaymentsByCountries,
    getTotalPaymentReceivedByEachSalesRep,
    getTotalPaymentByYear
} from "./module/payments.js"
import { 
    getAllProductsDescription,
    getAllProductsWithDescription,
    getAllProductsStock,
    getAllProductsAverageBuyPrice,
    getAllProductsTotalPrice,
    getAllProductsAverageMSRP,
    getAllProductsAverageStockByLine,
    getAllProductsAverageBuyPriceByLine
} from "./module/product.js";


console.log(await getAllCustomersByCountryAndCreditLimit());