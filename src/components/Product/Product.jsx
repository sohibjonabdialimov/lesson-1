import React from "react";
import product1 from '../../assets/img/product-1.svg';
import product2 from '../../assets/img/product-2.svg';
import product3 from '../../assets/img/product-3.svg';



const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="product-content row">
          <h2 className="product-title">
            Build & manage distributed teams like no one else.
          </h2>
          <ul className="product-list">
            <li className="product-item row">
              <div className="product-item__img">
                <img src={product1} alt="product" />
              </div>
              <div className="product-item__desc">
                <p>Experienced Individuals</p>
                <p>
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </li>

            <li className="product-item row">
              <div className="product-item__img">
                <img src={product2} alt="product" />
              </div>
              <div className="product-item__desc">
                <p>Easy to Implement</p>
                <p>
                  Our processes have been refined over years of implementation
                  meaning our teams always deliver.
                </p>
              </div>
            </li>

            <li className="product-item row">
              <div className="product-item__img">
                <img src={product3} alt="product" />
              </div>
              <div className="product-item__desc">
                <p>Enhanced Productivity</p>
                <p>
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Product;
