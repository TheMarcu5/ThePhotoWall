import React, { useState, useEffect } from 'react'
//import { JsonReader } from '../components/reading_out_json_response'
import { photo_feed } from '../photo_feed'
//import ImageComponent from '../components/ImageComponent'
import Gallery from 'react-photo-gallery'

export const Feed = () =>{

    let arr = [];
    const [imageFeed, setImageFeed] = useState()
    useEffect(() => {  
        
    })
    function ImageObjectCreater(){
     
        const some = photo_feed.items.map((item) =>{

            const span = document.createElement('span')

            span.innerHTML = item.description;
          
            const ost ={
               
                src:span.querySelector('img').src,
                width: span.querySelector('img').width,
                height:span.querySelector('img').height,
                alt:span.querySelector('img').alt
            }
            
            arr.push(ost)
            return arr
            
        },[arr])
        console.log(arr)
        return some
        
    }
    const finkel = ImageObjectCreater()
    
    return(

        <Gallery photos = {arr}/>
        
        // <div>
        //     {photoFeed.items.map((item) =>(
        //          <ImageComponent image = {item.media.m}/> 
        //         //<h1>{item.title}</h1>
        //     ))}
        // </div>
        
    )
}
