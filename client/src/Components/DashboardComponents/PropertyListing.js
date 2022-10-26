import React from 'react';

const PropertyListing = ({propertyData}) => {
    console.log(propertyData)
    return (
        <div class="my-properties">
                            <table class="table-responsive">
                                <thead>
                                    <tr>
                                        <th class="pl-2">My Properties</th>
                                        <th class="p-0"></th>
                                        <th>Date Added</th>
                                        <th>Views</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {propertyData.map((item)=>{return(
                                   <tr key={item.id}>
                                   
                                   <td class="image myelist">
                                       <a href="single-property-1.html"><img alt="my-properties-3" src={item.image_url} class="img-fluid"/></a>
                                   </td>
                                   <td>
                                       <div class="inner">
                                           <a href="single-property-1.html"><h2>{item.property_name}</h2></a>
                                           <figure><i class="lni-map-marker"></i> {item.location}</figure>
                                           <ul class="starts text-left mb-0">
                                               <li class="mb-0"><i class="fa fa-star"></i>
                                               </li>
                                               <li class="mb-0"><i class="fa fa-star"></i>
                                               </li>
                                               <li class="mb-0"><i class="fa fa-star"></i>
                                               </li>
                                               <li class="mb-0"><i class="fa fa-star"></i>
                                               </li>
                                               <li class="mb-0"><i class="fa fa-star"></i>
                                               </li>
                                               <li class="ml-3">(6 Reviews)</li>
                                           </ul>
                                       </div>
                                   </td>
                                   <td>08.14.2020</td>
                                   <td>163</td>
                                   <td class="actions">
                                       <a href="#" class="edit"><i class="lni-pencil"></i>Edit</a>
                                       <a href="#"><i class="far fa-trash-alt"></i></a>
                                   </td>
                               </tr>
                                    ))
                                   
                                    }
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

export default PropertyListing;
