import React, { useState,useEffect } from 'react';
import toast, { Toaster } from "react-hot-toast";

const AmenitiesList = ({ propertyData }) => {
    //AMEBITIES STATE
    const [amenitiesData, setAmenitiesData] = useState([])
    const [spaceList, setSpaceList] = useState([]);
    const [propertyId, setPropertyId] = useState([])
    const [spaceId, setSpaceId] = useState([])
    const [propertyData,setPropertyData]=useState([])
    setPropertyData(propertyData)

    //controlled forms

    //HANDLE CHANGE
    function handlePropertyChange(e) {
            // auto-login
            setPropertyId(e.target.value)
            console.log(e.target.value)
            fetch("/spaces/"+propertyId).then((r) => {
                if (r.ok) {
                    r.json().then((user) => {
                      setSpaceList(user)
                    }
                    );
                }
            });
    }

    //FETCH SPACE DATA
  
    return (
        <div class="my-properties">
            <h4>Space amenities</h4>
            <table class="table-responsive">

                <thead>
                    <tr>
                       
                        <th colSpan={3}>
                            <label>Select space number</label>
                            <select
                                class="custom-select border"
                                id="property_id"
                            >
                                <option value="" >
                                    --Select space number --
                                </option>
                                {
                                propertyData.amenities.map((property) => {
                                    return (
                                        <option value={property.id} key={property.id}>
                                            {property.property_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </th>

                    </tr>
                    <tr>
                        {/* <th colSpan="2">
                                <select
                                    class="custom-select border"
                                    // onChange={handleChange}
                                    id="space_id"
                                >
                                    <option value="" >
                                        --Select space number --
                                    </option>
                                    {spaceList.map((space) => {
                                        return (
                                            <option value={space.id} key={space.id}>
                                                {space.id}
                                            </option>
                                        );
                                    })}
                                </select>
                            </th> */}
                    </tr>
                    <tr>
                        <th class="pl-2">My amenities</th>
                        <th class="p-0"></th>
                        <th>Date Added</th>
                        <th>Item name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody >
                    {propertyData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td class="image myelist">
                                    <a href="single-property-1.html"><img alt="my-properties-3" src={item.image_url} class="img-fluid" /></a>
                                </td>
                                <td>
                                    <div class="inner">
                                        <a href="single-property-1.html"><h2>{item.property_name}</h2></a>
                                        <figure><i class="lni-map-marker"></i> {item.location}</figure>
                                    </div>
                                </td>
                                <td>08.14.2020</td>
                                <td>163</td>
                                <td class="actions">
                                    <a href="#" class="edit"><i class="lni-pencil"></i>Edit</a>
                                    <a href="#"><i class="far fa-trash-alt"></i></a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div class="pagination-container">
                <nav>
                    <ul class="pagination">
                        <li class="page-item"><a class="btn btn-common" href="#"><i class="lni-chevron-left"></i> Previous </a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="btn btn-common" href="#">Next <i class="lni-chevron-right"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default AmenitiesList;
