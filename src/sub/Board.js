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

      console.log("test");
  },[]); 
  //뒤에 의존할 state값을 비워두면 해당 useEffect함수는 처음 컴포넌트가 렌더링 된 시점 한번만 실행이 되고.. 추후 state값이 변경이 될 때에는 아무런 동작을 하지 않음 

  //데이터 불러올때의 상용구문

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