/*"Fortest1.js*/
//#none는 링크를 누르면 앵커 태그 눌렀을 때 화면 스크롤을 막고, 위치이동을 막아준다
//함수의 onClick 에 바로 함수를 호출하면 (ex. onClick={goSelect} ) 클릭햇을 때 함수가 호출되는게 아니라
//배열을 불러오면서 바로 호출이 됨. 그래서 안에 꼭 람다함수를 써야 함
import React, {useState} from "react";

function Fortest2(props){
    const [fruitList, setFruitList] = useState(["사과", "배", "포도", "수박", "머루" ]);
    const [fruit, setFruit] = useState("");

    //input 태그에서 값 입력하면 fruit변수에 값을 저장한다
    const onChange= (e)=>{
        setFruit(e.target.value);
    }

    //추가버튼을 누르면 friut변수의 값을 fruitList에 추가한다
    const goAppend=()=>{
        //배열의 push함수 사용못함, 원래 배열에 데이터 추가
        //배열 자체를 새로 만들어 바꿔치기를 해야 한다
        //push - 원래 배열메모리에 추가
        //concat - 새로운 배열을 만들어서 기존배열 내용복사하고 하나에 추가
        setFruitList(fruitList.concat(fruit));
        setFruit("");  //input태그 공백채우기
    }

    const goSelect = (index)=>{
        alert(fruitList[index]);
    }
  return(
    <div>
        <input type="text" onChange={onChange} value={fruit}/>
        <button type="button" onClick={goAppend}>추가하기</button>
        <ul>
            {
                fruitList.map( (item, index)=>{
                    return(
                        <li key={index}>
                           <a href="#none" onClick={()=>{goSelect(index)}}>{item}</a>                           
                        </li>
                    )                    
                })
            }
        </ul>
    </div>
  )    
}

export default Fortest2;