import axios from "axios";
import { useEffect, useState } from "react";

function Board(){
  //json데이터로부터 받을 빈 배열을 스테이트로 생성
  let [posts, setPosts] = useState([]);

  //컴포넌트가 랜더링된 순간
  useEffect(()=>{
    //axios로 외부 데이터 호출
    axios
      .get("./dbs/board.json")
      .then(data=>{ 
        //전달받은 데이터를 setPosts를 이용해 posts스테이트에 담음
        setPosts(data.data.data);
      })
  });

  return (
    <section className="content board">
      <div className="inner">
        <h1>Board</h1>
        {
          // posts 스테이트에 담겨있는 배열의 갯수만큼
          //반복을 돌면서 article생성
          posts.map((data,index)=>{
            return (
              <article key={index}>
                {data.title}
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Board;