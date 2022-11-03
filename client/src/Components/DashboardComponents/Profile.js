import React from 'react';
import profileIllustration from '../../Image/profile.gif'

const Profile = ({profileData}) => {
    console.log(profileData)
    return (
        <div class="dashborad-box mb-0">
            <img src={profileIllustration} className="componentIllustation"/>
        <h4 class="heading pt-0">Personal Information</h4>
        <div class="section-inforamation">
            <form>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" class="form-control" value={profileData.first_name} placeholder="Enter your First name"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" class="form-control"value={profileData.last_name} placeholder="Enter your Last name"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="text" class="form-control" value={profileData.email} placeholder="Ex: example@domain.com"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="text" class="form-control" value={profileData.phone_number}  placeholder="Ex: +1-800-7700-00"/>
                        </div>
                    </div> <div class="col-sm-6">
                        <div class="form-group">
                            <label>Profile URL</label>
                            <input type="text" class="form-control" value={profileData.profile_url}  placeholder="Ex: +1-800-7700-00"/>
                        </div>
                    </div>
    
                    
                </div>
                {/* <div class="password-section">
                    <h6>Update Password</h6>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>New Password</label>
                                <input type="password" class="form-control" placeholder="Write new password"/>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Repeat Password</label>
                                <input type="password" class="form-control" placeholder="Write same password again"/>
                            </div>
                        </div>
                    </div>
                </div> */}
                <button type="submit" class="btn btn-primary btn-lg mt-2">Update Profile</button>
            </form>
        </div>
    </div>
    );
}

export default Profile;
