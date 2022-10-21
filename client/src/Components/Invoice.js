import React from 'react';
import logo from '../Image/logo1.png'
const Invoice = () => {
    return (
        <div className='row'>
        <div class="col-lg-9 col-md-12 col-xs-12 py-0 pl-0 user-dash2">
             <div class="print-button-container login">
                            <a href="javascript:window.print()" class="print-button">Print this invoice</a>
                        </div>
                        <div class="invoice mb-0">
                            <div class="card border-0">
                                <div class="card-body p-0">
                                    <div class="row p-5 the-five">
                                        <div class="col-md-6">
                                            <img src="images/logo.svg" width="80" alt="Logo"/>
                                        </div>

                                        <div class="col-md-6 text-right">
                                            <p class="font-weight-bold mb-1">Invoice #1</p>
                                            <p class="text-muted">Due to: No due date</p>
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
                                                        <th class="border-0 text-uppercase small font-weight-bold">Description</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Product</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Quantity</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">VAT (16%)</th>
                                                        <th class="border-0 text-uppercase small font-weight-bold">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Standard Plan</td>
                                                        <td>$40</td>
                                                        <td>$7.55</td>
                                                        <td>$47.55</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row-reverse bg-dark text-white p-4">
                                        <div class="py-3 px-5 text-left">
                                            <div class="mb-2">Grand Total</div>
                                            <div class="h2 font-weight-light">$42.79</div>
                                        </div>

                                        <div class="py-3 px-5 text-right">
                                            <div class="mb-2">Discount</div>
                                            <div class="h2 font-weight-light">10%</div>
                                        </div>

                                        <div class="py-3 px-5 text-left">
                                            <div class="mb-2">Sub - Total</div>
                                            <div class="h2 font-weight-light">$47.55</div>
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
