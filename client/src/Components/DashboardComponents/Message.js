import React from 'react'

function Message() {
  return (
    <div>
      {" "}
      <div class="dashborad-box">
        <h4 class="title">Message</h4>
        <div class="section-body">
          <div class="messages">
            <div class="message">
              <div class="thumb">
                <img
                  class="img-fluid"
                  src="images/testimonials/ts-1.jpg"
                  alt=""
                />
              </div>
              <div class="body">
                <h6>Mary Smith</h6>
                <p class="post-time">22 Minutes ago</p>
                <p class="content mb-0 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
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
            <div class="message">
              <div class="thumb">
                <img
                  class="img-fluid"
                  src="images/testimonials/ts-2.jpg"
                  alt=""
                />
              </div>
              <div class="body">
                <h6>Karl Tyron</h6>
                <p class="post-time">23 Minutes ago</p>
                <p class="content mb-0 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
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
            <div class="message">
              <div class="thumb">
                <img
                  class="img-fluid"
                  src="images/testimonials/ts-3.jpg"
                  alt=""
                />
              </div>
              <div class="body">
                <h6>Lisa Willis</h6>
                <p class="post-time">53 Minutes ago</p>
                <p class="content mb-0 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
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
    </div>
  );
}

export default Message