import React from 'react';

const ServiceNew = () => {
    const handleOrderConfirm = (event) => {
        event.preventDefault();
        const serviceName = event.target.serviceName.value;
        const servicePrice = event.target.servicePrice.value;
        const textHere = event.target.textHere.value;
        const serviceType = event.target.serviceType.value;
        const productDiscription = event.target.productDiscription.value;

        console.log(serviceName, servicePrice,serviceType, textHere, productDiscription);

    };
    return (
        <div>
            <div className=" bg-second text-black">
                <div className="p-20 mx-auto">
                    <form onSubmit={handleOrderConfirm}>


                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-3 my-4 '>
                            <input type="text" className='w-full rounded-sm p-2' name="serviceName" placeholder='service Name' id="" required />
                            <input type="number" className='w-full rounded-sm p-2' name="servicePrice" placeholder='Service Price' id="" />
                        </div>

                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-3 '>
                            <input type="text" className='w-full rounded-sm p-2' name="textHere" placeholder='Text Here' id="" />
                            <input type="text" className='w-full rounded-sm p-2' name="serviceType" placeholder='Service Type' id="" required />
                        </div>


                        <textarea className='w-full my-3 sm:h-36 lg:h-64 p-3' type="text" name="productDiscription" placeholder='Product Discription' id="" />

                        <br />

                        {/* <input type="button" value="Order Confirm" className='bg-font w-full rounded-sm p-2 text-white font-bold' /> */}
                        <button className=' btn bg-font w-full rounded-sm p-2 text-white font-bold border-0' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceNew;