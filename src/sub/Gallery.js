//npm install --save react-masonry-component
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
  fitWidth: false,
  //columnWidth: "25%",
  gutter: 0,
  itemSelector: ".item"
}

function Gallery(){ 
  
  let [url, url2] = getURL();
  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(false);
  let list = useRef(null);  
  //const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
  
  useEffect(()=> {
    getFlickr(url)

    return ()=>{
      console.log("해당 컴포넌트 사라짐")
    }
  },[]); 

  return (
    <section className="content gallery">
      <div className="inner">
        <h1>Gallery</h1>
        <button onClick={()=>{
          list.current.classList.remove("on");
          getFlickr(url2);          
        }}>수정</button>

        <div className="list" ref={list}>
          <Masonry
            className={"frame"}
            elementType={"ul"}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {
              items.map((item, index)=>{
                const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;

                return (
                  <li key={index} className="item">
                    <img src={imgSrc} />
                  </li>
                )
              })
            }
            
          </Masonry>
        </div>
        
      </div>
    </section>
  )

  function getURL(){
    const baseURL = "https://www.flickr.com/services/rest/?";
    const method1 = "flickr.interestingness.getList";
    const method2 = "flickr.photos.search";
    const key= "e7ed3b39fe112d7e93d03c19325305e0";
    const count = 500;
    const url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;
    const url2 = `${baseURL}method=${method2}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&privacy_filter=1&tags=ocean`; 

    return [url, url2];
  }

  async function getFlickr(url){
    await axios
    .get(url)
    .then(json=> setItems(json.data.photos.photo))  
    
    setTimeout(()=>{
      list.current.classList.add("on")
    },1000);
    console.log("test");
  }  
}

export default Gallery;