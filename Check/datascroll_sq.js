
export default function Datascroll({data}){
    return(
        <div>
            <div className="">{
                data.map((item)=>{
                    return<div><input className="p-1 mx-3 scale-125"  type="checkbox" id={item} name={item} value={item} />
                    <label className="font-mono" for="vehicle3">{item}</label>
                    </div>
                })
            }</div>

        </div>
    )
}