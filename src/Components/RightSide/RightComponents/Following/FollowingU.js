import React, { useState } from 'react'
import { FollowimgData } from '../../../../Data/FollowingData'
import "../Following/FollowingU.css"
import FollowingUList from './FollowingUList'
import FollowingMore from './FollowingMore'



const FollowingU = ({following,setFollowing}) => {

  const [showMore,setShowMore] =useState(false)
  

  return (
    <div className="following-comp">
      <h2>Quien te esta siguiendo?</h2>
      {FollowimgData.map((data,id)=>(

        <FollowingUList 
        following={following}
        setFollowing={setFollowing}
        data={data}
        key={id}
        />
      ))}
      
        <FollowingMore 
        showMore={showMore}
        setShowMore={setShowMore}
        />
      
      <button className='SM-btn' onClick={()=>setShowMore(true)}>Mostrar mas</button>
    </div>
    
  )
}

export default FollowingU