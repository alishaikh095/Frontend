"use client";
import React, { useContext } from 'react';
import styles from './page.module.css'; // Adjust path as needed

const CartContext = React.createContext({
    cartItems: [],
    removeFromCart: (id) => {},
});

function CartItem({ item, onRemove }) {
    return (
      
            <div className={styles.itemContainer}>
                <img src={item.image} alt={item.name} className={styles.image} />
                <div className={styles.details}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className={styles.footer}>
                        <span className={styles.price}>${item.price.toFixed(2)}</span>
                        <button onClick={() => onRemove(item.id)} className={styles.removeBtn}>
                            Remove from Cart
                        </button>
                    </div>
                </div>
            </div>
      
    );
}

export default function CartPage() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className={styles.page}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <CartItem key={item.id} item={item} onRemove={removeFromCart} />
                ))
            )}
        </div>
    );
}
