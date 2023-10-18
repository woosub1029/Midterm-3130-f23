
function addToCart(productName, price, image, sizes) {
    var cartItem = {
        name: productName,
        price: price,
        image: image,
        sizes: sizes,
    };


    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product added to cart');
}



        // 로컬 스토리지에서 장바구니 데이터를 가져와서 HTML로 렌더링
        function renderCart() {
            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

            var cartItemsHtml = '';
            var total = 0;

            for (var i = 0; i < cartItems.length; i++) {
                var item = cartItems[i];
                var subtotal = item.price;
                total += subtotal;

                cartItemsHtml += `
                    <tr>
                        <td>${item.name}</td>
                        <td>$${item.price}</td>
                        <td>1</td>
                        <td>$${subtotal}</td>
                        <td><button onclick="removeItem(${i})">Remove</button></td>
                    </tr>
                `;
            }

            document.getElementById('cart-items').innerHTML = cartItemsHtml;
            document.querySelector('.total-price p').textContent = `Total Price: $${total}`;
        }

        // 장바구니에서 특정 항목을 제거하는 함수
        function removeItem(index) {
            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            renderCart();
        }

        // 페이지가 로드될 때 장바구니 데이터를 렌더링
        renderCart();




        function processOrder() {
            var deliveryAddress = document.getElementById('delivery-address').value;
            var creditCard = document.getElementById('credit-card').value;
            var deliveryOption = document.getElementById('delivery-option').value;

            document.getElementById('display-address').textContent = 'Delivery Address: ' + deliveryAddress;
            document.getElementById('display-credit-card').textContent = 'Credit Card: ' + creditCard;
            document.getElementById('display-delivery-option').textContent = 'Delivery Option: ' + deliveryOption;

            var product1Price = 100; 
            var product2Price = 120; 
            var product3Price = 90; 

            var totalPrice = product1Price + product2Price+ product3Price; 

            document.getElementById('display-total-price').textContent = 'Total Price: $' + totalPrice.toFixed(2);
        }

        // order.html에서 주문 정보 가져오기
var deliveryAddress = document.getElementById('delivery-address').value;
var creditCard = document.getElementById('credit-card').value;
var deliveryOption = document.getElementById('shipping-option').value;

// order_confirmation.html 페이지에 주문 정보 출력
document.getElementById('display-address').textContent = 'Delivery Address: ' + deliveryAddress;
document.getElementById('display-credit-card').textContent = 'Credit Card: ' + creditCard;
document.getElementById('display-delivery-option').textContent = 'Delivery Option: ' + deliveryOption;
