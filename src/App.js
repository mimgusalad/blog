/* eslint-disable*/
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 고기 맛집';
  let [article, setArticle] = useState(["남자 코트 추천","강남 우동 맛집","파이썬 독학"]);
  let [like, setLike] = useState(new Array(article.length).fill(0));
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button onClick={()=>{
        let copy = [...article]; // 원본을 수정하지 말고 복사본을 수정하라
        copy[0] = '여자 코트 추천';
        setArticle(copy);
      }}>글수정</button>

      <button onClick={()=>{
        let copy = [...article]; // 원본을 수정하지 말고 복사본을 수정하라
        copy.sort();
        setArticle(copy);
      }}>글제목 정렬</button>

      
      {
        article.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(!modal)}}>{article[i]} </h4>
              <span onClick={()=>{ 
                let copy = [...like];
                copy[i] = copy[i]+1;
                setLike(copy)}}> 🥨{like[i]}
              {
                console.log(like)
              }
              </span> 
              
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      {
        modal === true ? <Modal/> : null
      }
        
 
    </div>
  );
}

function Modal(){ // html을 변수같이 사용할 수 있다. Component 문법
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
