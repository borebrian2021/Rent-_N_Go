import React from "react";
import imageOne from "../../Image/office-building.png"
import imageTwo from "../../Image/countdown.png"
import imageFour from "../../Image/messages.png"
import imageFive from "../../Image/calendar.png"
// import space_image from "../../Image/
const DashboardCards = ({ propertyData, messages, mySpaces  , spaceReservations }) => {
  return (
    <div class="dashborad-box stat ">
      <h4 class="title">Manage Dashboard</h4>
      <div class="section-body">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-xs-12 dar pro mr-3">
            <div class="item">
              <div class="icon">
                <img class="cards_icons" src={imageOne}/>
                {/* <i class="fa fa-list" aria-hidden="true"></i> */}
              </div>
              <div class="info">
                <h6 class="number">{propertyData}</h6>
                <p class="type ml-1">Published Property</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12 dar rev mr-3">
            <div class="item">
              <div class="icon">
              <img class="cards_icons" src={imageTwo}/>

                {/* <i class="fas fa-star"></i> */}
              </div>
              <div class="info">
                <h6 class="number">{mySpaces}</h6>
                <p class="type ml-1">Total Spaces</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 dar com mr-3">
            <div class="item mb-0">
              <div class="icon">
                {/* <i class="fas fa-comments"></i> */}
                <img class="cards_icons" src={imageFour}/>

              </div>
              <div class="info">
                <h6 class="number">{messages}</h6>
                <p class="type ml-1">Messages</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 dar booked">
            <div class="item mb-0">
              <div class="icon">
                {/* <i class="fas fa-heart"></i>
                 */}
                <img class="cards_icons" src={imageFive}/>

              </div>
              <div class="info">
                <h6 class="number">{spaceReservations}</h6>
                <p class="type ml-1">My Reservations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
