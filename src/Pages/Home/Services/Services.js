import React, { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {
    const [ourServices, setOurServices] = useState([])
    const [order, setOrder] = useState({})


    useEffect(() => {

        fetch("http://localhost:8000/services")
            .then(res => res.json())
            .then(data => {
                setOurServices(data)
                // console.log(data)
            })

    }, [])

    const handleServiceOrder = (id) => {

        console.log("ok", id);


        const url = `http://localhost:8000/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(result => {
                const newOrder = [...order, result]
                setOrder(newOrder)

            })

            console.log(order);
    }


    return (
        <div>
            <div className='text-center'>

                <h4 className='text-orange-600 text-2xl font-bold'>Services</h4>
                <h1 className='text-4xl font-bold my-2'>Our Service Area</h1>

                <p className='my-4 max-w-xl ms-auto'>The majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
            </div>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    ourServices.map(ourService =>
                        <Service
                            key={ourService._id}
                            ourService={ourService}
                            handleServiceOrder={handleServiceOrder}
                        ></Service>
                    )
                }
            </div>

            <div className='flex justify-center my-6'>
                <button className='btn btn-outline btn-error'> MORE services</button>
            </div>
        </div>
    );
};

export default Services;