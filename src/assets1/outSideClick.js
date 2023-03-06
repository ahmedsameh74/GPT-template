import { useState, useRef, useEffect, useCallback } from "react";

export default function useClickOutside(init) {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);

    const closeOpenMenus = useCallback(
      (e) => {
        if (ref.current && open && !ref.current.contains(e.target)) {
          setOpen(false);
        }
      },
      [open]
    );

    useEffect(() => {
      document.addEventListener("mousedown", closeOpenMenus);
      return () => {
        document.removeEventListener("mousedown", closeOpenMenus);
      };
    }, [open]);

    




  return { ref, open, setOpen, refs};
}
