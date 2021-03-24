import { useEffect, useContext } from "react";
import{ CartContext } from "../contexts/CartContext";


export default function useOutsideAlerter(ref) {
    const { setAddedToCart } = useContext(CartContext)

    useEffect(() => {
        //Remove AddedToCartBox if you click outside of it
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setAddedToCart(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}