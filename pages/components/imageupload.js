import { useState, useEffect } from 'react';
import { db, storage } from "../../firebase/firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"
import Image from "next/image";
import { collection, getDocs, addDoc } from 'firebase/firestore'
export default function UplaodImage() {
    const [file, setfile] = useState(null)
    const [filelist, setfilelist] = useState([])
    const [totalDetails, settotalDetails] = useState([])

    const [name, setname] = useState("")
    const [type, settype] = useState("")
    const [imgurl, setimgurl] = useState("")
    const allimagesref = ref(storage, "images")

    const imagedetailref = collection(db, "Image_details")
    useEffect(() => {

        getDocs(imagedetailref).then((res) => {
            settotalDetails(res.docs.map((data) => ({ ...data.data(), id: data.id })))
        })



    }, [])
    const clearInputs =()=>{
        document.getElementById('seller-name').value=""
        document.getElementById('Image-type').value=""
        document.getElementById('Image-feild').value=""
    }
    const createdata = async (img_url) => {
        console.log(img_url);
        await addDoc(imagedetailref, { Seller: name, Type: type, URL: img_url })

        alert("Data Uploaded")
        clearInputs()
    }
    const uploadImage = async () => {
        if (file == null || name=="" || type=="") {
            alert("All Inputs are not filled")
            return;
        }
        const Imageref = ref(storage, `images/${file.name + v4()}`)

        await uploadBytes(Imageref, file).then((snapshot) => {

            alert("Images Uploaded")
            return getDownloadURL(snapshot.ref)
        }).then(dnloadUrl => {
            setimgurl(dnloadUrl)
            createdata(dnloadUrl);
        });



    }
    return (

        <>
            <div className="forms-uploadimage">
               <center> <h1 style={{color:"brown"}}>Enter Details</h1></center>
                <div className="input-sellername">
                    <label htmlFor="">Enter Seller Name : </label>
                    <input id='seller-name' type="text" placeholder=' Enter Seller name' onChange={(e) => { setname(e.target.value) }} required />
                </div>
                <div className="input-type">
                    <label htmlFor="">Enter Type :</label>
                    <input id='Image-type' type="text" placeholder=' Enter Type' onChange={(e) => { settype(e.target.value) }} required />
                </div>
                <div className="input-uploadimage">
                    <label htmlFor="">Input file :</label>
                    <input id='Image-feild' type="file" onChange={(e) => { setfile(e.target.files[0]) }} required accept="image/*" />
                </div>
                <div style={{margin:"auto"}}>
                <button onClick={uploadImage}>Upload Data</button>
                </div>
            </div>
            <br />
           
            <div className="display-imagedetails">
            {totalDetails.map((data) => {
                return <div>
                    
                    <img src={data.URL} alt=" not-known" />
                    <h4>Category : {data.Type}</h4>
                    <h6> Seller'name : {data.Seller}</h6>
                </div>
            })}
            </div>
        </>
    )
}