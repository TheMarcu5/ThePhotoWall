 const ImageComponent=(props) =>{
     
var data = {
    "title": "He left",
    "link": "https:\/\/www.flickr.com\/photos\/190178381@N05\/51173424247\/",
    "media": {"m":"https:\/\/live.staticflickr.com\/65535\/51173424247_5678fdab4d_m.jpg"},
    "date_taken": "2021-04-21T17:48:48-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/190178381@N05\/\">eleonore.dunand.s<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/190178381@N05\/51173424247\/\" title=\"He left\"><img src=\"https:\/\/live.staticflickr.com\/65535\/51173424247_5678fdab4d_m.jpg\" width=\"170\" height=\"240\" alt=\"He left\" \/><\/a><\/p> ",
    "published": "2021-05-12T12:21:15Z",
    "author": "nobody@flickr.com (\"eleonore.dunand.s\")",
    "author_id": "190178381@N05",
    "tags": "nightmood nikonz6 nikon emotions people bathroom portrait woman"
   }
     
    var span = document.createElement('span')
    span.innerHTML = data.description;

    var pelle = span.querySelector('img').src
 

    return (
        <div>
    
            <img src={pelle}/>
            
        </div>
    )
}

export default ImageComponent;


 