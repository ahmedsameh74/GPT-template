import { useState, useRef, useEffect } from "react";

export default function useClickOutside(init) {
    const ref = useRef(null);
    const refs = useRef(null);
    const [open, setOpen] = useState(init);

    const closeOpenMenus = (e) => {
      console.log('first', ref)
        // console.log(!refs.current?.contains(e.target));
        console.log(
          "second",
          ref.current,
          e.target,
          !ref.current.contains(e.target),
          open
        );
        // if()
        // if (!refs.current?.contains(e.target)) {
        //   console.log("first");
        //   return
        //  }
         if (ref.current && !ref.current?.contains(e.target) && open ) {
          // console.log("second");

          setOpen(false);
        }
    }

    useEffect(() => {
      document.addEventListener("click", closeOpenMenus);
        return () => {
            document.removeEventListener("click", closeOpenMenus);
        }
    }, [ref, open, closeOpenMenus]);




  return { ref, open, setOpen, refs};
}
