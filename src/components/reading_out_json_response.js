import React from 'react'
import { photoFeed } from '../photo_feed'

export const JsonReader = () =>{

    return(
        <div>
        <h1>{photoFeed.items[0].items}</h1>
        </div>

    )
}