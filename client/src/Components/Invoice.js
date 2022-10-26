import React from 'react';
import logo from '../Image/logo1.png'
const Invoice = () => {
    return (
        <div className='row'>
        <div class="col-lg-9 col-md-12 col-xs-12 py-0 pl-0 user-dash2">
             <div class="print-button-container login">
                            <a href="javascript:window.print()" class="print-button btn btn-success">Print this invoice</a>
                        </div>
                        <div class="invoice mb-0">
                            <div class="card border-0">
                                <div class="card-body p-0">
                                    <div class="row p-5 the-five">
                                        <div class="col-md-6">
                                            <img src={logo} width="80" alt="Logo"/>
                                        </div>

                                        <div class="col-md-6 text-right">
                                            <p class="font-weight-bold mb-1">Invoice #1</p>
                                            <p class="text-muted">Due to:8/10/2022 5:00pm</p>
                                        </div>
                                    </div>

                                    <hr class="my-5"/>

                                    <div class="row pb-5 p-5 the-five">
                                        <div class="col-md-6">
                                            <h3 class="font-weight-bold mb-4">Invoice To</h3>
                                            <p class="mb-0 font-weight-bold">Rent & Go Limited</p>
                                            <p class="mb-0">Moringa School, Ngong Road, Kenya</p>
                                            <p class="mb-0">mwenda@gmail.com</p>
                                        </div>

                                        <div class="col-md-6 text-right">
                                            <h3 class="font-weight-bold mb-4">Payment Details</h3>
                                            <p class="mb-1"><span class="text-muted">VAT: </span> 0</p>
                                            <p class="mb-1"><span class="text-muted">Payment Mode: </span> DPO Payment</p>
                                            <p class="mb-1"><span class="text-muted">Name: </span> Mwenda Sharon</p>
                                        </div>
                                    </div>

                                    <div class="row p-5 the-five">
                                        <div class="col-md-12">
                                            <table class="table">
                                                <thead>
                                                    <tr colspan="5">
                                                        <th>Property details</th>
                                                    </tr>
                                                    <tr>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Property Name</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Room Number</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">KickOff</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">End</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Hours In space</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Price/hr</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Rento Plaza</td>
                                                        <td>RE44</td>
                                                        <td>7/10/2022 10:00am</td>
                                                        <td>8/10/2022 5:00pm</td>
                                                        <td>24hrs</td>
                                                        <td>Ksh. 500</td>
                                                        <td>Ksh. 2500</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table class="table">
                                                <thead>
                                                    <tr colspan="5">
                                                        <th>Amenities</th>
                                                    </tr>
                                                    <tr>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Item</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Price/ Hire </th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Quantity</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                        <td>Furnished High Table</td>
                                                        <td>Ksh 5000.00</td>
                                                        <td>2</td>
                                                        <td>Ksh. 10,000.00</td>
                                                    
                                                      


                                                    </tr> <tr>
                                                        <td>500ml Soda </td>
                                                        <td>Ksh 50.00</td>
                                                        <td>12</td>
                                                        <td>Ksh. 600.00</td>
                                                    
                                                      


                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row-reverse bg-dark text-white p-4">
                                        <div class="py-3 px-5 text-left">
                                            <div class="mb-2">Grand Total</div>
                                            <div class="h2 font-weight-light">Ksh. 3,100.00</div>
                                        </div>

                                        <div class="py-3 px-5 text-right">
                                            <div class="mb-2">VAT</div>
                                            <div class="h2 font-weight-light">0%</div>
                                        </div>

                                        <div class="py-3 px-5 text-left">
                                            <div class="mb-2">Sub - Total</div>
                                            <div class="h2 font-weight-light">ksh. 3,100.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
        </div>
    );
}

export default Invoice;
