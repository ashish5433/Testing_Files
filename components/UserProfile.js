import React from 'react'
import cls from '../styles/UserProfile.module.css'


function UserProfile(props) {

  
  return (
   <>
    <div className={cls.main_div}>
        <span>{props.Name} </span>
        <span style={{fontSize:"12px"}}>{props.Email} </span>
    </div>
   </>
  )
}

export default UserProfile