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
  let [interest, setInterest] = useState(true);

  let list = useRef(null); 
  let inputs = useRef(null);
  
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

          if(enableClick && !interest){
            setInterest(true);
            init();

            getFlickr({
              type: "interest",
              count: 500
            });
          }           
        }}>Gallery</h1>
        

        <div className="searchBox">
          <input type="text" ref={inputs} />
          <button onClick={()=>{
            if(enableClick){   
              
              let tags = inputs.current.value;
              if(tags == "") return;
              inputs.current.value="";
              setInterest(false);

              init();

              
        
              getFlickr({
                type: "search",
                count: 500,
                tags: tags
              });
            }            
          }}>검색</button>
        </div>

        {loading ? <img className="loading" src="./img/loading.gif" /> : ""} 

        <div className="list" ref={list}>
          <List />
        </div>        
      </div>
    </section>
  )

  function init(){
    setEnableClick(false);
    list.current.classList.remove("on");
    setLoading(true);
  }
 

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