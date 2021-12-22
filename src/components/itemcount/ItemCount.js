import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

function ItemCount({ stock, onAdd }) {
  const [counter, setCounter] = useState(1);
  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const manualChange = (e) => {
    let value = e.target.value;
    if (value > stock) {
      setCounter(stock);
    } else {
      setCounter(value);
    }
  };
  return (
    <div className="btn-comprar">
      {stock > 0 ? (
        <>
          {" "}
          <Button className="btn btn-danger btn-sm mr-1 mb-2" onClick={restar}>
            -
          </Button>{" "}
          <input
            type="number"
            value={counter}
            placeholder="Escribe la cantidad"
            onChange={manualChange}
          />
          <Button className="btn btn-danger btn-sm mr-1 mb-2" onClick={sumar}>
            +
          </Button>
          <div>
            <Button className="btn btn-danger btn-sm mr-1 mb-2">
                                    Comprar
                                  </Button>{" "}
          </div>
        </>
      ) : (
        <p>Sin stock</p>
      )}
    </div>
  );
}

export default ItemCount;
