import React from 'react';
import img1 from '../../Image/popular-places/7.jpg'
import backgroundImage from '../../Image/space.jpg'
import { useNavigate } from "react-router-dom"

const PopularSpaces = ({featured}) => {
    const navigate =useNavigate();
    const routeSpace = (id) => {
        localStorage.setItem("space_id", id)
        navigate("/space-page")
      }
    return (
        <section class="info-help">
        <div class="container">
            <div class="row info-head">
                <div class="col-lg-4 col-md-6">
                    <div class="info-text">
                        <h3>Most booked spaces</h3>
                        <p>We Help you find the best places and offer near you. Bring to the table win-win survival strategies to ensure proactive domination going forward.</p>
                        <div class="inf-btn pro">
                            <a href="contact-us.html" class="btn btn-yellow">Get started</a>
                            
                        </div>
                    </div>
                </div>
               {
               featured.map((space)=>{
                return (
                <div  onClick={() => routeSpace(space.id)}  key={space.id}  class="featured portfolio home18 item col-lg-4 col-md-6 landscapes sale mt-2 mb-2">
                <div class="project-single specials">
                    <div class="project-inner project-head">
                        <div class="homes">
                            <a href="single-property-1.html" class="homes-img">
                                <div class="homes-tag button alt sale"></div>
                                <div class="homes-price">{space.price_per_hour} / hr</div>
                                <img
                          // src={space}
                          src={space.image_1}
                          alt="home-1"
                          class="img-responsive"
                        />
                            </a>
                        </div>
                        <div class="button-effect">
                            {/* <a href="single-property-1.html" class="btn"><i class="fa fa-link"></i></a>
                            <a href="https://www.youtube.com/watch?v=14semTlwyUY" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                            <a href="single-property-2.html" class="img-poppu btn"><i class="fa fa-photo"></i></a>
                        */}
                        </div>
                    </div>
                    <div class="homes-content">
                        <h3><a href="single-property-1.html">  {space.property.location}</a></h3>
                        <p class="homes-address mb-3">
                            <a href="single-property-1.html">
                                <i class="fa fa-map-marker"></i><span>EastLeig ,Zion Mall Nairobi</span>
                            </a>
                        </p>
                        <ul class="homes-list clearfix pb-0">
                          
                            <li>
                                <span>{space.room_size}</span>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>)
               })
               
               }
               
            </div>
        </div>
    </section>
    );
}

export default PopularSpaces;
