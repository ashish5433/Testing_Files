import React from 'react'
import PartnerId from './partnerId';

export default function Partner() {
    const listsamp = [1,2,3,4,5,6,7];
  return (
    <div className='flex flex-col'>

<h5 className='py-1 px-2 bg-violet-300 rounded-md'>Dealers</h5>

    <div className='flex flex-wrap'>
        {
            listsamp.map((item)=>{
                return <div><PartnerId /></div> 
            })
        }
    </div>

    <h5 className='py-1 px-2 mt-3 bg-violet-300 rounded-md'>Distributors</h5>

    <div className='flex flex-wrap'>
        {
            listsamp.map((item)=>{
                return <div><PartnerId/></div> 
            })
        }
    </div>
    <h5 className='py-1 px-2 mt-3 bg-violet-300 rounded-md'>Retailers</h5>

    <div className='flex flex-wrap'>
        {
            listsamp.map((item)=>{
                return <div><PartnerId/></div> 
            })
        }
    </div>
    <h5 className='py-1 px-2 mt-3 bg-violet-300 rounded-md'>Brokers</h5>

    <div className='flex flex-wrap'>
        {
            listsamp.map((item)=>{
                return <div><PartnerId/></div> 
            })
        }
    </div>
            
    </div>
  )
}
