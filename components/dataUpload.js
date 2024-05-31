import React from 'react'
import cls from '../../styles/dataUpload.module.css'
import { useState } from 'react';
import { Dropdown } from "@nextui-org/react";

function dataUpload() {

    const [previewImages, setPreviewImages] = useState([]);

    const handleFileDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        previewFiles(files);
    };

    const handleFileSelect = (event) => {
        const files = event.target.files;
        previewFiles(files);
    };

    const previewFiles = (files) => {
        const previewImagesArray = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (e) => {
                previewImagesArray.push(e.target.result);
                if (previewImagesArray.length === files.length) {
                    setPreviewImages(previewImagesArray);
                }
            };

            reader.readAsDataURL(file);
        }
    };
    const handleRemoveImage = (index) => {
        const updatedImages = [...previewImages];
        updatedImages.splice(index, 1);
        setPreviewImages(updatedImages);
    };
    const options = ['Sell Or Charter', 'Rent', 'Charter'];
    const option_emi = ['3 Months @6%', '6 Months @10%', '9 Months @12%']
    const option_duration = ['3 Months ', '6 Months ', '9 Months ']
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedEmi,setselectedEmi]=useState('');
    const [selectedDuration,setselectedDuration]=useState('')
    const [isRent, setisRent] = useState(false);
    const [isSell, setisSell] = useState(false);
    const handleDropdownChange = (event) => {
        const newValue = event.target.value;
        if (newValue === "Sell Or Charter" || newValue === "Charter") {
            setisSell(true)
            setisRent(false)
        }
        else {
            setisSell(false)
            setisRent(true)
        }
        // console.log(event.target.value)
        setSelectedValue(newValue);
    };
    const handleDropdownChange_Emi=(e)=>{
        setselectedEmi(e.target.value)
    }
    const handleDropdownChange_Duration=(e)=>{
        setselectedDuration(e.target.value)
    }

    return (
        <div className={cls.main_div}>

            <h1 className={cls.header}>Your Data is Secured With <span>Shaukeen</span></h1>
            <div className={cls.main_div2}>
                <div className={cls.left_div}>
                    <div className={cls.left_div_top}>
                        <h3>Seller Details</h3>
                        <div className={cls.second_line}>
                            <div>

                                <input
                                    type="text"
                                    placeholder="Your Name"


                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    placeholder="Enter your Location"

                                />
                            </div>
                        </div>
                        <div className={cls.first_line}>
                            <div>

                                <input
                                    type="text"
                                    placeholder="Enter your Name"

                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    placeholder="Enter your Phone Number"

                                />
                            </div>
                        </div>

                    </div>
                    <div className={cls.left_div_btm}>
                        <h3>Upload Product Documents</h3>
                        <div>

                            <input
                                type="text"
                                placeholder="Upload Data"

                            />
                        </div>
                        <div>

                            <input
                                type="text"
                                placeholder="Upload Data"

                            />
                        </div>
                        <div>

                            <input
                                type="text"
                                placeholder="Upload Data"

                            />
                        </div>
                        <div>

                            <input
                                type="text"
                                placeholder="Upload Data"

                            />
                        </div>
                        <div>

                            <input
                                type="text"
                                placeholder="Upload Data"

                            />
                        </div>
                    </div>
                </div>
                <div className={cls.right_div}>
                    <div className={cls.right_div_top}>
                        <h3>Selling Options</h3>
                        <div className={cls.owner_type}>
                            <div >
                                <select onChange={handleDropdownChange} value={selectedValue}
                                    style={{ outline: "0", width: "100%", outlineWidth:"0px" }}
                                >
                                    <option value="" className={cls.option_style}>Select an option</option>
                                    {options.map((option) => (
                                        <option key={option} value={option}
                                            className={cls.option_style}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        {isSell &&
                            <div className={cls.right_top_2}>

                                <div>

                                    <input
                                        type="text"
                                        placeholder="Selling Price"

                                    />
                                </div>


                                <div className={cls.emi_option}>
                                    <div >
                                        <select onChange={handleDropdownChange_Emi} value={selectedEmi}
                                            style={{ outline: "0", width: "100%" }}
                                        >
                                            <option value="" className={cls.option_style}>Select EMI option</option>
                                            {option_emi.map((option) => (
                                                <option key={option} value={option}
                                                    className={cls.option_style}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                    </div>

                                </div>

                            </div>
                        }
                        {isSell &&
                            <div className={cls.rad_btn}>

                                <label>
                                    <input type="radio" name="category" /> Client Visit
                                </label>
                                <label>
                                    <input type="radio" name="category" /> Live View
                                </label>
                                <label>
                                    <input type="radio" name="category" /> Deliery
                                </label>

                            </div>
                        }
                        {isSell &&
                            <div className={cls.rad_btn}>

                                <label>
                                    <input type="radio" name="category" /> Call
                                </label>
                                <label>
                                    <input type="radio" name="category" /> Test Ride
                                </label>

                            </div>
                        }
                        {isRent &&
                        <div style={{display:"flex",flexDirection:"row"}}>
                            <div style={{width:"50%",marginLeft:"20px"}}>

                                <input
                                    type="text"
                                    placeholder="Rent Price"

                                />
                            </div>
                            <div  className={cls.rent_option}>
                                <select onChange={handleDropdownChange_Duration} value={selectedDuration}
                                    style={{ outline: "0", width: "100%" }}
                                >
                                    <option value="" className={cls.option_style}>Duration</option>
                                    {option_duration.map((option) => (
                                        <option key={option} value={option}
                                            className={cls.option_style}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        }
                        {isRent &&
                            <div className={cls.rad_btn}>

                                <label>
                                    <input type="radio" name="category" /> Call
                                </label>
                                <label>
                                    <input type="radio" name="category" /> Live View
                                </label>

                            </div>
                        }
                    </div>

                    <div className={cls.right_div_btm}>
                        <h3>Upload Phtotos Details</h3>
                        <div>
                            <div
                                style={{
                                    border: '2px dashed #ccc',
                                    borderRadius: '5px',
                                    padding: '20px',
                                    textAlign: 'center',
                                    fontFamily: 'Arial, sans-serif',
                                    marginBottom: '20px',
                                }}
                                onDragOver={(event) => event.preventDefault()}
                                onDragLeave={(event) => event.preventDefault()}
                                onDrop={handleFileDrop}
                            >
                                <h3>Drag and Drop Files Here</h3>
                                <p>Or click to select files</p>
                                <input type="file" onChange={handleFileSelect} multiple />
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {previewImages.map((image, index) => (
                                    <div key={index} style={{ position: 'relative' }}>
                                        <img
                                            src={image}
                                            alt="Preview"
                                            style={{
                                                width: '150px',
                                                height: '150px',
                                                objectFit: 'cover',
                                                marginRight: '10px',
                                                marginBottom: '10px',
                                            }}
                                        />
                                        <button
                                            style={{
                                                position: 'absolute',
                                                top: '5px',
                                                right: '20px',
                                                background: 'transparent',
                                                border: 'none',
                                                color: 'black',
                                                cursor: 'pointer',
                                                fontSize: '20px',
                                                fontWeight: "bolder"
                                            }}
                                            onClick={() => handleRemoveImage(index)}
                                        >
                                            &#10005;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dataUpload