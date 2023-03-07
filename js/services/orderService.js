import * as shippingService from './shippingService.js'; 

export function total (basic, discount) {
 
 return basic - (basic * discount) + shippingService.shipment(basic)  
}