import React, { useState, useEffect } from 'react';

const Reservations = ({profileData}) => {
    const [reservations, setReservations] = useState([]);
  useEffect(() => {
    // auto-login
    fetch("/reservations").then((r) => {
      if (r.ok) {
        r.json().then((reservations) => setReservations(reservations));
      }
    });
  }, []);
    return (
        <section class="user-page section-padding">
            <div class="container-fluid">
                <div class="row"></div>
                <div class="dashborad-box">
                    <h4 class="title">Reservations made</h4>
                    <div class="section-body listing-table">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Client Name</th>
                                        <th>Phone no</th>
                                        <th>KickOff</th>
                                        <th>End</th>
                                        <th>Paid</th>
                                        <th>Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                   {reservations.map((reservation) => {
                                    return (
                                        <tr key = {reservation.id}>
                                        <td>{profileData.first_name}&nbsp;{profileData.last_name}</td>
                                        <td>{profileData.phone_number}</td>
                                        <td class="rating"><span>{reservation.kickoff_date}</span></td>
                                        <td class="rating"><span>{reservation.end_date}</span></td>
                                        <td class="status"><span class=" active">{reservation.total_cash}</span></td>
                                        <td class="edit">Verified</td>
                                    </tr> )
                                   })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reservations;
