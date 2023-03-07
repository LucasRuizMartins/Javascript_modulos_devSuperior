import order from "./models/order.js";
import * as orderService from './services/orderService.js' 
const data = document.getElementById("grossSalaryInput").innerHTML.split("\n");

const order1 = new order(data[0], Number(data[1]),  Number(data[2]/100))
const services = orderService.total(order1.basic, order1.discount);

console.log(`PEDIDO CODIGO ${order1.code}`);
console.log(`VALOR TOTAL = ${services.toFixed(2)}`);
