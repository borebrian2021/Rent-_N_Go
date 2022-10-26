import React from 'react';
import backgroundImage from '../../Image/space.jpg'

const PopularPlaces = () => {
    return (
        <section class="feature-categories bg-white rec-pro">
        <div class="container-fluid">
            <div class="sec-title">
                <h2><span>Popular </span>Places</h2>
                <p>Properties In Most Popular Places.</p>
            </div>
            <div class="row">
                
                <div class="col-xl-3 col-lg-6 col-sm-6" >
                    <div class="small-category-2">
                        <div class="small-category-2-thumb img-1">
                            <a href="properties-full-grid-1.html"><img src={backgroundImage} alt=""/></a>
                        </div>
                        <div class="sc-2-detail">
                            <h4 class="sc-jb-title"><a href="properties-full-grid-1.html">New York</a></h4>
                            <span>203 Properties</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-lg-6 col-sm-6" >
                    <div class="small-category-2">
                        <div class="small-category-2-thumb img-2">
                            <a href="properties-full-grid-1.html"><img src={backgroundImage} alt=""/></a>
                        </div>
                        <div class="sc-2-detail">
                            <h4 class="sc-jb-title"><a href="properties-full-grid-1.html">Los Angeles</a></h4>
                            <span>307 Properties</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-lg-6 col-sm-6">
                    <div class="small-category-2">
                        <div class="small-category-2-thumb img-3">
                            <a href="properties-full-grid-1.html"><img src={backgroundImage} alt=""/></a>
                        </div>
                        <div class="sc-2-detail">
                            <h4 class="sc-jb-title"><a href="properties-full-grid-1.html">San Francisco</a></h4>
                            <span>409 Properties</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-lg-6 col-sm-6" >
                    <div class="small-category-2">
                        <div class="small-category-2-thumb img-3">
                            <a href="properties-full-grid-1.html"><img src={backgroundImage} alt=""/></a>
                        </div>
                        <div class="sc-2-detail">
                            <h4 class="sc-jb-title"><a href="properties-full-grid-1.html">Atlanta</a></h4>
                            <span>409 Properties</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-lg-6 col-sm-6" >
                    <div class="small-category-2 mob-mt">
                        <div class="small-category-2-thumb img-8">
                            <a href="properties-full-grid-1.html"><img src={backgroundImage}alt=""/></a>
                        </div>
                        <div class="sc-2-detail">
                            <h4 class="sc-jb-title"><a href="properties-full-grid-1.html">Miami</a></h4>
                            <span>145 Properties</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-lg-6 col-sm-6" >
                    <div class="small-category-2">
                        <div class="small-category-2-thumb img-10">
                            <a href="properties-full-grid-1.html"><img src={backgroundImage} alt=""/></a>
                        </div>
                        <div class="sc-2-detail">
                            <h4 class="sc-jb-title"><a href="properties-full-grid-1.html">Chicago</a></h4>
                            <span>112 Properties</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-lg-6 col-sm-6" >
                    <div class="small-category-2 si-mt">
                        <div class="small-category-2-thumb img-11">
                            <a href="properties-full-grid-1.html"><img src={backgroundImage} alt=""/></a>
                        </div>
                        <div class="sc-2-detail">
                            <h4 class="sc-jb-title"><a href="properties-full-grid-1.html">Houston</a></h4>
                            <span>254 Properties</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-lg-6 col-sm-6" >
                    <div class="small-category-2 no-mb si-mt">
                        <div class="small-category-2-thumb img-11">
                            <a href="properties-full-grid-1.html"><img src={backgroundImage} alt=""/></a>
                        </div>
                        <div class="sc-2-detail">
                            <h4 class="sc-jb-title"><a href="properties-full-grid-1.html">Orlando</a></h4>
                            <span>254 Properties</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default PopularPlaces;