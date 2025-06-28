export class CreatePaymentIntent {
    secretKey: string; // Sacado de stripe
    amount?: number; // Cantidad del pago 
    currency?: string; 
    customer_id?: string; 
}
