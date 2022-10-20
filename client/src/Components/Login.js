import React from 'react';

const Login = () => {
    return (
        <div>
        <section class="headings">
       <div class="text-heading text-center">
           <div class="container">
               <h6>Login</h6>
           </div>
       </div>
   </section>

   <div id="login">
       <div class="login">
           <form>
            
               <div class="form-group">
                   <label>Email</label>
                   <input type="email" class="form-control authinputs p-3" placeholder='Email' name="email" id="email"/>
                   <i class="icon_mail_alt"></i>
               </div>
               <div class="form-group">
                   <label>Password</label>
                   <input type="password" class="form-control" placeholder='Password' name="password" id="password" value=""/>
                   <i class="icon_lock_alt"></i>
               </div>
               <div class="fl-wrap filter-tags clearfix add_bottom_30">
                   <div class="checkboxes float-left">
                       <div class="filter-tags-wrap">
                           <input id="check-b" type="checkbox" name="check"/>
                           <label for="check-b">Remember me</label>
                       </div>
                   </div>
                   <div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
               </div>
               <div class="divider"><span>Or</span></div>

               <div class="access_social">
                   {/* <a href="#0" class="social_bt facebook">Login with Facebook</a> */}
                   <a href="#0" class="social_bt google">Login with Google</a>
                   {/* <a href="#0" class="social_bt linkedin">Login with Linkedin</a> */}
               </div>
               <a href="#0" class="btn_1 rounded full-width">Login to Find Houses</a>
               <div class="text-center add_top_10">New to Find Houses? <strong><a href="register.html">Sign up!</a></strong></div>
           </form>
       </div>
   </div>
   </div>
    );
}

export default Login;
