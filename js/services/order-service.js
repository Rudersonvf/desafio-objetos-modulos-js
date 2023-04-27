import * as shipingService from './shipping-service.js'

export function total(order) {
    const result = order.basic - order.basic * (order.discount / 100);
    return result + shipingService.shipment(order);
}