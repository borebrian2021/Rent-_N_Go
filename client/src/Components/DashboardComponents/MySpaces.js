import React from "react";
import myspaces from '../../Image/my_poperties.gif'
const MySpaces = ({
  clientSpaces,
  setSubmitSpaceBtn,
  setClientSpaces,
  setSpace,
  setSpaceID,
}) => {
  function handleDelete(id) {
    fetch("/spaces/" + id, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => updateAfterDelete(id));
  }

  function updateAfterDelete(id) {
    const updated = clientSpaces.filter((space) => space.id !== id);
    setClientSpaces(updated);
  }

  return (
    <div class="my-properties">
      <img src={myspaces} className="componentIllustation"/><br/>

      <table class="table-responsive">
        <thead>
          <tr>
            <th class="pl-2">My Spaces</th>
            <th class="p-0"></th>
            <th>Description</th>
            <th>Size</th>
            <th>Category</th>
            <th>Status</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clientSpaces.map((item) => {
            return (
              <tr key={item.id}>
                <td class="image myelist">
                  {/* to brian please check up here */}
                  <a href="single-property-1.html">
                    <img alt="image-1" src={item.image_1} class="img-fluid" />
                  </a>

                  {/* <a href="single-property-1.html">
                    <img alt="image-2" src={item.image_2} class="img-fluid" />
                  </a>

                  <a href="single-property-1.html">
                    <img alt="image-3" src={item.image_3} class="img-fluid" />
                  </a> */}
                </td>
                <td>
                  <div class="inner">
                    <a href="single-property-1.html">
                      <h2>{item.space_category}</h2>
                    </a>
                    <figure>
                      <i class="lni-map-marker"></i> {item.location}
                    </figure>
                    <ul class="starts text-left mb-0">
                      <li class="mb-0">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="mb-0">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="mb-0">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="mb-0">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="mb-0">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="ml-3">(6 Reviews)</li>
                    </ul>
                  </div>
                </td>
                <td>{item.description}</td>
                <td>{item.room_size}</td>
                <td>{item.space_category}</td>
                <td>{item.status}</td>
                <td>
                  {" "}
                  <strong>$ {item.price_per_hour}</strong>
                </td>
                <td class="actions">
                  <a class="edit">
                    <i
                      class="lni-pencil"
                      onClick={() => {
                        setSubmitSpaceBtn(false);
                        setSpace({
                          room_size: item.room_size,
                          image_1: item.image_1,
                          image_2: item.image_2,
                          image_3: item.image_3,
                          description: item.description,
                          price_per_hour: item.price_per_hour,
                          status_: item.status,
                          space_category: item.space_category,
                          property_id: item.property_id,
                        });
                        setSpaceID(item.id);
                      }}
                    >
                      Edit
                    </i>
                  </a>
                  <a>
                    <i
                      class="far fa-trash-alt"
                      onClick={() => handleDelete(item.id)}
                    ></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div class="pagination-container">
        <nav>
          <ul class="pagination">
            <li class="page-item">
              <a class="btn btn-common" href="#">
                <i class="lni-chevron-left"></i> Previous{" "}
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="btn btn-common" href="#">
                Next <i class="lni-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MySpaces;
