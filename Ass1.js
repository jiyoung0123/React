import React, { useState } from 'react';

function Ass1(pops){
    const [name,setName]=useState("");
    const [kor,setKor]=useState("");
    const [eng,setEng]=useState("");
    const [mat,setMat]=useState("");
    const [result,setResult]=useState("");

    const nameChange = (e) =>{
        setName(e.target.value);   //name 변수의 값이 바뀐다
    }
    const korChange = (e) =>{
        setKor(e.target.value);   //name 변수의 값이 바뀐다
    }
    const engChange = (e) =>{
        setEng(e.target.value);   //name 변수의 값이 바뀐다
    }
    const matChange = (e) =>{
        setMat(e.target.value);   //name 변수의 값이 바뀐다
    }
    
    function sum(e){
        let sum = parseInt(kor)+parseInt(eng)+parseInt(mat) ;
        let avg = sum/3;

        setResult(`${name}의 총점은 ${sum}, 평균은 ${avg}입니다.`)
    }


    return(
        <div>        
          이름 : <input type="text" onChange={nameChange}/><br/><br/>
          국어 : <input type="text" onChange={korChange}  /><br/>
          영어 : <input type="text" onChange={engChange} /><br/>
          수학 : <input type="text" onChange={matChange}  /><br/>

          <p> {result} </p>

          <button type="button" onClick={sum}>결과확인</button>
        </div>
        
       
        
    )
   
}

export default Ass1;