const PaymentDetail = require ('../payment/PaymentDetail');

const OrderPayment =`
    type OrderPayment {
        paymentMethod: String
        paymentDetail: PaymentDetail
    }
`;

module.exports.OrderPayment = OrderPayment;