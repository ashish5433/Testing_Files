export default function Nav_li_items({ props,item}) {
    const item_val= item;
    return (
        <div onMouseLeave={() => { console.log(document.getElementsByClassName("li_1_div")[0].style.visibility = "hidden") }}
            className="bg-white -mt-4 pl-10 pt-4 li_1_div ">
            <div className="flex">
                {props.map((items) => {
                    return( 
                    <div className="flex flex-wrap  ">
                        {items.map((item)=>{
                        return<>
                        <div className="li_1">
                            <div>
                                <ul>
                                    {item.map((ite) => {
                                        return <li>{ite}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        </>
                        })}
                        <div className=" ml-5 vertical_bar"></div>
                    </div> )}   
                    )
                }          
            </div>
            <div className="flex flex-end justify-end text-center">
                <button className="bg-black p-2 text-neutral-300 ">View all {item_val}

                </button>
                <div className="bg-black btn-top"><svg xmlns="http://www.w3.org/2000/svg" height="18"
                    viewBox="0 96 960 960" fill="white" width="48">
                    <path d="m561 814-43-42 168-168H160v-60h526L517 375l43-42 241 241-240 240Z" />
                </svg></div>
            </div>
        </div>
            );
}