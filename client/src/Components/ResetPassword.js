import React from 'react';

const ResetPassword = () => {
    return (
        <div>
            <section class="headings">
                <div class="text-heading text-center">
                    <div class="container">
                        <h6 className='m-3'>Reset password</h6>
                    </div>
                </div>
            </section>
                <div id="login">
                    <div class="login text-center">
                        <form autoComplete='off'>
<input hidden autoComplete='off'/>
                            <div class="form-group">
                                <label>Please enter registered email.</label>
                                <input type="email" class="form-control authinputs p-3" autoComplete='off' placeholder='Email' name="email" id="email" />
                                <i class="icon_mail_alt"></i>
                            </div>
                          
                         
                            <input type="submit" value="Submit" class="btn_1 rounded "/>
                            <div class="text-center add_top_10">New to Find Houses? <strong><a href="register.html" class="default_color">Sign up!</a></strong></div>

                            <div class="access_social m-3">
                                {/* <a href="#0" class="social_bt facebook">Login with Facebook</a> */}
                                {/* <a href="#0" class="social_bt linkedin">Login with Linkedin</a> */}
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default ResetPassword;
