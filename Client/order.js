$(document).ready(function(){
    $('.header').height($(window).height());

    const urlParams = new URLSearchParams(window.location.search);
    const orderID = urlParams.get('orderID');
        var url = "http://localhost:8081/orderservice/orders/" + orderID;
        axios.get(url)
        .then(response =>{
            document.getElementById("thanks").innerHTML = "Order received. Your order number is " + response.data.Order.orderID + ".";
            document.getElementById("customerName").innerHTML = "Ship to: " + response.data.Order.customer.firstName + " " + response.data.Order.customer.lastName;
            document.getElementById("productName").innerHTML = "Product: " + response.data.Order.product.productName;
            document.getElementById("address").innerHTML = "Shipment address: " + response.data.Order.shipmentAddress.streetAddress + " " + response.data.Order.shipmentAddress.unitNumber + ", " + response.data.Order.shipmentAddress.city + " " + response.data.Order.shipmentAddress.state + " " + response.data.Order.shipmentAddress.zipCode;
            document.getElementById("invoice").innerHTML = "Order invoice: " + response.data.Order.product.productCost + " was charged to " + response.data.Order.payment.cardNumber;
        })
        .catch(error =>{
            console.log(error);
        }); 

});