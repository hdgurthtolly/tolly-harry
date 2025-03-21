import { useEffect } from 'react';

/**
 * Custom hook that scrolls to the top of the page when a dependency changes
 * @param {any} dependency - The value to watch for changes
 */
const useScrollToTop = (dependency) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [dependency]);
};

export default useScrollToTop; 