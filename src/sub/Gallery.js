import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
  fitWidth: false,
  gutter: 0,
  itemSelector: ".item"
}

function Gallery(){   
  let [url, url2] = getURL();
  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(true);
  let list = useRef(null); 
  
  useEffect(()=> {    
    getFlickr(url);
    return ()=>{
      console.log("해당 컴포넌트 사라짐")
    }
  },[]); 

  return (
    <section className="content gallery">
      <div className="inner">
        <h1 onClick={()=>{
          list.current.classList.remove("on");
          getFlickr(url);  
        }}>Gallery</h1>

        <button onClick={()=>{
          list.current.classList.remove("on");
          getFlickr(url2);          
        }}>수정</button>

        {loading ? <img className="loading" src="./img/loading.gif" /> : ""} 

        <div className="list" ref={list}>
          <List />
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
    .then(json=> setItems(json.data.photos.photo)); 

    list.current.classList.add("on"); 
    setLoading(false);     
  }  

  function List(){
    return (
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
                <div className="inner">
                  <img src={imgSrc} />

                  <h2>{item.title}</h2>
                </div>                    
              </li>
            )
          })
        }            
      </Masonry>
    )
    
  }
}

export default Gallery;