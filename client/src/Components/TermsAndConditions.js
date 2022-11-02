import React from 'react';
import TopBar from './TopBar';
import {Link} from "react-router-dom"
import termsIllustration from '../Image/terms_and_conditions.svg';
const TermsAndConditions = () => {
    return (
        <div>
            <TopBar/>
        <section class="headings">
       <div class="text-heading text-center">
           <div class="container">
            <img src={termsIllustration} className="terms_illustration"/>
               <h6 className='m-3'>Please read our terms and conditions first.</h6>
           </div>
       </div>
   </section>


       <div class="terms text-left">
        <h4 className='default_color'>Terms & Conditions</h4>
        <p>Unlike Privacy Policies, which are required by laws such as the GDPR, CalOPPA and many others, there's no law or regulation on Terms and Conditions.

However, having a Terms and Conditions gives you the right to terminate the access of abusive users or to terminate the access to users who do not follow your rules and guidelines, as well as other desirable business benefits.

It's extremely important to have this agreement if you operate a SaaS app.

Here are a few examples of how this agreement can help you:

If users abuse your website or mobile app in any way, you can terminate their account. Your "Termination" clause can inform users that their accounts would be terminated if they abuse your service.
If users can post content on your website or mobile app (create content and share it on your platform), you can remove any content they created if it infringes copyright. Your Terms and Conditions will inform users that they can only create and/or share content they own rights to. Similarly, if users can register for an account and choose a username, you can inform users that they are not allowed to choose usernames that may infringe trademarks, i.e. usernames like Google, Facebook, and so on.
If you sell products or services, you could cancel specific orders if a product price is incorrect. Your Terms and Conditions can include a clause to inform users that certain orders, at your sole discretion, can be canceled if the products ordered have incorrect prices due to various errors.
And many more examples.</p>
<div class="text-center add_top_10">
             Done reading?{" "}
              <strong>
                <Link to="/signup" class="default_color">
                Continue with Sign up!
                </Link>
              </strong>
            </div>
       </div>
 
   </div>
    );
}

export default TermsAndConditions;
