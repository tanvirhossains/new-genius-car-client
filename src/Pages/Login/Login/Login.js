import React from 'react';
import loginImg from '../../../assets/images/login/login.svg'
import { AiFillFacebook, AiFillGooglePlusCircle, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

const Login = () => {

    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);
    }


    const handle = (event) => {
        console.log("loig");
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">


                <div className="text-center lg:text-left lg:w-1/2 lg:mx-4">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1>
                    
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    <img src={loginImg} alt="" />
                </div>


                <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-center text-3xl font-bold my-4'>Log In</h1>
                    <form className="card-body" onSubmit={handleLogIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                      
                        <button className="btn bg-font border-0 hover:bg-none w-full mt-3">Button</button>
                   
                    </form>


                    <div className='text-center '>
                        <h1 className='text-1xl'>Or Sign in with </h1>
                        <p className='flex  justify-center text-5xl'>
                            <span onClick={handle} className='mx-1 my-3 mb-4 text-blue-500 border-1  p-'>

                                <AiOutlineFacebook />
                            </span>
                            <span onClick={handle} className='mx-1 my-3 mb-4 text-blue-900 '>

                                <AiOutlineLinkedin />
                            </span>

                            <span onClick={handle} className='mx-1 my-3 mb-4 '>
                                <AiFillGooglePlusCircle />
                            </span>
                        </p>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Login;