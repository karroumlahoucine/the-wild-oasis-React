import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handelClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
        console.log("window closed");
      }
    }
    document.addEventListener("click", handelClick, listenCapturing);
    return () => {
      document.removeEventListener("click", handelClick, listenCapturing);
    };
  }, [handler, listenCapturing]);
  return { ref };
}

export default useOutsideClick;
