import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  // console.log(props);
  const { name, img, price, stock, seller, star } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="title">{name}</h4>
        <p>
          <small>{seller}</small>
        </p>
        <p>Price{price}</p>
        <p>{stock} in stock. Order soon</p>
        <Rating
          initialRating={star}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly
        ></Rating>
        <br />
        <br />
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-regular"
        >
          {cartIcon} Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
