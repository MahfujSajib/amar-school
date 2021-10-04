import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const { name, img, price, lecture } = props.course
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
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Course;


