import React, { useState, useEffect } from "react";
import image2 from "../Image/single-property/s-2.jpg";
import image3 from "../Image/single-property/s-3.jpg";
import image10 from "../Image/testimonials/ts-5.jpg";
import image11 from "../Image/single-property/s-1.jpg";
import image12 from "../Image/testimonials/ts-4.jpg";
import image13 from "../Image/testimonials/ts-3.jpg";
import image21 from "../Image/single-property/banner.jpg";
import image22 from "../Image/blog/b-11.jpg";
import image23 from "../Image/testimonials/ts-1.jpg";
import image24 from "../Image/blog/b-12.jpg";
import image25 from "../Image/testimonials/ts-2.jpg";
import image26 from "../Image/blog/b-1.jpg";
import image27 from "../Image/testimonials/ts-3.jpg";
import image29 from "../Image/testimonials/ts-1.jpg";
import image50 from "../Image/single-property/s-1.jpg";
import image51 from "../Image/single-property/s-2.jpg";
import image52 from "../Image/single-property/s-3.jpg";
import image53 from "../Image/single-property/s-4.jpg";
import image54 from "../Image/single-property/s-5.jpg";
import TopBar from "./TopBar";

const MySpaces = () => {
  //RETRIEVE SPACE ID
  const [message, setMessage] = useState("")
  const [spaceData, setSpaceData] = useState([])
  const [amenities, setAmenities] = useState([])
  const [reviews, setReviews] = useState([])
  const [property, setProperty] = useState([])
  const [clientData, setClientData] = useState([])

  //FETCH SPACE DETAILS
  const space_id = localStorage.getItem("space_id")
  console.log(space_id)

  //FETCH SPACE DETAILS
  useEffect(() => {
    fetch("/spaces/" + space_id)
      .then((r) => r.json())
      .then((data) => {
        setSpaceData(data)
        setAmenities(data.amenities)
        setReviews(data.reviews)
        setProperty(data.property)
        setClientData(data.client)
        console.log(data)

      });
  }, [space_id]);

  async function handleMessage(e) {
    e.preventDefault();

    const formData = {
      message,
      client_id: 1
    };

    const response = await fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // response.json() returns a Promise, we must await it
    const data = await response.json();
    if (response.ok) {
      // console.log("User created:", data);
      //   window.location = '/log-in';
    } else {
      //   setErrors(data.errors);
    }
  }

  return (
   <div>
    <TopBar/>
        <div class="inner-pages sin-1 homepage-4 hd-white">
          <div class="clearfix"></div>

          <section class="single-proper blog details">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-12 blog-pots">
                  <div class="row">
                    <div class="col-md-12">
                      <section class="headings-2 pt-0">
                        <div class="pro-wrapper">
                          <div class="detail-wrapper-body">
                            <div class="listing-title-bar">
                              <h3>
                                {spaceData.space_category}{" "}
                                <span class="mrg-l-5 category-tag">
                                  For hire
                                </span>
                              </h3>
                              <div class="mt-0">
                                <a
                                  href="#listing-location"
                                  class="listing-address"
                                >
                                  <i class="fa fa-map-marker pr-2 ti-location-pin mrg-r-5"></i>
                                  {property.location}
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="single detail-wrapper mr-2">
                            <div class="detail-wrapper-body">
                              <div class="listing-title-bar">
                                <h4>{spaceData.price_per_hour}/hr</h4>
                                <div class="mt-0">
                                  <a
                                    href="#listing-location"
                                    class="listing-address"
                                  >
                                    <p>{spaceData.room_size} / sq ft</p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div
                        id="listingDetailsSlider"
                        class="carousel listing-details-sliders slide mb-30"
                      >
                        <h5 class="mb-4">Gallery</h5>
                        <div class="carousel-inner">
                          <div
                            class="active item carousel-item"
                            data-slide-number="0"
                          >
                            <img
                              src={spaceData.image_1}
                              class="img-fluid"
                              alt="slider-listing"
                            />
                          </div>
                          <div class="item carousel-item" data-slide-number="1">
                            <img
                              src={spaceData.image_2}
                              class="img-fluid"
                              alt="slider-listing"
                            />
                          </div>
                          <div class="item carousel-item" data-slide-number="2">
                            <img
                              src={spaceData.image_3}
                              class="img-fluid"
                              alt="slider-listing"
                            />
                          </div>


                          <a
                            class="carousel-control left"
                            href="#listingDetailsSlider"
                            data-slide="prev"
                          >
                            <i class="fa fa-angle-left"></i>
                          </a>
                          <a
                            class="carousel-control right"
                            href="#listingDetailsSlider"
                            data-slide="next"
                          >
                            <i class="fa fa-angle-right"></i>
                          </a>
                        </div>
                      </div>
                      <div class="blog-info details mb-30">
                        <h5 class="mb-4">Description</h5>
                        <p class="mb-3">
                          {spaceData.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="single homes-content details mb-30">


                    <h5 class="mt-5">Amenities</h5>

                    <ul class="homes-list clearfix">

                      {
                        amenities.map((amenity) => {
                          return (
                            <li>
                              <i class="fa fa-check-square" aria-hidden="true"></i>
                              <span key={amenity.id}>{amenity.item_name}</span>
                            </li>
                          )
                        })


                      }

                    </ul>
                  </div>

                  <section class="reviews comments">
                    <h3 class="mb-5">{reviews.rat}</h3>
                    <div class="row mb-5">
                      <ul class="col-12 commented pl-0">
                        <li class="comm-inf">
                          <div class="col-md-2">
                            <img src={image10} class="img-fluid" alt="" />
                          </div>
                          <div class="col-md-10 comments-info">
                            <div class="conra">
                              <h5 class="mb-2">Mary Smith</h5>
                              <div class="rating-box">
                                <div class="detail-list-rating mr-0">
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star-o"></i>
                                </div>
                              </div>
                            </div>
                            <p class="mb-4">May 30 2020</p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Cras aliquam, quam congue dictum luctus,
                              lacus magna congue ante, in finibus dui sapien eu
                              dolor. Integer tincidunt suscipit erat, nec
                              laoreet ipsum vestibulum sed.
                            </p>
                            <div class="rest">
                              <img src={image11} class="img-fluid" alt="" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>


                  </section>

                  <section class="single reviews leve-comments details">
                    <div id="add-review" class="add-review-box">
                      <h3 class="listing-desc-headline margin-bottom-20 mb-4">
                        Add Review
                      </h3>
                      <span class="leave-rating-title">
                        Your rating for this listing
                      </span>

                      <div class="row mb-4">
                        <div class="col-md-6">
                          <div class="clearfix"></div>
                          <div class="leave-rating margin-bottom-30">
                            <input
                              type="radio"
                              name="rating"
                              id="rating-1"
                              value="1"
                            />
                            <label for="rating-1" class="fa fa-star"></label>
                            <input
                              type="radio"
                              name="rating"
                              id="rating-2"
                              value="2"
                            />
                            <label for="rating-2" class="fa fa-star"></label>
                            <input
                              type="radio"
                              name="rating"
                              id="rating-3"
                              value="3"
                            />
                            <label for="rating-3" class="fa fa-star"></label>
                            <input
                              type="radio"
                              name="rating"
                              id="rating-4"
                              value="4"
                            />
                            <label for="rating-4" class="fa fa-star"></label>
                            <input
                              type="radio"
                              name="rating"
                              id="rating-5"
                              value="5"
                            />
                            <label for="rating-5" class="fa fa-star"></label>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="col-md-6">
                          <div class="add-review-photos margin-bottom-30">
                            <div class="photoUpload">
                              <span>
                                <i class="sl sl-icon-arrow-up-circle"></i>{" "}
                                Upload Photos
                              </span>
                              <input type="file" class="upload" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 data">
                          <form action="#">
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  class="form-control"
                                  placeholder="First Name"
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  class="form-control"
                                  placeholder="Last Name"
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="email"
                                  name="email"
                                  class="form-control"
                                  placeholder="Email"
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-md-12 form-group">
                              <textarea
                                class="form-control"
                                id="exampleTextarea"
                                rows="8"
                                placeholder="Review"
                                required
                              ></textarea>
                            </div>
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg mt-2"
                            >
                              Submit Review
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <aside class="col-lg-4 col-md-12 car">
                  <div class="single widget">
                    <div class="schedule widget-boxed mt-0">
                      <div class="widget-boxed-header">
                        <h4>
                          <i class="fa fa-calendar pr-3 padd-r-10"></i>Schedule
                          a Tour
                        </h4>
                      </div>
                      <div class="widget-boxed-body">
                        <div class="row">
                          <div class="col-lg-6 col-md-12 book">
                            <input
                              type="text"
                              id="reservation-date"
                              data-lang="en"
                              data-large-mode="true"
                              data-min-year="2017"
                              data-max-year="2020"
                              data-disabled-days="08/17/2017,08/18/2017"
                              data-id="datedropper-0"
                              data-theme="my-style"
                              class="form-control"
                              readonly=""
                            />
                          </div>
                          <div class="col-lg-6 col-md-12 book2">
                            <input
                              type="text"
                              id="reservation-time"
                              class="form-control"
                              readonly=""
                            />
                          </div>
                        </div>
                        <div class="row mrg-top-15 mb-3">
                          <div class="col-lg-6 col-md-12 mt-4">
                            <label class="mb-4">Adult</label>
                            <div class="input-group">
                              <span class="input-group-btn">
                                <button
                                  type="button"
                                  class="btn counter-btn theme-cl btn-number"
                                  disabled="disabled"
                                  data-type="minus"
                                  data-field="quant[1]"
                                >
                                  <i class="fa fa-minus"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                name="quant[1]"
                                class="border-0 text-center form-control input-number"
                                data-min="0"
                                data-max="10"
                                value="0"
                              />
                              <span class="input-group-btn">
                                <button
                                  type="button"
                                  class="btn counter-btn theme-cl btn-number"
                                  data-type="plus"
                                  data-field="quant[1]"
                                >
                                  <i class="fa fa-plus"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-12 mt-4">
                            <label class="mb-4">Children</label>
                            <div class="input-group">
                              <span class="input-group-btn">
                                <button
                                  type="button"
                                  class="btn counter-btn theme-cl btn-number"
                                  disabled="disabled"
                                  data-type="minus"
                                  data-field="quant[2]"
                                >
                                  <i class="fa fa-minus"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                name="quant[2]"
                                class="border-0 text-center form-control input-number"
                                data-min="0"
                                data-max="10"
                                value="0"
                              />
                              <span class="input-group-btn">
                                <button
                                  type="button"
                                  class="btn counter-btn theme-cl btn-number"
                                  data-type="plus"
                                  data-field="quant[2]"
                                >
                                  <i class="fa fa-plus"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <a
                          href="payment-method.html"
                          class="btn reservation btn-radius theme-btn full-width mrg-top-10"
                        >
                          Submit Request
                        </a>
                      </div>
                    </div>

                    <div class="sidebar">
                      <div class="widget-boxed mt-33 mt-5">
                        <div class="widget-boxed-header">
                          <h4>Agent Information</h4>
                        </div>
                        <div class="widget-boxed-body">
                          <div class="sidebar-widget author-widget2">
                            <div class="author-box clearfix">
                              <img
                                src={clientData.profile_url}
                                alt="author-image"
                                class="author__img"
                              />
                              <h4 class="author__title">{clientData.first_name}&nbsp;{clientData.last_name}</h4>
                              <p class="author__meta">Agent of Property</p>
                            </div>
                            <ul class="author__contact">
                              <li>
                                <span class="la la-map-marker">
                                  <i class="fa fa-map-marker"></i>
                                </span>
                                {clientData.location}
                              </li>
                              <li>
                                <span class="la la-phone">
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                                </span>
                                <a href="#">{clientData.phone_number}</a>
                              </li>
                              <li>
                                <span class="la la-envelope-o">
                                  <i
                                    class="fa fa-envelope"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <a href="#">lisa@gmail.com</a>
                              </li>
                            </ul>
                            <div class="agent-contact-form-sidebar">
                              <h4>Message Us</h4>
                              <form
                                name="contact_form"
                                onSubmit={(e) => handleMessage(e)}
                              >
                                {/* <input type="text" id="fname" name="full_name" placeholder="Full Name" required />
                                                    <input type="number" id="pnumber" name="phone_number" placeholder="Phone Number" required />
                                                    <input type="email" id="emailid" name="email_address" placeholder="Email Address" required /> */}
                                <textarea
                                  placeholder="Message"
                                  name="message"
                                  required
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <input
                                  type="submit"
                                  name="sendmessage"
                                  class="multiple-send-message"
                                  value="send message"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="main-search-field-2">
                        <div class="widget-boxed popular mt-5">
                          <div class="widget-boxed-header">
                            <h4>Specials of the day</h4>
                          </div>
                          <div class="widget-boxed-body">
                            <div class="banner">
                              <img src={image21} alt="" />
                            </div>
                          </div>
                        </div>

                        <div class="widget-boxed popular mt-5">
                          <div class="widget-boxed-header">
                            <h4>Popular Tags</h4>
                          </div>
                          <div class="widget-boxed-body">
                            <div class="recent-post">
                              <div class="tags">
                                <span>
                                  <a href="#" class="btn btn-outline-primary">
                                    Houses
                                  </a>
                                </span>
                                <span>
                                  <a href="#" class="btn btn-outline-primary">
                                    Real Home
                                  </a>
                                </span>
                              </div>
                              <div class="tags">
                                <span>
                                  <a href="#" class="btn btn-outline-primary">
                                    Baths
                                  </a>
                                </span>
                                <span>
                                  <a href="#" class="btn btn-outline-primary">
                                    Beds
                                  </a>
                                </span>
                              </div>
                              <div class="tags">
                                <span>
                                  <a href="#" class="btn btn-outline-primary">
                                    Garages
                                  </a>
                                </span>
                                <span>
                                  <a href="#" class="btn btn-outline-primary">
                                    Family
                                  </a>
                                </span>
                              </div>
                              <div class="tags">
                                <span>
                                  <a href="#" class="btn btn-outline-primary">
                                    Real Estates
                                  </a>
                                </span>
                                <span>
                                  <a href="#" class="btn btn-outline-primary">
                                    Properties
                                  </a>
                                </span>
                              </div>
                              <div class="tags no-mb">
                                <span>
                                  <a href="#" class="btn btn-outline-primary">
                                    Location
                                  </a>
                                </span>
                                <span>
                                  <a href="#" class="btn btn-outline-primary">
                                    Price
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>

              <section class="similar-property featured portfolio p-0 bg-white-inner">
                <div class="container">
                  <h5>Similar Properties</h5>
                  <div class="row portfolio-items">
                    <div class="item col-lg-4 col-md-6 col-xs-12 landscapes">
                      <div class="project-single">
                        <div class="project-inner project-head">
                          <div class="homes">
                            <a href="single-property-1.html" class="homes-img">
                              <div class="homes-tag button alt featured">
                                Featured
                              </div>
                              <div class="homes-tag button alt sale">
                                For Sale
                              </div>
                              <div class="homes-price">$9,000/mo</div>
                              <img
                                src={image22}
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
                            <a
                              href="single-property-2.html"
                              class="img-poppu btn"
                            >
                              <i class="fa fa-photo"></i>
                            </a>
                          </div>
                        </div>

                        <div class="homes-content">
                          <h3>
                            <a href="single-property-1.html">
                              Real House Luxury Villa
                            </a>
                          </h3>
                          <p class="homes-address mb-3">
                            <a href="single-property-1.html">
                              <i class="fa fa-map-marker"></i>
                              <span>Est St, 77 - Central Park South, NYC</span>
                            </a>
                          </p>

                          <ul class="homes-list clearfix pb-3">
                            <li class="the-icons">
                              <i
                                class="flaticon-bed mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>6 Bedrooms</span>
                            </li>
                            <li class="the-icons">
                              <i
                                class="flaticon-bathtub mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>3 Bathrooms</span>
                            </li>
                            <li class="the-icons">
                              <i
                                class="flaticon-square mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>720 sq ft</span>
                            </li>
                            <li class="the-icons">
                              <i
                                class="flaticon-car mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>2 Garages</span>
                            </li>
                          </ul>
                          <div class="footer">
                            <a href="agent-details.html">
                              <img src={image23} alt="" class="mr-2" /> Lisa
                              Jhonson
                            </a>
                            <span>2 months ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item col-lg-4 col-md-6 col-xs-12 people">
                      <div class="project-single">
                        <div class="project-inner project-head">
                          <div class="homes">
                            <a href="single-property-1.html" class="homes-img">
                              <div class="homes-tag button sale rent">
                                For Rent
                              </div>
                              <div class="homes-price">$3,000/mo</div>
                              <img
                                src={image24}
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
                            <a
                              href="single-property-2.html"
                              class="img-poppu btn"
                            >
                              <i class="fa fa-photo"></i>
                            </a>
                          </div>
                        </div>

                        <div class="homes-content">
                          <h3>
                            <a href="single-property-1.html">
                              Real House Luxury Villa
                            </a>
                          </h3>
                          <p class="homes-address mb-3">
                            <a href="single-property-1.html">
                              <i class="fa fa-map-marker"></i>
                              <span>Est St, 77 - Central Park South, NYC</span>
                            </a>
                          </p>

                          <ul class="homes-list clearfix pb-3">
                            <li class="the-icons">
                              <i
                                class="flaticon-bed mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>6 Bedrooms</span>
                            </li>
                            <li class="the-icons">
                              <i
                                class="flaticon-bathtub mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>3 Bathrooms</span>
                            </li>
                            <li class="the-icons">
                              <i
                                class="flaticon-square mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>720 sq ft</span>
                            </li>
                            <li class="the-icons">
                              <i
                                class="flaticon-car mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>2 Garages</span>
                            </li>
                          </ul>
                          <div class="footer">
                            <a href="agent-details.html">
                              <img src={image25} alt="" class="mr-2" /> Karl
                              Smith
                            </a>
                            <span>2 months ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item col-lg-4 col-md-6 col-xs-12 people landscapes no-pb pbp-3">
                      <div class="project-single no-mb mbp-3">
                        <div class="project-inner project-head">
                          <div class="homes">
                            <a href="single-property-1.html" class="homes-img">
                              <div class="homes-tag button alt sale">
                                For Sale
                              </div>
                              <div class="homes-price">$9,000/mo</div>
                              <img
                                src={image26}
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
                            <a
                              href="single-property-2.html"
                              class="img-poppu btn"
                            >
                              <i class="fa fa-photo"></i>
                            </a>
                          </div>
                        </div>

                        <div class="homes-content">
                          <h3>
                            <a href="single-property-1.html">
                              Real House Luxury Villa
                            </a>
                          </h3>
                          <p class="homes-address mb-3">
                            <a href="single-property-1.html">
                              <i class="fa fa-map-marker"></i>
                              <span>Est St, 77 - Central Park South, NYC</span>
                            </a>
                          </p>

                          <ul class="homes-list clearfix pb-3">
                            <li class="the-icons">
                              <i
                                class="flaticon-bed mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>6 Bedrooms</span>
                            </li>
                            <li class="the-icons">
                              <i
                                class="flaticon-bathtub mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>3 Bathrooms</span>
                            </li>
                            <li class="the-icons">
                              <i
                                class="flaticon-square mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>720 sq ft</span>
                            </li>
                            <li class="the-icons">
                              <i
                                class="flaticon-car mr-2"
                                aria-hidden="true"
                              ></i>
                              <span>2 Garages</span>
                            </li>
                          </ul>
                          <div class="footer">
                            <a href="agent-details.html">
                              <img src={image27} alt="" class="mr-2" /> katy
                              Teddy
                            </a>
                            <span>2 months ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
   </div>
     
  );
};

export default MySpaces;
