import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div>
                <h1 className='about'>About Us</h1>
            </div>
            <div>
                <h3>What We are</h3>
                <hr />
                <img src="https://image.shutterstock.com/image-photo/innovative-learning-creative-educational-study-260nw-1471288775.jpg" alt="" />
                <br />
                <p className='para'>We take pride in nurturing students’ academic abilities. Our admissions process ensures the establishment of an outstanding student body.Every individual has the potential to create change, whether in their life, their community, or the world. The transformative power of education is what unlocks that potential. Yet, access to high-quality education has been a privilege of the few. Back in 2012, we realized it was a time for a seismic shift in learning. From the tried and true to the leading edge. From “for some” to “for all.” By opening the classroom through online learning, <span className='quotation'>"Amar School"</span> empowers millions of learners to unlock their potential and become changemakers.</p>
            </div>
        </div>
    );
};

export default About;