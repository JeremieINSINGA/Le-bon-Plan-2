import React, { Component } from "react";
import productsData from "./productsData";

export default class Products extends Component {
  render() {
    return (
      <div>
        {productsData.map((data) => (
          <>
            <h1>Product</h1>
            <div class="card" style={{ width: "18rem" }}>
              <img src={data.img} />
              <div class="card-body">
                <h5 class="card-title">{data.name}</h5>
                <p class="card-text">{data.description}</p>
                <a href="#" class="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }
}
