import React from 'react';

const MoreService = (props) => {
    const { name, price, lecture, img } = props.service
    return (
        <div class="container">
            <div class="row m-4">
                <div class="col-lg-6 courses">
                    <div>
                        <img className='images img-fluid' src={img} alt="" />
                    </div>
                    <div>
                        <h1>Name: {name}</h1>
                        <h4>Price :{price}</h4>
                        <h4>Total Lecture: {lecture}</h4>
                        <button className='btn btn-primary m-4'>Purchase</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MoreService;