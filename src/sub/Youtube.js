import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Youtube(){
  let [data, setData] = useState([]);
  let [isPop, setIsPop] = useState(false);
  let [index, setIndex] = useState(0);

  const api_key = "AIzaSyB7VIAECTixPlj0sr-goHwkmNRFIwxZntA";
  const playListId = "PLYOPkdUKSFgX5CgKf68RJzJHec0XEdBNd";
  const num = 4;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`; 

  useEffect(()=>{
    axios
      .get(url)
      .then(json=>{
        console.log(json.data.items);
        setData(json.data.items);
      })
  },[]);

  return (
    <section className="content youtube">
      <div className="inner">
        <h1>Youtube</h1>

        {isPop ? <Pop /> : null}

        <div className="frame">
          {
            data.map((item, index)=>{
              
              return (
                <article key={index}>
                  <div className="inner">
                    <div className="pic" onClick={()=>{
                        setIsPop(true);
                        setIndex(index);
                    }}>
                      <img src={item.snippet.thumbnails.medium.url} />
                    </div>
                    
                    <h2>{item.snippet.title.substr(0,40)+"..."}</h2>
                    <p>{item.snippet.description.substr(0,150)+'...'}</p>
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>

      
    </section>
  )

  function Pop(){
    const pop = useRef(null);
  
    useEffect(()=>{
      console.log("팝 생성");
  
      return ()=>{
        console.log("팝 제거")
      }
    },[]);
  
    return (
      <aside className="pop" ref={pop}>
        <iframe 
          src={"https://www.youtube.com/embed/"+data[index].snippet.resourceId.videoId} frameborder="0" width="100%" height="auto" allowfullscreen
        ></iframe>
        <span class="btnClose" onClick={()=>{
          setIsPop(false)
        }}>close</span>
      </aside>
    )
  }
}



export default Youtube;