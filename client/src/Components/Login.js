import React, {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import TopBar from './TopBar';
import {Link,useNavigate} from 'react-router-dom'
import LoginGoogle from './GoogleLogin';


const Login = () => {
    //NAVIGATE
    const navigate=useNavigate();
    const [userDetails, setUserdetails] = useState({
        email: "",
        password: "",
    })

    //HANDLE CHANGE
    function handleChange(e) {
        const key = e.target.id;
        setUserdetails({ ...userDetails, [key]: e.target.value });
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if(userDetails.email =="" || userDetails.password == ""){
            toast.error("Some fields are required")
        }
        else{

            fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: userDetails.email,
                    password: userDetails.password,
                }),
            })
            .then((rawData) => {
                if (rawData.ok) {
                    rawData.json().then((data) => {
                        // setUserProfile(data);
                        // localStorage.setItem("signup_id",data.id)
                        // console.log(localStorage.getItem("signup_id"));
                        console.log(data)

                        toast.success("Logged in successfully!")
                        
                setTimeout(function () {
                  
                    localStorage.setItem("user_id",data.id)
                    localStorage.setItem("user_data",JSON.stringify(data))
                    navigate("/dashboard")



                }, 2000);
                    })
                }
                else{
                 
                    toast.error('Wrong email or password')
                }
            })
        }

    }

   

    return (
        <div>
            <TopBar/>
            <Toaster/>
            <section class="headings">
                <div class="text-heading text-center">
                    <div class="container">
                        <h6 className='m-3'>Welcome back ,please login</h6>
                    </div>
                </div>
            </section>

            <div id="login">
                <div class="login text-left">
                    <form autocomplete="off" onSubmit={handleSubmit}>
                    <input autocomplete="false" name="hidden" type="text" style={{display:"none"}}/>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email " value={userDetails.email} autoComplete="off" onChange={handleChange} id="email" class="form-control authinputs p-3" placeholder='Email'    />
                            <i class="icon_mail_alt"></i>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" value={userDetails.password} autoComplete="off"  onChange={handleChange} id="password" class="form-control authinputs"  placeholder='Password' name="password"  />
                            <i class="icon_lock_alt"></i>
                        </div>
                        <div class="fl-wrap filter-tags clearfix add_bottom_30">
                            <div class="checkboxes float-left">
                                <div class="filter-tags-wrap">
                                    <input id="check-b" type="checkbox" name="check" />
                                    <label for="check-b">Remember me</label>
                                </div>
                            </div>
                            <div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                        </div>

                        <input href="#0" class="btn_1 rounded " value="Log In" type="submit" />
                        <div class="text-center add_top_10">New to Find Houses? <strong><Link to="/signup" class="default_color">Sign up!</Link></strong></div>

                        <div class="access_social m-3">
                            {/* <a href="#0" class="social_bt facebook">Login with Facebook</a> */}
                            <a href="#0" class="social_bt google">{<LoginGoogle/> } </a>
                            {/* <a href="#0" class="social_bt linkedin">Login with Linkedin</a> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Login;
