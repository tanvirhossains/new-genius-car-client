import React, { createContext, useContext, useRef, useState } from 'react';
import loginImg from '../../../assets/images/login/login.svg'
import { AiFillEye, AiFillFacebook, AiFillGooglePlusCircle, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import Register from '../Register/Register';


export const LocationContext = createContext(null)
const Login = () => {

    const [errorMassage, setErrorMassage] = useState(null)
    const { loginManagin, googleSignIn } = useContext(AuthContext);

    const [showPass, setShowPass] = useState(false)


    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    console.log("login Page from:>>", from);
    console.log("login Page location:>>", location);
    // -------show password 
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

    // login with input 
    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        let errorCode = null;
        setErrorMassage(errorCode)
        loginManagin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                const currentU = {
                    email: user.email
                }


                fetch('http://localhost:8000/jwt', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentU)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        
                        // local storage is not the bast place to store jwt token
                        localStorage.setItem("genius-car-token", data.token)
                    })


                navigate(from, { replace: true });
                toast.success("🐮 Log in Successullty!")
                event.target.reset();
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                setErrorMassage(err.code)
            });
    }


    const googleLogIn = (event) => {
        googleSignIn()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const user = result.user;
                navigate(from, { replace: true });
                toast.success("Succesfully google log in !!")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const handleForgetPassword = () => {
        console.log("Forger");
    }

    const facebookLogIn = () => {

    }
    const linkedInLogIn = () => {

    }
    const value = { displayName: "tanvir" }
    return (
        <LocationContext.Provider value={value} >




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
                                New Here?

                                <Link to='/register' className='text-font font-blod mx-2 '>Register</Link>
                            </p>
                        </div>



                    </div>


                </div>
            </div>
        </LocationContext.Provider>
    );
};

export default Login;