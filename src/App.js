import React, { useEffect, useState } from "react";
import Allnews from "./components/Allnews"
import alanBtn from "@alan-ai/alan-sdk-web"



const App = () => {
 

  const alankey ='3bf351209e6960b9618783a46dd7a5f32e956eca572e1d8b807a3e2338fdd0dc/stage';


  const [newsArticles ,  SetNewsArticles] = useState([]);

      useEffect(()=>{
        alanBtn({
          key : alankey,
          onCommand:({command , articles})=>{
            if(command ==="newsHendlines"){
              SetNewsArticles(articles)
            }
          }
        })
    },[])

    
    
    console.log(newsArticles)
   
  return(
    <div className=" overflow-hidden">
      
      <Allnews newsArticles={newsArticles}/>
      <div className=" h-screen w-screen  bg-gray-700 -z-10 ">

      </div>
    </div>
 
  );
  
};

export default App;
