import { useEffect, useContext } from "react";
import{ CartContext } from "../contexts/CartContext";

export default function useOutsideAlerter(ref) {
    const { setAddedToCart, setErrorLogin, errorLogin } = useContext(CartContext)

    useEffect(() => {
        //Remove AddedToCartBox if you click outside of it
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setAddedToCart(false)
                setErrorLogin(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}