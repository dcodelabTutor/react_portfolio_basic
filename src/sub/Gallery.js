import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Gallery(){
  const baseURL = "https://www.flickr.com/services/rest/?";
  const method1 = "flickr.interestingness.getList";
  const key= "e7ed3b39fe112d7e93d03c19325305e0";
  const count = 500;
  const url = `${baseURL}method=${method1}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;

  //flickr데이터 배열을 받을 빈 배열을 items이름의 state로 설정
  let [items, setItems] = useState([]);
  let list = useRef(null);
  

  //useEffect의 의존성을 비워서 처음 로딩시 한번만 실행되게 설정
  useEffect(()=>{
    
    callData();   

  },[]);

  async function callData(){
    await getFlickr();
    delay();
  }

  function getFlickr(){
    axios
    .get(url)
    .then(json=>{
      console.log(json.data.photos.photo);
      setItems(json.data.photos.photo);
    })
  }

  function delay(){
    setTimeout(()=>{
      list.current.classList.add("on");
    },5000);
  }

  return (
    <section className="content gallery">
      <div className="inner">
        <h1>Gallery</h1>

        <ul className="list" ref={list}>
          {
            items.map((item, index)=>{
              const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
              return (
                <li key={index}>
                  <div className="pic">
                    <img src={imgSrc} />
                  </div>

                  <p>{item.title}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Gallery;