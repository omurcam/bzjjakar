import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  smooth?: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ smooth = true }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element after a short delay
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: smooth ? 'smooth' : 'instant',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Otherwise, scroll to the top
      if (smooth) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        // Instant scroll for better performance on slower devices
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash, smooth]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;