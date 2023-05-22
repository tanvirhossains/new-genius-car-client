import React, { useContext, useState } from 'react';
import { Navigate, json, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import PhoneInput from 'react-phone-input-2';

const Checkout = () => {

    const [countryCode, setCountryCode] = useState()
    const singleData = useLoaderData()
    const { user } = useContext(AuthContext)

    let navigate = useNavigate();

    const { serviceName, img, price, _id } = singleData;
    console.log(user);
    console.log(singleData);


    // current date
    const current = new Date(), locale = 'en-US'
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const time = current.getHours() + ':' + current.getMinutes();
    const day = current.toLocaleDateString("en-US", { weekday: "long" })

    // console.log(time);
    // console.log(day);


    const tDay = Date().toLocaleString()
    console.log("current:>", tDay);

    // name Spleting 
    const fullName = user?.displayName;

    let fName;
    let lName;
    if (user.displayName) {

        const spliteName = fullName?.split(" ")
        const firstNameInArray = spliteName?.slice(0, -1)
        fName = firstNameInArray?.join(" ") //if several element exixt in the array then it will convert to string using " " space
        lName = spliteName[spliteName?.length - 1] // getting the last element of the array of the user full name
        const pNumber = user?.phoneNumber

        console.log(lName);
        console.log(fName);
    }


    const handleOrderConfirm = (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const userName = `${firstName} ${lastName}`
        const phone = event.target.phone.value;
        const email = user?.email || "unregistered";
        const message = event.target.message.value;


        const len = phone.length


        const order = {
            service: _id,
            serviceName,
            customer: userName,
            email,
            date,
            time,
            day,
            price,
            imgUrl: img,
            phone,
            status: "Pending",
            message
        }
        console.log(order);

        fetch("http://localhost:8000/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order)


        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    event.target.reset()
                    navigate('/')

                }
                console.log(data);
            })


    };
    return (
        <div>
            <div className=" bg-second text-black">
                <div className="p-20 mx-auto">


                    <form onSubmit={handleOrderConfirm}>
                        <div className='flex justify-start'>
                            <div class="avatar">
                                <div class="w-24 mask mask-hexagon">
                                    <img src={img} />
                                </div>
                            </div>
                            <div>
                                <p>Service Name: <span className='font-bold sm:text-1xl lg:text-2xl text-font'>{serviceName}</span></p>
                                <p>Price: <span className='font-bold sm:text-1xl lg:text-2xl text-font'>{price}.00</span></p>

                            </div>

                        </div>

                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-3 my-4 '>
                            <input type="text" className='w-full rounded-sm p-2' defaultValue={`${fName ? fName : ''}`} name="firstName" placeholder='First Name' id="" required />
                            <input type="text" className='w-full rounded-sm p-2' defaultValue={`${lName ? lName : ''}`} name="lastName" placeholder='Last Name' id="" />
                        </div>

                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-3 '>

                            <input country type="number" className='w-full rounded-sm p-2' name="phone" placeholder='Your Phone' id="" required />
                            <input type="eamil" className='w-full rounded-sm p-2' name="email" placeholder='Your Email' defaultValue={user?.email} readOnly />
                            {/* <CountrySelect labels={en} name="countrySelect" /> */}
                            <PhoneInput
                                // country={'us'}
                                value={countryCode}
                                onChange={setCountryCode}
                            />
                            {/* <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue} /> */}
                        </div>


                        <textarea className='w-full my-3 sm:h-36 lg:h-64 p-3' type="text" name="message" placeholder='Your Massage' id="" />

                        <br />

                        {/* <input type="button" value="Order Confirm" className='bg-font w-full rounded-sm p-2 text-white font-bold' /> */}
                        <button className=' btn bg-font w-full rounded-sm p-2 text-white font-bold border-0' >order cofirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;