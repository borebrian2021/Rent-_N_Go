import React from 'react';
import svg1 from '../../Image/time.gif';
import svg3 from '../../Image/proplr.gif';
import svg4 from '../../Image/buildings.gif';


const WhyChooseUs = () => {
    return (
        <section class="how-it-works bg-white-1 home18">
        <div class="container">
            <div class="sec-title">
                <h2><span>Why </span>Choose Us</h2>
                <p>We provide full service at every step.</p>
            </div>
            <div class="row service-1">
                <article class="col-lg-4 col-md-6 col-xs-12 serv" >
                    <div class="serv-flex">
                        <div class="art-1 img-13">
                            <img src={svg4}  lt=""/>

                            <h3>Wide Renge Of Properties</h3>
                        </div>
                        <div class="service-text-p">
                            <p class="text-center">lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.</p>
                        </div>
                    </div>
                </article>
                <article class="col-lg-4 col-md-6 col-xs-12 serv">
                    <div class="serv-flex">
                        <div class="art-1 img-14">
                            <img src={svg3} alt=""/>
                            <h3>Trusted by thousands</h3>
                        </div>
                        <div class="service-text-p">
                            <p class="text-center">lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.</p>
                        </div>
                    </div>
                </article>
                <article class="col-lg-4 col-md-6 col-xs-12 serv mb-0 pt" >
                    <div class="serv-flex arrow">
                        <div class="art-1 img-15">
                        <img src={svg1} alt=""/>

                            <h3>24/7 support</h3>
                        </div>
                        <div class="service-text-p">
                            <p class="text-center">lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    );
}

export default WhyChooseUs;
 