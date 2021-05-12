import React from 'react'
import { JsonReader } from '../components/reading_out_json_response'
import { photoFeed, photo_feed } from '../photo_feed'
import ImageComponent from '../components/ImageComponent'

export const Feed = () =>{

    
    return(
        
        <div>
            {photoFeed.items.map((item) =>(
                 <ImageComponent image = {item.media.m}/> 
                //<h1>{item.title}</h1>
            ))}
        </div>
        
    )
}