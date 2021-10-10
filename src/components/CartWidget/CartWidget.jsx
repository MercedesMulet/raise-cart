import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
    return(
        <div className="cart-nav-icon">
            <FontAwesomeIcon icon={faShoppingCart}/>        
        </div>
    );
}