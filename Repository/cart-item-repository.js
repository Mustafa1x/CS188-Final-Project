var uuid = require('uuid');

const cartItems = [
    {
    
        'cartId': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
        'cart_item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f30',
        'itemId': '5581858f-a20e-4ada-9ccf-dd3e2cea0eb3',
        'quantity': 2

    }
    
];

const selectCartItems = () => ({
    rows: cartItems,
    error: new Error(),
    driver: 'postgres'
});

const selectCartItemsByCartItemId = (cartItemId) =>
    cartItems.find((cartItem) => cartItem['cartItemId'] === cartId);

const selectCartItemsByCartId = (cartId) => ({
    rows: cartItems.filter((cartItem) => cartItem['cartId'] === cartItemId)
});

const insertCartItem = (cartItem) => cartItems.push(cartItem);

 const updateCartItem = (updatedItem) => {
     const itemsThatDontMatch = cartItems.filter((cartItem) =>
         cartItem['cart_item_id'] !== updatedItem['cart_item_id']
     );

     cartItems = [
         ...itemsThatDontMatch, updatedItem
     ];
 };

 const deleteCartItemByCartItemId = (cartItemId) => {
     cartItems = cartItems.filter((cartItem) =>
         cartItem['cart_item_id'] !== cartItemId
     );
 };

 module.exports = {
     deleteCartItemByCartItemId,
     insertCartItem,
     selectCartItemsByCartItemId,
     selectCartItems,
     selectCartItemsByCartId,
     updateCartItem
 };