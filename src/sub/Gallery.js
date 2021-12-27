import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
  fitWidth: false,
  gutter: 0,
  itemSelector: ".item"
}

function Gallery(){  
  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(true);
  let [enableClick, setEnableClick] = useState(true);

  let list = useRef(null); 
  
  useEffect(()=> {    
    getFlickr({
      type: "interest",
      count: 500
    });
    return ()=>{
      console.log("해당 컴포넌트 사라짐")
    }
  },[]); 

  return (
    <section className="content gallery">
      <div className="inner">
        <h1 onClick={()=>{
          if(enableClick){
            setEnableClick(false);
            list.current.classList.remove("on");
            setLoading(true);
            getFlickr({
              type: "interest",
              count: 500
            });
          }
           
        }}>Gallery</h1>

        <button onClick={()=>{
          if(enableClick){
            setEnableClick(false);
            list.current.classList.remove("on");
            setLoading(true);
            getFlickr({
              type: "search",
              count: 500,
              tags: "바다"
            }); 
          }                  
        }}>수정</button>

        {loading ? <img className="loading" src="./img/loading.gif" /> : ""} 

        <div className="list" ref={list}>
          <List />
        </div>        
      </div>
    </section>
  )
 

  async function getFlickr(opt){
    let url ="";
    const baseURL = "https://www.flickr.com/services/rest/?";
    const key= "e7ed3b39fe112d7e93d03c19325305e0";
    const count = opt.count;

    if(opt.type=== "interest"){      
      const method = "flickr.interestingness.getList";  
      url = `${baseURL}method=${method}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;      
    }else if(opt.type==="search"){
      const method = "flickr.photos.search";
      url = `${baseURL}method=${method}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&privacy_filter=1&tags=${opt.tags}`;  
    }else{
      console.error("인수값에 type, count, 속성을 입력하세요.")
    }

    await axios
    .get(url)
    .then(json=> setItems(json.data.photos.photo)); 

    list.current.classList.add("on"); 
    setLoading(false);    
    setTimeout(()=>{
      setEnableClick(true);
    },1000); 
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