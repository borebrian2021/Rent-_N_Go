import React from 'react';

const Reservations = () => {
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
                                    <tr>
                                        <td>Victoria Musyoka</td>
                                        <td>+25471234567</td>
                                        <td class="rating"><span>22/10/2022 10:00 AM</span></td>
                                        <td class="rating"><span>22/10/2022 5:00 PM</span></td>
                                        <td class="status"><span class=" active">Ksh. 60,000</span></td>
                                        <td class="edit">Verified</td>
                                    </tr>
                                    <tr>
                                        <td>Victoria Musyoka</td>
                                        <td>+25471234567</td>
                                        <td class="rating"><span>22/10/2022 10:00 AM</span></td>
                                        <td class="rating"><span>22/10/2022 5:00 PM</span></td>
                                        <td class="status"><span class=" active">Ksh. 60,000</span></td>
                                        <td class="edit">Verified</td>

                                    </tr> <tr>
                                        <td>Victoria Musyoka</td>
                                        <td>+25471234567</td>
                                        <td class="rating"><span>22/10/2022 10:00 AM</span></td>
                                        <td class="rating"><span>22/10/2022 5:00 PM</span></td>
                                        <td class="status"><span class=" active">Ksh. 60,000</span></td>
                                        <td class="edit">Verified</td>

                                    </tr> <tr>
                                        <td>Victoria Musyoka</td>
                                        <td>+25471234567</td>
                                        <td class="rating"><span>22/10/2022 10:00 AM</span></td>
                                        <td class="rating"><span>22/10/2022 5:00 PM</span></td>
                                        <td class="status"><span class=" active">Ksh. 60,000</span></td>
                                        <td class="edit">Verified</td>

                                    </tr> <tr>
                                        <td>Victoria Musyoka</td>
                                        <td>+25471234567</td>
                                        <td class="rating"><span>22/10/2022 10:00 AM</span></td>
                                        <td class="rating"><span>22/10/2022 5:00 PM</span></td>
                                        <td class="status"><span class=" active">Ksh. 60,000</span></td>
                                        <td class="edit">Verified</td>

                                    </tr>

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
