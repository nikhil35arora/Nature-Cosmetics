import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type WishlistContextType = {
  items: string[];
  toggle: (id: string) => void;
  isInWishlist: (id: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType>({
  items: [],
  toggle: () => {},
  isInWishlist: () => false,
});

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('wishlist') || '[]');
    } catch {
      return [];
    }
  });

  const toggle = useCallback((id: string) => {
    setItems((prev) => {
      const next = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      localStorage.setItem('wishlist', JSON.stringify(next));
      return next;
    });
  }, []);

  const isInWishlist = useCallback((id: string) => items.includes(id), [items]);

  return (
    <WishlistContext.Provider value={{ items, toggle, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
