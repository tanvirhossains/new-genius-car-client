import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [ourServices, setOurServices] = useState([])


    useEffect(() => {

        fetch("services.json")
            .then(res => res.json())
            .then(data => setOurServices(data))

    }, [])
    return (
        <div>
            <div className='text-center'>

                <h4 className='text-orange-600 text-2xl font-bold'>Services</h4>
                <h1 className='text-4xl font-bold my-2'>Browse Our Products</h1>

                <p className='my-4 max-w-2xl mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    ourServices.map(ourService =>
                        <Product
                            key={ourService.id}
                            ourService={ourService}
                        ></Product>
                    )
                }
            </div>

            <div className='flex justify-center my-6'>
                <button className='btn btn-outline btn-error'> MORE Prudouct</button>
            </div>
        </div>
    );
};

export default Products;