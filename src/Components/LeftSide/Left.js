import React, { useState } from 'react'
import "../LeftSide/Left.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {FiTrendingUp} from "react-icons/fi"
import { Link } from 'react-router-dom';
import {BsBookmark} from "react-icons/bs"
import {RiFileListLine} from "react-icons/ri"
import {FiSettings} from "react-icons/fi"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Profile from "../../assets/profile.jpg"


const Left = ({profileImg,
               modelDetails
              }) => {

  const [btnActive,setBtnActive] =useState("#")
  const [logOutExit,setLogOutExit] =useState(false)


  return (
    <div className="L-features">
      <Link to="/home" style={{textDecoration:"none",color:"black"}}>
        <div onClick={()=>setBtnActive("#")} id='L-box' className={btnActive === "#" ? "active" : ""} >
          <AiOutlineHome className='margin'/>
          <span>Hogar</span>
        </div>
      </Link>
    
      <div id='L-box' onClick={()=>setBtnActive("#explore")} className={btnActive === "#explore" ? "active" : ""}>
        <AiOutlineSearch
          className='margin'/>
         <span>Explorar</span>
      </div>
          
      <div id='L-box'  onClick={()=>setBtnActive("#trending")} className={btnActive === "#trending" ? "active" : ""}>
       <h1 className='notifi'>
          <FiTrendingUp 
           className='margin'/>
        </h1> 
        <span>Tendencias</span>
      </div>

      {/* <div id='L-box' onClick={()=>setBtnActive("#lists")} className={btnActive === "#lists" ? "active" : ""}>
        <RiFileListLine
        className='margin'/>
        <span>Listas</span>
      </div> */}

      <div id='L-box' onClick={()=>setBtnActive("#saved")} className={btnActive === "#saved" ? "active" : ""}>
        <BsBookmark
         className='margin'/>
        <span>Favoritos</span>
      </div>

      <div id='L-box' onClick={()=>setBtnActive("#settings")} className={btnActive === "#settings" ? "active" : ""}>
        <FiSettings 
        className='margin'/>
        <span>Configuraciones</span>
      </div>

      <div className="left-user">
        <Link to="/profile" style={{textDecoration:"none",color:"black"}}>
          <div className="user-name-userid">
            <img src={profileImg ? (profileImg) : Profile} alt="" />
              <div className='L-user'>
                <h1>{modelDetails ? (modelDetails.ModelName) : "Enrique007"}</h1>
                <span>{modelDetails ? (modelDetails.ModelUserName) : "@Enrique007"}</span>
            </div>
          </div>
        </Link>
        <MoreHorizIcon onClick={()=>setLogOutExit(!logOutExit)} className='vert'/>
          
          {logOutExit && (
            <div className="logOutExitContainer">
              <button>Adicionar una cuenta existente</button>
              <Link to="/" style={{width:"100%"}}><button>Log out @Enrique007</button></Link>
            </div>
          )}
      </div>

    </div>
  )
}

export default Left