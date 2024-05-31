import React, { useEffect, useState } from 'react'
import filter from "./filter.module.css"



export default function Topfilter({ show, showFunc , gridOrList, setGridOrList }) {


    const [showPrice, setShowPrice] = useState(false)
    const [showLength, setShowLength] = useState(false)
    const [valP_change, setP_val] = useState(100)
    const [valL_change, setL_val] = useState(2)
    const list_country=["Germany","Italy","The Netherlands","Taiwan","Turkey","United States","China","Afghanistan","Albania","Algeria","American Samoa"];
    const list_year =["2022","2023","≥ 2021","≥ 2010","≥ 2000"];

    return (
        <div className='m-2'>
            <div className='flex justify-start'>
                <div style={{color:"black"}} onClick={() => { showPrice ? setShowPrice(false) : setShowPrice(true) }} className={` flex px-2 pointer ${filter.topfilter_btn}`}><div className='mt-2 ml-2' >Price </div><div><span className="material-symbols-outlined ml-auto scale-75 -mt-1 ">expand_more</span>
                </div></div>
                <div className={` flex px-2 pointer ${filter.topfilter_btn}`}><div className='mt-2 ml-2' >
                    <label for="year">Year:</label>
                    <select style={{border:"none"}} id="year" name="year">
                    {
                        list_year.map((item)=>{
                            return <option value={item}>{item}</option>
                        })
                    }    
                    </select>
                </div></div>
                <div className={` flex px-2 pointer ${filter.topfilter_btn}`}><div className='mt-2 ml-2' >
                    <label for="year">Country:</label>
                    <select style={{border:"none"}} id="country" name="country">
                    {
                        list_country.map((item)=>{
                            return <option value={item}>{item}</option>
                        })
                    }    
                    </select>
                </div></div>
            </div>
            <div className='flex justify-end ml-full -mt-[60px]'>
                <div onClick={() => { show ? showFunc(false) : showFunc(true) }} className={` flex px-2 pointer ${filter.topfilter_btn_all}`}><div className='mt-2' >More Filters</div><div><span className="material-symbols-outlined -mt-1 ">filter_list   </span></div></div>
                <div onClick={() => { showLength ? setShowLength(false) : setShowLength(true) }} className={` flex px-2 pointer ${filter.topfilter_btn}`}><div className='mt-2 ml-2' >Length</div><div><span className="material-symbols-outlined ml-auto">expand_more</span></div></div>
                <div className={` flex px-2 pointer ${filter.topfilter_btn}`}><div className='mt-2 ml-2' >Volume</div><div><span className="material-symbols-outlined ml-auto">expand_more</span></div></div>
                <div className='pointer'>
                    <span onClick={()=>{gridOrList===false ? setGridOrList(true) : setGridOrList(false)}} className="material-symbols-outlined">
                        grid_view
                    </span>
                </div>
            </div>
            <div className='flex'>
                {showPrice ? <div className={`visible w-[340px] px-3 mx-10 ${filter.border_1} `} >
                    <div className='border-2 border-slate-200 p-2 m-2 w-[280px] rounded-lg'>
                        <div style={{ marginLeft: "20px" }} className="slidecontainer">
                            <input onChange={(e) => setP_val(e.target.value)} style={{ maxWidth: "300px", minWidth: "200px" }} type="range" min="100" max="10000" defaultValue="50" className={`${filter.slider}`} id="myRange"></input>
                        </div>
                        <div className='flex '>
                            <div className='bg-blue-600 px-3 rounded-md'>100</div>
                            <div className='w-full flex justify-end '><div className='bg-blue-600 px-3 rounded-md ml-32'>10000</div>
                            </div>
                        </div>
                    </div>
                    <div className='block justify-center'>
                        <div className='flex justify-center my-2'>
                            <div><h6>Price : </h6></div>
                            <div className='text-sm font-bold px-10 py-1 -mt-1 border-2 border-slate-400 mx-2' id='demo'>₹ {valP_change}</div>
                        </div>
                        <div className='text-center w-full px-2 py-1 rounded-lg mb-2 bg-blue-600 text-neutral-200 pointer'>Apply</div>
                    </div>
                </div> : ""}
                {showLength ? <div className={`visible w-[340px] px-3  ${filter.border_1, filter.ml_full} `} >
                    <div className='border-2 border-slate-200 p-2 m-2 w-[280px] rounded-lg'>
                        <div style={{ marginLeft: "20px" }} className="slidecontainer">
                            <input onChange={(e) => setL_val(e.target.value)} style={{ maxWidth: "300px", minWidth: "200px" }} type="range" min="2" max="200" defaultValue="50" className={`${filter.slider}`} id="myRange"></input>
                        </div>
                        <div className='flex '>
                            <div className='bg-blue-600 px-3 rounded-md'>2</div>
                            <div className='w-full flex justify-end '><div className='bg-blue-600 px-3 rounded-md ml-32'>200</div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='flex justify-center my-2'>
                            <div><h6>Length : </h6></div>
                            <div className='text-sm font-bold px-10 py-1 -mt-1 border-2 border-slate-400 mx-2' id='demo'>{valL_change} meters</div>
                        </div>
                        <div className='text-center w-full px-2 py-1 rounded-lg mb-2 bg-blue-600 text-neutral-200 pointer'>Apply</div>
                    </div>
                </div> : ""}
            </div>
        </div>
    )
}
