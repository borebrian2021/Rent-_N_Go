import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import propertyIllustration from '../../Image/properties.gif'
//SETTING THE CONSTANTS
const PropertyUploadForm = ({
  propertyData,
  setPropertyData,
  id,
  setProperty,
  userProperty,
  submitBtn,
  propertyId,
  setSubmitBtn,
}) => {
  //HANDLE CHANGE
  function handleChange(e) {
    const key = e.target.id;
    setProperty({ ...userProperty, [key]: e.target.value });
  }
  const handleSubmit = (e) => {
    //SET DUMMY CLIENT ID
    localStorage.setItem("client_id", 1);
    e.preventDefault();
    fetch("/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: id,
        property_name: userProperty.propertyName,
        location: userProperty.location,
        image_url: userProperty.imageUrl,
      }),
    })
      .then((r) => r.json())
      .then((userProperty) => {
        setPropertyData([...propertyData, userProperty]);
        setProperty({
          ...userProperty,
          propertyName: "",
          location: "",
          image_url: "",
        });
        toast.success("Property successfully submitted.");
      });
  };

  function handleEdit() {
    const form_data = {
      client_id: id,
      property_name: userProperty.propertyName,
      location: userProperty.location,
      image_url: userProperty.imageUrl,
    };
    fetch("/properties/" + propertyId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form_data),
    })
      .then((r) => r.json())
      .then((updatedItem) => updateList(updatedItem));
  }

  function updateList(updatedItem) {
    const updatedItems = propertyData.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setPropertyData(updatedItems);
    setSubmitBtn(true);
    setProperty({
      propertyName: "",
      location: "",
      imageUrl: "https://ibb.co/vXqRQvG",
    });
  }

  return (
    <div class="dashborad-box mb-0 mb-3 mt-3">

      {/* <img src={property_image}  className='illustrations ' /> */}
      <h4 class="heading pt-0">
      <img src={propertyIllustration} className="componentIllustation"/><br/>

        {submitBtn ? "Property Upload Form" : "Property Edit Form"}
      </h4>
      <div class="section-inforamation">
        <form onSubmit={submitBtn ? handleSubmit : handleEdit}>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>Property Name</label>
                <input
                  type="text"
                  id="propertyName"
                  onChange={handleChange}
                  value={userProperty.propertyName}
                  class="form-control"
                  placeholder="Enter property"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Location</label>
                <input
                  type="text"
                  id="location"
                  value={userProperty.location}
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Location"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Image Url</label>
                <input
                  id="imageUrl"
                  value={userProperty.imageUrl}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-lg mt-2">
            {submitBtn ? "Submit" : "Edit Property"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default PropertyUploadForm;
