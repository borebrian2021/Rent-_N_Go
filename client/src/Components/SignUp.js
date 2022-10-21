import React from 'react';

const SignUp = () => {
    return (
        <div>
        <section class="headings">
       <div class="text-heading text-center">
           <div class="container">
               <h6 className='m-3'>Welcome back ,lets get you started.</h6>
           </div>
       </div>
   </section>

   <div id="login">
       <div class="login text-left">
           <form>
            
               <div class="form-group">
                   <label>First Name</label>
                   <input type="text" class="form-control authinputs p-3" placeholder='First name' required/>
                   <i class="icon_mail_alt"></i>
               </div>
               <div class="form-group">
                   <label>Last Name</label>
                   <input type="text" class="form-control authinputs"  placeholder='Last name'  value="" required/>
                   <i class="icon_lock_alt"></i>
               </div>  <div class="form-group">
                   <label>Email</label>
                   <input type="email" class="form-control authinputs"  placeholder='Email'  value="" required/>
                   <i class="icon_lock_alt"></i>
               </div>  <div class="form-group">
                   <label>Phone number</label>
                   <input type="text" value="+254" class="form-control authinputs"  placeholder='Phone number'  required/>
                   <i class="icon_lock_alt"></i>
               </div>    <div class="form-group">
                   <label>Password</label>
                   <input type="password" class="form-control authinputs"  placeholder='Password'  value="" required/>
                   <i class="icon_lock_alt"></i>
               </div>  <div class="form-group">
                   <label>Confirm password</label>
                   <input type="password" class="form-control authinputs"  placeholder='Confirm password'  value="" required/>
                   <i class="icon_lock_alt"></i>
               </div>
               <div class="form-group">
                   <label>Profile url</label>
                   <input type="text" class="form-control authinputs"  placeholder='Profile url'  value="" required/>
                   <i class="icon_lock_alt"></i>
               </div>
               <div class="fl-wrap filter-tags clearfix add_bottom_30">
                   <div class="checkboxes float-left">
                       <div class="filter-tags-wrap">
                           <input id="check-b" type="checkbox" name="check"/>
                           <label for="check-b"><a href="register.html" class="default_color">Accept Term and Conditions</a></label>
                       </div>
                   </div>
               </div>
             
              
               <a href="#0" class="btn_1 rounded ">Submit</a>
               <div class="text-center add_top_10">New to Find Houses? <strong><a href="register.html" class="default_color">Sign up!</a></strong></div>

<div class="access_social m-3">
    {/* <a href="#0" class="social_bt facebook">Login with Facebook</a> */}
    <a href="#0" class="social_bt google">Login with Google</a>
    {/* <a href="#0" class="social_bt linkedin">Login with Linkedin</a> */}
</div>
           </form>
       </div>
   </div>
   </div>
    );
}

export default SignUp;
