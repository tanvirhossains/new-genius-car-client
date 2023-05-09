import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'
import "./About.css"

const About = () => {
    return (
        <div>
            <div className="hero min-h-scree bg-slate-400-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src={person} className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>

                    <div className=' lg:w-1/2 relative mb-11 full-containe max-w-sm'>
                        <div class="img-card">
                            <img class="image2 w-4/5 h-4/5 relative" alt='img' src={person} />
                            <img class="image1 absolute right-4 w-3/5 rounded-lg   top-1/2 " alt='img' src={parts} />
                        </div>
                    </div>


                </div>
            </div>
            {/* <div className='relative mb-11 full-container'>
                <div class="img-card">
                    <img class="image1" src={person} />
                    <img class="image2" src={parts} />
                </div>
            </div> */}
        </div>
    );
};

export default About;