'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import { ShopifyCart } from './types';
import {
  createCart,
  getCart,
  addToCart as addToCartApi,
  updateCart as updateCartApi,
  removeFromCart as removeFromCartApi,
} from './index';

// BRANDED CONSTANTS
const CART_ID_KEY = 'gutsy-bag-id'; // Changed to 'bag' to match 'Your Bag' aesthetic

interface CartContextType {
  cart: ShopifyCart | null;
  isLoading: boolean;
  isOpen: boolean;
  isAdding: boolean; // Added to trigger "floating" button animations
  openCart: () => void;
  closeCart: () => void;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  updateItemQuantity: (lineId: string, variantId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false); // New Gutsy adding state
  const [isOpen, setIsOpen] = useState(false);

  // Initialize the Gutsy Bag
  useEffect(() => {
    async function initializeCart() {
      const cartId = localStorage.getItem(CART_ID_KEY);

      if (cartId) {
        try {
          const existingCart = await getCart(cartId);
          if (existingCart) {
            setCart(existingCart);
            setIsLoading(false);
            return;
          }
        } catch (error) {
          console.error('GUTSY Error: Fetching bag failed', error);
        }
      }

      try {
        const newCart = await createCart();
        localStorage.setItem(CART_ID_KEY, newCart.id);
        setCart(newCart);
      } catch (error) {
        console.error('GUTSY Error: Creating bag failed', error);
      }

      setIsLoading(false);
    }

    initializeCart();
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addToCart = useCallback(
    async (variantId: string, quantity: number = 1) => {
      if (!cart) return;

      setIsAdding(true); // Trigger loading/floating state for Gutsy UI
      try {
        const updatedCart = await addToCartApi(cart.id, [
          { merchandiseId: variantId, quantity },
        ]);
        setCart(updatedCart);
        
        // Brief delay before opening to allow "Add to Bag" animations to complete
        setTimeout(() => {
          setIsOpen(true);
          setIsAdding(false);
        }, 500);

      } catch (error) {
        console.error('GUTSY Error: Could not add to bag', error);
        setIsAdding(false);
      }
    },
    [cart]
  );

  const updateItemQuantity = useCallback(
    async (lineId: string, variantId: string, quantity: number) => {
      if (!cart) return;

      setIsLoading(true);
      try {
        if (quantity === 0) {
          const updatedCart = await removeFromCartApi(cart.id, [lineId]);
          setCart(updatedCart);
        } else {
          const updatedCart = await updateCartApi(cart.id, [
            { id: lineId, merchandiseId: variantId, quantity },
          ]);
          setCart(updatedCart);
        }
      } catch (error) {
        console.error('GUTSY Error: Update failed', error);
      }
      setIsLoading(false);
    },
    [cart]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return;

      setIsLoading(true);
      try {
        const updatedCart = await removeFromCartApi(cart.id, [lineId]);
        setCart(updatedCart);
      } catch (error) {
        console.error('GUTSY Error: Removal failed', error);
      }
      setIsLoading(false);
    },
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      isLoading,
      isAdding,
      isOpen,
      openCart,
      closeCart,
      addToCart,
      updateItemQuantity,
      removeItem,
    }),
    [cart, isLoading, isAdding, isOpen, openCart, closeCart, addToCart, updateItemQuantity, removeItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('GUTSY Hook Error: useCart must be used within a CartProvider');
  }
  return context;
}
