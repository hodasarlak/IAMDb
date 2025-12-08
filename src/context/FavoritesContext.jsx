import { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const a = () => {
      const savedFavorites = JSON.parse(window.localStorage.getItem('movieFavorites')) || [];
      setFavorites(savedFavorites);
    }
    a()
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    window.localStorage.setItem('movieFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movieId) => {
    setFavorites(prev => [...prev, movieId]);
  };

  const removeFavorite = (movieId) => {
    setFavorites(prev => prev.filter(id => id !== movieId));
  };

  const toggleFavorite = (movieId) => {
    if (favorites.includes(movieId)) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }
  };

  const isFavorite = (movieId) => {
    return favorites.includes(movieId);
  };

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      addFavorite, 
      removeFavorite, 
      toggleFavorite, 
      isFavorite 
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};