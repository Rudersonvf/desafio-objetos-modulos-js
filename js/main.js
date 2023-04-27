import Order from './models/order.js'
import * as orderService from './services/order-service.js'


//Para conferir os resultados, mudar apenas o numero do
//"orderInput" no getElementById p/ 1, 2 ou 3 e salvar
const data = document.getElementById("orderInput1").innerHTML.split("\n");
const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]));

console.log(`Pedido código ${order.code}`)
console.log(`Valor total: R$ ${orderService.total(order).toFixed(2)}`)