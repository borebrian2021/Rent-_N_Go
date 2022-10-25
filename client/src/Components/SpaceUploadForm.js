import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
//SETTING THE CONSTANTS
const SpaceUploadForm = () => {
    localStorage.setItem("property_id",1)
    const [useSpace, setSpace] = useState({
        room_size: "",
        image_1: "https://ibb.co/nBWyj9K",
        image_2: "https://ibb.co/nBWyj9K",
        image_3: "https://ibb.co/nBWyj9K",
        description: "",
        price_per_hour: "",
        status: "",
        space_category: "",
        property_id: localStorage.getItem("property_id")
    })
    //HANDLE CHANGE
    function handleChange(e) {
        const key = e.target.id;
        setProperty({ ...useSpace, [key]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/properties", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                room_size: userProperty.room_size,
                image_1: userProperty.image_1,
                image_2: userProperty.image_2,
                image_3: userProperty.image_3,
                description: userProperty.description,
                price_per_hour: userProperty.price_per_hour,
                status: userProperty.status,
                space_category: userProperty.space_category,
                property_id: userProperty.property_id
            }),
        })
            .then((rawData) => {
                if (rawData.ok) {
                    rawData.json().then((data) => {
                        setSpace({
                            ...useSpace,
                            room_size: "",
                            image_1: "",
                            image_2: "",
                            image_3: "",
                            description: "",
                            price_per_hour: "",
                            status: "",
                            space_category: ""
                        });
                        toast.success('Property successfully submitted.')
                    });
                }
                else {
                    toast.error("Failed to upload properties, please check your form and try again")
                }
                return (
                    <div class="dashborad-box mb-0 mb-3 mt-3">
            {/* <img src="https://ibb.co/6NQ8X6n" className='illustrations' /> */}
        <h4 class="heading pt-0">Property Upload Form</h4>
        <div class="section-inforamation">
            <form onSubmit={handleSubmit}>
                <div class="row">
                <div class="col-sm-6">
                        <div class="form-group">
                            <label>Space size</label>
                            <input type="text"  id="propertyName" onChange={handleChange} value={userProperty.propertyName} class="form-control" placeholder="Enter property" />
                        </div>
                    </div>
                     <div class="col-sm-6">
                        <div class="form-group">
                            <label>Image 1 url</label>
                            <input type="text"  id="propertyName" onChange={handleChange} value={userProperty.propertyName} class="form-control" placeholder="Enter property" />
                        </div>
                    </div>  <div class="col-sm-6">
                        <div class="form-group">
                            <label>Image 2 url</label>
                            <input type="text"  id="propertyName" onChange={handleChange} value={userProperty.propertyName} class="form-control" placeholder="Enter property" />
                        </div>
                    </div>  <div class="col-sm-6">
                        <div class="form-group">
                            <label>Space size</label>
                            <input type="text"  id="propertyName" onChange={handleChange} value={userProperty.propertyName} class="form-control" placeholder="Enter property" />
                        </div>
                    </div>  <div class="col-sm-6">
                        <div class="form-group">
                            <label>Space size</label>
                            <input type="text"  id="propertyName" onChange={handleChange} value={userProperty.propertyName} class="form-control" placeholder="Enter property" />
                        </div>
                    </div>  <div class="col-sm-6">
                        <div class="form-group">
                            <label>Space size</label>
                            <input type="text"  id="propertyName" onChange={handleChange} value={userProperty.propertyName} class="form-control" placeholder="Enter property" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Location</label>
                            <input type="text" id="location" value={userProperty.location} onChange={handleChange} class="form-control" placeholder="Location" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Image Url</label>
                            <input id="imageUrl" value={userProperty.imageUrl} onChange={handleChange} type="text" class="form-control" placeholder="" />
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg mt-2">Submit</button>
            </form>
        </div>
         </div>
                );
            })
        }
    }
export default SpaceUploadForm;