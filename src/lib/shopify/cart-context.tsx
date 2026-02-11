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

const CART_ID_KEY = 'gutsy-cart-id';

interface CartContextType {
  cart: ShopifyCart | null;
  isLoading: boolean;
  isOpen: boolean;
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
  const [isOpen, setIsOpen] = useState(false);

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
          console.error('Error fetching cart:', error);
        }
      }

      try {
        const newCart = await createCart();
        localStorage.setItem(CART_ID_KEY, newCart.id);
        setCart(newCart);
      } catch (error) {
        console.error('Error creating cart:', error);
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

      setIsLoading(true);
      try {
        const updatedCart = await addToCartApi(cart.id, [
          { merchandiseId: variantId, quantity },
        ]);
        setCart(updatedCart);
        setIsOpen(true);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
      setIsLoading(false);
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
        console.error('Error updating cart:', error);
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
        console.error('Error removing from cart:', error);
      }
      setIsLoading(false);
    },
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      isLoading,
      isOpen,
      openCart,
      closeCart,
      addToCart,
      updateItemQuantity,
      removeItem,
    }),
    [cart, isLoading, isOpen, openCart, closeCart, addToCart, updateItemQuantity, removeItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
