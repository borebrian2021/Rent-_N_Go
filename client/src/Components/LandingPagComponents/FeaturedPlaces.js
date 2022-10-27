import React from "react";
import backgroundImage from "../../Image/space.jpg";

const FeaturedPlaces = ({ spaces }) => {
  return (
    <section class="featured portfolio bg-white-2 rec-pro full-l">
      <div class="container-fluid">
        <div class="sec-title">
          <h2>
            <span>Featured </span>Spaces
          </h2>
          <p>These are our featured Spaces</p>
        </div>
        <div class="row portfolio-items">
          {spaces.map((space) => {
            return (
              <div
                class="item col-xl-6 col-lg-12 col-md-12 col-xs-12 landscapes sale"
                // key={space}
                key={space.id}
              >
                <div class="project-single">
                  <div class="project-inner project-head">
                    <div class="homes">
                      <a href="single-property-1.html" class="homes-img">
                        <div class="homes-tag button alt featured">
                          Featured
                        </div>

                        <img
                          // src={space}
                          src={space.image_1}
                          alt="home-1"
                          class="img-responsive"
                        />
                      </a>
                    </div>
                    <div class="button-effect">
                      <a href="single-property-1.html" class="btn">
                        <i class="fa fa-link"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        class="btn popup-video popup-youtube"
                      >
                        <i class="fas fa-video"></i>
                      </a>
                      <a href="single-property-2.html" class="img-poppu btn">
                        <i class="fa fa-photo"></i>
                      </a>
                    </div>
                  </div>
                  <div class="homes-content">
                    <h3>
                      <a href="single-property-1.html">
                        Real Luxury Family House Villa
                      </a>
                    </h3>
                    <p class="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i class="fa fa-map-marker"></i>
                        {/* <span>space</span> */}
                        <span>{space.property.location}</span>
                      </a>
                    </p>
                    <ul class="homes-list clearfix pb-3">
                      <li class="the-icons">
                        <i class="flaticon-square mr-2" aria-hidden="true"></i>
                        {/* <span>{space} sq ft</span> */}
                        <span>{space.room_size} sq ft</span>
                      </li>
                      <li class="the-icons">
                        <i class="flaticon-car mr-2" aria-hidden="true"></i>
                        <span>2 Garages</span>
                      </li>
                      {/* <span>{space}</span> */}
                      <span>{space.description}</span>
                    </ul>

                    <div class="price-properties footer pt-3 pb-0">
                      <h3 class="title mt-3">
                        <a href="single-property-1.html">
                          Ksh. {space.price_per_hour}/hr
                        </a>
                      </h3>
                      <div class="compare">
                        <a href="#" title="Compare">
                          <i class="flaticon-compare"></i>
                        </a>
                        <a href="#" title="Share">
                          <i class="flaticon-share"></i>
                        </a>
                        <a href="#" title="Favorites">
                          <i class="flaticon-heart"></i>
                        </a>
                      </div>
                    </div>
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

export default FeaturedPlaces;
