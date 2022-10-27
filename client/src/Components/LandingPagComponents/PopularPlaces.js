import React from "react";
import backgroundImage from "../../Image/space.jpg";

const PopularPlaces = ({ properties }) => {
  return (
    <section class="feature-categories bg-white rec-pro">
      <div class="container-fluid">
        <div class="sec-title">
          <h2>
            <span>Popular </span>Properties
          </h2>
          <p>Properties In Most Popular Places.</p>
        </div>
        <div class="row">
          {properties.map((property) => {
            return (
              <div class="col-xl-3 col-lg-6 col-sm-6" key={property.id}>
                <div class="small-category-2">
                  <div class="small-category-2-thumb img-1">
                    <a href="properties-full-grid-1.html">
                      <img src={property.image_url} alt="" />
                    </a>
                  </div>
                  <div class="sc-2-detail">
                    <h4 class="sc-jb-title">
                      <a href="properties-full-grid-1.html">{property.property_name}</a>
                    </h4>
                    <span>{property.spaces.length} places</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
