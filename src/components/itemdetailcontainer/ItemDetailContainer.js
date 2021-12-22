import React, { useState, useEffect } from "react";
import ItemDetail from "../itemdetail/ItemDetail";
import { useParams } from "react-router";
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let { product_id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.mercadolibre.com/items/${product_id}?include_attributes=all`
    )
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  },[ product_id ]);

  return (
    <div className = "ContDetail">
      <ItemDetail  item={product} />
    </div>
  );
}

export default ItemDetailContainer;
