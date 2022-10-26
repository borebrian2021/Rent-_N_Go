import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
//SETTING THE CONSTANTS
const SpaceUploadForm = ({propertyData}) => {
    localStorage.setItem("property_id", 1)
    const [useSpace, setSpace] = useState({
        room_size: "",
        image_1: "https://ibb.co/nBWyj9K",
        image_2: "https://ibb.co/nBWyj9K",
        image_3: "https://ibb.co/nBWyj9K",
        description: "",
        price_per_hour: "",
        status_: "",
        space_category: "",
        property_id: localStorage.getItem("property_id")
    })
    //HANDLE CHANGE
    function handleChange(e) {
        const key = e.target.id;
        setSpace({ ...useSpace, [key]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/properties", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                room_size: useSpace.room_size,
                image_1: useSpace.image_1,
                image_2: useSpace.image_2,
                image_3: useSpace.image_3,
                description: useSpace.description,
                price_per_hour: useSpace.price_per_hour,
                status_: useSpace.status_,
                space_category: useSpace.space_category,
                property_id: useSpace.property_id
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
                            status_: "",
                            space_category: ""
                        });
                        toast.success('Property successfully submitted.')
                    });
                }
                else {
                    toast.error("Failed to upload properties, please check your form and try again")
                }


            })
    }
    return (
        <div class="dashborad-box mb-0 mb-3 mt-3">
            {/* <img src="https://ibb.co/6NQ8X6n" className='illustrations' /> */}
            <h4 class="heading pt-0">Space Upload Form</h4>
            <div class="section-inforamation">
                <form onSubmit={handleSubmit}>
                    <div class="row">
                    <div class="col-sm-6">
                            <div class="form-group">
                                <label>Select Properties</label>

                                <select class="custom-select border" >
                                    {
                                propertyData.map((property) =>{
                                return (
                                    <option value={property.id} key={property}>{property.property_name}</option>

                                  )})}
      
    
                                 </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Space size</label>
                                <input type="text" id="room_size" onChange={handleChange} value={useSpace.room_size} class="form-control" placeholder="Enter Space size" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Image 1 url</label>
                                <input type="text" id="image_1" onChange={handleChange} value={useSpace.image_1} class="form-control" placeholder="Enter Image 1 url" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Image 2 url</label>
                                <input type="text" id="image_2" onChange={handleChange} value={useSpace.image_2} class="form-control" placeholder="Enter Image 2 url" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Image 3 url</label>
                                <input type="text" id="image_3" onChange={handleChange} value={useSpace.image_3} class="form-control" placeholder="Enter Image 3 url" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Description</label>
                                <input type="text" id="description" onChange={handleChange} value={useSpace.description} class="form-control" placeholder="Enter Description" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Price per hour</label>
                                <input type="text" id="price_per_hour" onChange={handleChange} value={useSpace.price_per_hour} class="form-control" placeholder="Enter Price per hour" />
                            </div>
                        </div>
                       
                        <div class="col-sm-6">
                            <div class="form-group">
                            <label>Space Category</label><br/>

                                <select id="space_category" value={useSpace.space_category} class="form-control" onChange={handleChange}  >
                                    <option value="room" >Room</option>
                                    <option value="field">Field</option>
                                </select>

                            </div>
                            </div>
                               
                        <div class="col-sm-6">
                            <div class="form-group">
                            <label>Status</label><br/>

                                <select id="status_" value={useSpace.status_} onChange={handleChange} class="form-control" >
                                    <option value="ocupied" >Ocupied</option>
                                    <option value="vacant">Vacant</option>
                                </select>

                            </div>
                            </div>
                      
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg mt-2">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default SpaceUploadForm;