import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  // Add Product
  function addToCart(product) {

    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      const updatedCart = cartItems.map((item) =>

        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item

      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }

  }

  // Remove Product
  function removeFromCart(id) {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);

  }

  // Increase Quantity
  function increaseQuantity(id) {

    const updatedCart = cartItems.map((item) =>

      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item

    );

    setCartItems(updatedCart);

  }

  // Decrease Quantity
  function decreaseQuantity(id) {

    const updatedCart = cartItems
      .map((item) =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item

      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);

  }

  // Clear Cart
  function clearCart() {

    setCartItems([]);

  }

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );
}