// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Helper: calculate total price including features
  const calculateTotalPrice = (item) => {
    let total = item.price * item.quantity;
    if (item.features && item.featuresPrice) {
      if (item.features.includes("eggless"))
        total += item.featuresPrice.eggless * item.quantity;
      if (item.features.includes("shape"))
        total += item.featuresPrice.shape * item.quantity;
      if (item.features.includes("fondant"))
        total += item.featuresPrice.fondant * item.quantity;
    }
    return parseFloat(total.toFixed(2));
  };

  // Add to cart
  const addToCart = (newItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.flavour === newItem.flavour
      );

      const totalPrice = calculateTotalPrice(newItem);

      if (existingIndex !== -1) {
        const updated = [...prev];
        const updatedQuantity =
          updated[existingIndex].quantity + newItem.quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updatedQuantity,
          totalPrice: calculateTotalPrice({
            ...updated[existingIndex],
            quantity: updatedQuantity,
          }),
        };
        return updated;
      }

      return [...prev, { ...newItem, totalPrice }];
    });
  };

  // Update quantity
  // const updateQuantity = (productId, flavour, newQuantity) => {
  //   setCartItems((prev) =>
  //     prev.map((item) => {
  //       if (item.productId === productId && item.flavour === flavour) {
  //         const qty = newQuantity > 0 ? newQuantity : 0.5;
  //         return {
  //           ...item,
  //           quantity: qty,
  //           totalPrice: calculateTotalPrice({ ...item, quantity: qty }),
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };

  const updateQuantity = (productId, flavour, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.productId === productId && item.flavour === flavour) {
          // recalc totalPrice for the item
          const perKg = Number(item.price) || 0;
          const qty = newQty;
          const egglessAdd = item.features?.includes("eggless")
            ? (Number(item.featuresPrice?.eggless) || 0) * qty
            : 0;
          const shapeAdd = item.features?.includes("shape")
            ? (Number(item.featuresPrice?.shape) || 0) * qty
            : 0;
          const fondantAdd = item.features?.includes("fondant")
            ? Number(item.featuresPrice?.fondant) || 0
            : 0;

          return {
            ...item,
            quantity: newQty,
            totalPrice: perKg * qty + egglessAdd + shapeAdd + fondantAdd,
          };
        }
        return item;
      })
    );
  };

  // Remove item
  const removeFromCart = (productId, flavour) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.flavour === flavour)
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
