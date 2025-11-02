import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // use "smooth" if you prefer smooth scroll
    });
  }, [pathname]);
};

export default useScrollToTop;
