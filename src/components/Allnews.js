import React, { useState } from 'react'
import Card from './Card'

const Allnews = ({newsArticles}) => {

      


  return (
  <div className='justify-center items-center '>
     <div className=' flex justify-center bg-black h-full w-full font-mono font-bold text-center p-3 text-yellow-50 rounded-b-lg    max-w-full h-12'>
        All News
     </div>
 
     <div>
   
      <div className=' p-40 pt-0   m-6'>
        {
            newsArticles.map((article, index) =>(
              <Card article={article} key={index}/>
            )) 
        }
      </div>
    </div>
  </div>
   
  )
}

export default Allnews