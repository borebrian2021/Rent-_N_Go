import React from 'react';
import DashboardCards from './DashboardComponents/DashboardCards';
import Message from './DashboardComponents/Message';
import PersonalInfo from './DashboardComponents/PersonalInfo';
import SideBar from './DashboardComponents/SideBar';
// import Profile from '.Components/Profile';

const Dashboard = () => {

 
    return (
      <div id="wrapper" class="int_main_wraapper maxw1600 m0a dashboard-bd">
        <SideBar />
        <section class="user-page section-padding">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-9 col-md-12 col-xs-12 pl-0 user-dash2">
                <DashboardCards />
                <Message />
                <div class="dashborad-box">
                  <h4 class="title">Review</h4>
                  <div class="section-body">
                    <div class="reviews">
                      <div class="review">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="images/testimonials/ts-4.jpg"
                            alt=""
                          />
                        </div>
                        <div class="body">
                          <h5>Family House</h5>
                          <h6>Mary Smith</h6>
                          <p class="post-time">10 hours ago</p>
                          <p class="content mb-0 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </p>
                          <ul class="starts mb-0">
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <div class="controller">
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="far fa-trash-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="review">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="images/testimonials/ts-5.jpg"
                            alt=""
                          />
                        </div>
                        <div class="body">
                          <h5>Bay Apartment</h5>
                          <h6>Karl Tyron</h6>
                          <p class="post-time">22 hours ago</p>
                          <p class="content mb-0 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </p>
                          <ul class="starts mb-0">
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <div class="controller">
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="far fa-trash-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="review">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="images/testimonials/ts-6.jpg"
                            alt=""
                          />
                        </div>
                        <div class="body">
                          <h5>Family House Villa</h5>
                          <h6>Lisa Willis</h6>
                          <p class="post-time">51 hours ago</p>
                          <p class="content mb-0 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </p>
                          <ul class="starts mb-0">
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                          <div class="controller">
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="far fa-trash-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <PersonalInfo />

                <div class="second-footer">
                  <div class="container">
                    <p>2021 © Copyright - All Rights Reserved.</p>
                    <p>
                      Made With <i class="fa fa-heart" aria-hidden="true"></i>{" "}
                      By Code-Theme
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <NavLink>
          to="/Profile" activeClassName="active" className="nav-link">Profile
        </NavLink> */}
      </div>
    );
}

export default Dashboard;
