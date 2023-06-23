import React, { useEffect, useState } from "react";
import "./AllProducts.css";
export default function AllProducts() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/jewelryArray")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <section className="cards">
      {products.map((ele) => {
        return (
          <article key={ele.id} className="ProductsCards">
            <div>
              <img src={ele.image} alt={ele.name} />
            </div>
            <div className="icons">
              <div className="icon1">
                <i
                  className="fa-sharp fa-solid fa-eye fa-2xl icon"
                  style={{ color: " #0000006e" }}
                ></i>
              </div>
              <div>
                <i
                  className="fa-sharp fa-solid fa-heart fa-2xl icon"
                  style={{ color: "#0000006e" }}
                ></i>
              </div>
            </div>
            <div className="card-details">
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  overflow: "hidden"
                }}
              >
                {ele.name}
              </p>

              <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                {ele.price} JD
              </h1>
            </div>
          </article>
        );
      })}
    </section>
  );
}
