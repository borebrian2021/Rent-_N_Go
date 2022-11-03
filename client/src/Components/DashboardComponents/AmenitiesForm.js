import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import amebities from '../../Image/amenitties.gif'
const AmenitiesForm = ({ clientSpaces }) => {
    const [useAmenities, setAmenities] = useState({
        space_id: "",
        item_name: "",
        price: "0"
    })
    //HANDLE CHANGE
    function handleChange(e) {
        const key = e.target.id;
        setAmenities({ ...useAmenities, [key]: e.target.value });
    }
    const handleSubmit = (e) => {
        //SET DUMMY CLIENT ID
        e.preventDefault()
        fetch("/amenities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                space_id: useAmenities.space_id,
                item_name: useAmenities.item_name,
                price: useAmenities.price,
            }),
        })
            .then((r) => r.json())
            .then((useAmenities) => {

                setAmenities({
                    ...useAmenities,
                    space_id: "",
                    item_name: "",
                    price: "",
                });
                toast.success('Amenity successfully submitted.')
            });
    }
    return (
        <div class="dashborad-box mb-0 mb-3 mt-3">
            {/* <img src="https://ibb.co/6NQ8X6n" className='illustrations' /> */}
      <img src={amebities} className="componentIllustation"/><br/>
<br/>
            <h4 class="heading pt-0">Amenity Upload Form</h4>
            <div class="section-inforamation">
                <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Select room number</label>

                                <select
                                    class="custom-select border"
                                    onChange={handleChange}
                                    id="space_id"
                                >
                                    <option value="" >
                                        --Select--
                                    </option>
                                    {clientSpaces.map((space) => {
                                        return (
                                            <option value={space.id} key={space.id}>
                                                {space.id}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div></div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Item name</label>
                                <input type="text" id="item_name" onChange={handleChange} value={useAmenities.item_name} class="form-control" placeholder="Enter amenity name" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Price</label>
                                <input type="text" id="price" value={useAmenities.price} onChange={handleChange} class="form-control" placeholder="Price" />
                            </div>
                        </div>

                    </div>
                    <button type="submit" class="btn btn-primary btn-lg mt-2">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default AmenitiesForm;
