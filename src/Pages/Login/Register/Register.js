import React, { useContext, useRef, useState } from 'react';
import loginImg from '../../../assets/images/login/login.svg'
import { AiFillEye, AiFillFacebook, AiFillGooglePlusCircle, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const Register = () => {

    const [errorMassage, setErrorMassage] = useState(null)
    const [showPass, setShowPass] = useState(false)
    const [confirmShowPass, setConfirmShowPass] = useState(false)


    const { registerManaging, googleSignIn } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoUrl = event.target.photoUrl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPss = event.target.confirmPss.value;


        passwordInput.current.type = "password"
        confirmInput.current.type = "password"

        let errorCode = null
        setErrorMassage(errorCode)

        if (password !== confirmPss) {
            toast.error("Password didn't matched!!!")
            console.log("pawwrod not match");

        } else {
            registerManaging(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success("Register Successfully !")
                    event.target.reset();


                })
                .catch((error) => {
                    errorCode = error.code;
                    const errMassage = error.message;
                    setErrorMassage(errorCode)

                });
        }

    }




    const passwordInput = useRef(null);
    const confirmInput = useRef(null);

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
    const handleConfirmShowPass = () => {
        if (confirmShowPass === true) {
            setConfirmShowPass(false)
            confirmInput.current.type = "password"
            console.log("password");

        } else {
            setConfirmShowPass(true)
            confirmInput.current.type = "text"
            console.log("now");
        }
    }


    const handle = (event) => {
        console.log("loig");
    }
    const googleLogIn = (event) => {
        console.log("google log in ");
        googleSignIn()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const user = result.user;
                toast.success("Succesfully google log in !!")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
        console.log("loig");
    }



    const facebookLogIn = () => {

    }
    const linkedInLogIn = () => {

    }

    return (
        <div className="hero  bg-slate-200 p-10">
            <div className="hero-content flex-col lg:flex-row">

                <Toaster />

                <div className="text-center lg:text-left lg:w-1/2 lg:mx-4">
                    {/* <h1 className="text-5xl font-bold">Register now!</h1>
                    
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    <img src={loginImg} alt="" />
                </div>


                <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-center text-3xl font-bold my-4'>Register  In</h1>

                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Phot Url " name='photoUrl' className="input input-bordered" />
                        </div>
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

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <div className=' flex'>
                                <input type="password" ref={confirmInput} placeholder="confirm Password" name='confirmPss' required className="input input-bordered w-full" />
                                <span className='absolute right-10 mt-3 text-3xl' onClick={handleConfirmShowPass}>
                                    <AiFillEye />
                                </span>

                            </div>
                            <p >
                                {errorMassage}
                            </p>


                        </div>

                        <button className="btn bg-font border-0 hover:bg-none w-full mt-3">Register</button>

                    </form>


                    <div className='text-center '>
                        <h1 className='text-1xl'>Or Sign in with </h1>
                        <p className='flex  justify-center text-5xl'>
                            <span onClick={facebookLogIn} className='mx-1 my-3 mb-4 text-blue-500 border-1  p-'>

                                <AiOutlineFacebook />
                            </span>
                            <span onClick={linkedInLogIn} className='mx-1 my-3 mb-4 text-blue-900 '>

                                <AiOutlineLinkedin />
                            </span>

                            <span onClick={googleLogIn} className='mx-1 my-3 mb-4 '>
                                <AiFillGooglePlusCircle />
                            </span>
                        </p>
                        <p className='items-center flex justify-center mb-10'>
                            Already Have an Account?

                            <Link to='/login' className='text-font font-blod mx-2 '>Login</Link>
                        </p>

                    </div>



                </div>


            </div>
        </div>
    );
};

export default Register;