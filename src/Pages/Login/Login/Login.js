import React, { useContext, useRef, useState } from 'react';
import loginImg from '../../../assets/images/login/login.svg'
import { AiFillEye, AiFillFacebook, AiFillGooglePlusCircle, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {

    const [errorMassage, setErrorMassage] = useState(null)
    const { loginManagin } = useContext(AuthContext);
    
    const [showPass, setShowPass] = useState(false)

    const passwordInput = useRef(null);


    const handleShowPass = () => {
        if (showPass === true) {
            setShowPass(false)
            passwordInput.current.type = "password"
            console.log("password");

        } else {
            setShowPass(true)
            passwordInput.current.type = "text"
            console.log("now");
        }
    }


    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        let errorCode = null;
        setErrorMassage(errorCode)
        loginManagin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success("🐮 Log in Successullty!")
                event.target.reset();
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                setErrorMassage(err.code)
            });
    }


    const handle = (event) => {
        console.log("loig");
    }

    const handleForgetPassword = () => {
        console.log("Forger");
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">


                <div className="text-center lg:text-left lg:w-1/2 lg:mx-4">
                
                    <img src={loginImg} alt="" />
                </div>
                <Toaster />


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
                            <div className=' flex'>
                                <input type="password" ref={passwordInput} placeholder="password" name='password' required className="input input-bordered w-full" />
                                <span className='absolute right-10 mt-3 text-3xl' onClick={handleShowPass}>
                                    <AiFillEye />
                                </span>

                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover" onClick={handleForgetPassword}>Forgot password?</a>
                            </label>
                            <p>{errorMassage}</p>
                        </div>

                        <button className="btn bg-font border-0 hover:bg-none w-full mt-3">Log in</button>

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

                        <p className='items-center flex justify-center mb-10'>
                            New Here?

                            <Link to='/register' className='text-font font-blod mx-2 '>Register</Link>
                        </p>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Login;