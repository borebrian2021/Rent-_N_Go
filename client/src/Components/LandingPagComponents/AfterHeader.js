import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

//Images import
import backgroundImage from '../../Image/space.jpg'
const AfterHeader = ({ spacesData }) => {
    const navigate = useNavigate()

    const [search, setSearch] = useState([])
    let data = spacesData

    function onSearchChange(event) {
        setSearch(event.target.value)


    }

    //ROUTING DYNAMICALLY
    const routeSpace = (id) => {
        localStorage.setItem("space_id", id)
        navigate("/space-page")
    }

    if (search.length > 0) {
        data = data.filter((i) => {
            // if(i.property.location.toLowerCase().match(search) || i.space_category.toLowerCase().match(search) || i.property.property_name.toLowerCase().match(search))
            return i.property.property_name.toLowerCase().match(search)
        })
    }
    return (
        <section id="hero-area" class="parallax-searchs home15 overlay thome-6 thome-1" >
            <div class="hero-main" >
                <div class="container" >
                    <div class="row">
                        <div class="col-12">
                            <div class="hero-inner">
                                <div class="welcome-text">
                                    <h1 class="h1">Find a beutiful space for your activity
                                        <br class="d-md-none" />
                                        <span class="typed border-bottom"></span>
                                    </h1>
                                    <p class="mt-4">We Have Over Multiple Spaces  For You Fit.</p>
                                </div>
                                <div class="col-12">
                                    <div class="banner-search-wrap">
                                        <ul class="nav nav-tabs rld-banner-tab">
                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab" href="#tabs_1">Normal Search</a>

                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#tabs_2">Advanced Search</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane fade " id="tabs_2">
                                                <div class="rld-main-search">
                                                    <div class="row">
                                                        <div class="rld-single-select">
                                                            <select class="select single-select mr-4">
                                                                <option value="1">Location</option>
                                                                <option value="2">Los Angeles</option>
                                                                <option value="3">Chicago</option>
                                                                <option value="3">Philadelphia</option>
                                                                <option value="3">San Francisco</option>
                                                                <option value="3">Miami</option>
                                                                <option value="3">Houston</option>
                                                            </select>
                                                        </div>
                                                        <div class="rld-single-select ">
                                                            <select class="select single-select">
                                                                <option value="1">Property Type</option>
                                                                <option value="2">Family House</option>
                                                                <option value="3">Apartment</option>
                                                                <option value="3">Condo</option>
                                                            </select>
                                                        </div>

                                                        <div class="dropdown-filter"><span>Advanced Search</span></div>
                                                        <div class="col-xl-2 col-lg-2 col-md-4 pl-0">
                                                            <a class="btn btn-yellow" href="#">Search Now</a>
                                                        </div>
                                                        <div class="explore__form-checkbox-list full-filter">
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                                                    <div class="form-group categories">
                                                                        <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-home"></i>Property Status</span>
                                                                            <ul class="list">
                                                                                <li data-value="1" class="option selected ">For Sale</li>
                                                                                <li data-value="2" class="option">For Rent</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                                                                    <div class="form-group beds">
                                                                        <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-bed" aria-hidden="true"></i> Bedrooms</span>
                                                                            <ul class="list">
                                                                                <li data-value="1" class="option selected">1</li>
                                                                                <li data-value="2" class="option">2</li>
                                                                                <li data-value="3" class="option">3</li>
                                                                                <li data-value="3" class="option">4</li>
                                                                                <li data-value="3" class="option">5</li>
                                                                                <li data-value="3" class="option">6</li>
                                                                                <li data-value="3" class="option">7</li>
                                                                                <li data-value="3" class="option">8</li>
                                                                                <li data-value="3" class="option">9</li>
                                                                                <li data-value="3" class="option">10</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                                                    <div class="form-group bath">
                                                                        <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-bath" aria-hidden="true"></i> Bathrooms</span>
                                                                            <ul class="list">
                                                                                <li data-value="1" class="option selected">1</li>
                                                                                <li data-value="2" class="option">2</li>
                                                                                <li data-value="3" class="option">3</li>
                                                                                <li data-value="3" class="option">4</li>
                                                                                <li data-value="3" class="option">5</li>
                                                                                <li data-value="3" class="option">6</li>
                                                                                <li data-value="3" class="option">7</li>
                                                                                <li data-value="3" class="option">8</li>
                                                                                <li data-value="3" class="option">9</li>
                                                                                <li data-value="3" class="option">10</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-5 col-md-12 col-sm-12 py-1 pr-30 mr-5 sld d-none d-lg-none d-xl-flex">
                                                                    <div class="main-search-field-2">
                                                                        <div class="range-slider">
                                                                            <label>Area Size</label>
                                                                            <div id="area-range" data-min="0" data-max="1300" data-unit="sq ft"></div>
                                                                            <div class="clearfix"></div>
                                                                        </div>
                                                                        <br />
                                                                        <div class="range-slider">
                                                                            <label>Price Range</label>
                                                                            <div id="price-range" data-min="0" data-max="600000" data-unit="$"></div>
                                                                            <div class="clearfix"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-6 col-sm-12 py-1 pr-30 d-none d-lg-none d-xl-flex">
                                                                    <div class="checkboxes one-in-row margin-bottom-10 ch-1">
                                                                        <input id="check-2" type="checkbox" name="check" />
                                                                        <label for="check-2">Air Conditioning</label>
                                                                        <input id="check-3" type="checkbox" name="check" />
                                                                        <label for="check-3">Swimming Pool</label>
                                                                        <input id="check-4" type="checkbox" name="check" />
                                                                        <label for="check-4">Central Heating</label>
                                                                        <input id="check-5" type="checkbox" name="check" />
                                                                        <label for="check-5">Laundry Room</label>
                                                                        <input id="check-6" type="checkbox" name="check" />
                                                                        <label for="check-6">Gym</label>
                                                                        <input id="check-7" type="checkbox" name="check" />
                                                                        <label for="check-7">Alarm</label>
                                                                        <input id="check-8" type="checkbox" name="check" />
                                                                        <label for="check-8">Window Covering</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-6 col-sm-12 py-1 pr-30 d-none d-lg-none d-xl-flex">
                                                                    <div class="checkboxes one-in-row margin-bottom-10 ch-2">
                                                                        <input id="check-9" type="checkbox" name="check" />
                                                                        <label for="check-9">WiFi</label>
                                                                        <input id="check-10" type="checkbox" name="check" />
                                                                        <label for="check-10">TV Cable</label>
                                                                        <input id="check-11" type="checkbox" name="check" />
                                                                        <label for="check-11">Dryer</label>
                                                                        <input id="check-12" type="checkbox" name="check" />
                                                                        <label for="check-12">Microwave</label>
                                                                        <input id="check-13" type="checkbox" name="check" />
                                                                        <label for="check-13">Washer</label>
                                                                        <input id="check-14" type="checkbox" name="check" />
                                                                        <label for="check-14">Refrigerator</label>
                                                                        <input id="check-15" type="checkbox" name="check" />
                                                                        <label for="check-15">Outdoor Shower</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane  show active" id="tabs_1">
                                                <div class="rld-main-search">
                                                    <div class="row">
                                                        <div class="rld-single-input">
                                                            <input type="text"  onChange={onSearchChange} value={search} placeholder="Enter Keyword..." className='border_pink'/>
                                                        </div>
                                                        {data.map((item) => {
                                                            return (
                                                                <div onClick={() => routeSpace(item.id)} key={item.id} class="col-xl-2 col-lg-2 col-md-4 pl-0">
                                                                    <div className='searchHolder'>

                                                                        <div className='searchItem'>
                                                                            <p>{item.property.property_name}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            )
                                                        })}

                                                        <div class="explore__form-checkbox-list full-filter">
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                                                    <div class="form-group categories">
                                                                        <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-home"></i>Property Status</span>
                                                                            <ul class="list">
                                                                                <li data-value="1" class="option selected ">For Sale</li>
                                                                                <li data-value="2" class="option">For Rent</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                                                                    <div class="form-group beds">
                                                                        <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-bed" aria-hidden="true"></i> Bedrooms</span>
                                                                            <ul class="list">
                                                                                <li data-value="1" class="option selected">1</li>
                                                                                <li data-value="2" class="option">2</li>
                                                                                <li data-value="3" class="option">3</li>
                                                                                <li data-value="3" class="option">4</li>
                                                                                <li data-value="3" class="option">5</li>
                                                                                <li data-value="3" class="option">6</li>
                                                                                <li data-value="3" class="option">7</li>
                                                                                <li data-value="3" class="option">8</li>
                                                                                <li data-value="3" class="option">9</li>
                                                                                <li data-value="3" class="option">10</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-6 py-1 pl-0 pr-0">
                                                                    <div class="form-group bath">
                                                                        <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-bath" aria-hidden="true"></i> Bathrooms</span>
                                                                            <ul class="list">
                                                                                <li data-value="1" class="option selected">1</li>
                                                                                <li data-value="2" class="option">2</li>
                                                                                <li data-value="3" class="option">3</li>
                                                                                <li data-value="3" class="option">4</li>
                                                                                <li data-value="3" class="option">5</li>
                                                                                <li data-value="3" class="option">6</li>
                                                                                <li data-value="3" class="option">7</li>
                                                                                <li data-value="3" class="option">8</li>
                                                                                <li data-value="3" class="option">9</li>
                                                                                <li data-value="3" class="option">10</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-5 col-md-12 col-sm-12 py-1 pr-30 mr-5 sld">
                                                                    <div class="main-search-field-2">
                                                                        <div class="range-slider">
                                                                            <label>Area Size</label>
                                                                            <div id="area-range-rent" data-min="0" data-max="1300" data-unit="sq ft"></div>
                                                                            <div class="clearfix"></div>
                                                                        </div>
                                                                        <br />
                                                                        <div class="range-slider">
                                                                            <label>Price Range</label>
                                                                            <div id="price-range-rent" data-min="0" data-max="600000" data-unit="$"></div>
                                                                            <div class="clearfix"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-6 col-sm-12 py-1 pr-30">
                                                                    <div class="checkboxes one-in-row margin-bottom-10 ch-1">
                                                                        <input id="check-16" type="checkbox" name="check" />
                                                                        <label for="check-16">Air Conditioning</label>
                                                                        <input id="check-17" type="checkbox" name="check" />
                                                                        <label for="check-17">Swimming Pool</label>
                                                                        <input id="check-18" type="checkbox" name="check" />
                                                                        <label for="check-18">Central Heating</label>
                                                                        <input id="check-19" type="checkbox" name="check" />
                                                                        <label for="check-19">Laundry Room</label>
                                                                        <input id="check-20" type="checkbox" name="check" />
                                                                        <label for="check-20">Gym</label>
                                                                        <input id="check-21" type="checkbox" name="check" />
                                                                        <label for="check-21">Alarm</label>
                                                                        <input id="check-22" type="checkbox" name="check" />
                                                                        <label for="check-22">Window Covering</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-3 col-md-6 col-sm-12 py-1 pr-30">
                                                                    <div class="checkboxes one-in-row margin-bottom-10 ch-2">
                                                                        <input id="check-23" type="checkbox" name="check" />
                                                                        <label for="check-23">WiFi</label>
                                                                        <input id="check-24" type="checkbox" name="check" />
                                                                        <label for="check-24">TV Cable</label>
                                                                        <input id="check-25" type="checkbox" name="check" />
                                                                        <label for="check-25">Dryer</label>
                                                                        <input id="check-26" type="checkbox" name="check" />
                                                                        <label for="check-26">Microwave</label>
                                                                        <input id="check-27" type="checkbox" name="check" />
                                                                        <label for="check-27">Washer</label>
                                                                        <input id="check-28" type="checkbox" name="check" />
                                                                        <label for="check-28">Refrigerator</label>
                                                                        <input id="check-29" type="checkbox" name="check" />
                                                                        <label for="check-29">Outdoor Shower</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AfterHeader;
