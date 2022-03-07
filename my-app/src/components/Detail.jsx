import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID } from "../actions/creates";
import '../css/Detail.css';


function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getProductByID(id));
  }, [dispatch, id]);

  return (
    <div className="containerDetail">
      {
        product ? (
            <div>
                <div className="cardDetail">
                    <div>
                    <img src={product.image} alt='a' />
                    </div>

                    <div>
                        <h2>{product.name}</h2>
                        <br />
                        <h3>{product.brand}</h3>
                        <br />
                        <h4>{product.description}</h4>
                        <h4>{product.price}</h4>
                        <h4>{product.model}</h4>
                        <h4>{product.category}</h4>
                        <h4>{product.gender}</h4>
                        <h4>{product.size}</h4>
                    </div>
                </div>
            </div>
        ) :
        (
        <div>a</div>
        )
    }
    </div>
  );
}

export default Detail;
