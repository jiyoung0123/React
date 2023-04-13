/*"Fortest1.js*/
//#none는 링크를 누르면 앵커 태그 눌렀을 때 화면 스크롤을 막고, 위치이동을 막아준다
//함수의 onClick 에 바로 함수를 호출하면 (ex. onClick={goSelect} ) 클릭햇을 때 함수가 호출되는게 아니라
//배열을 불러오면서 바로 호출이 됨. 그래서 안에 꼭 람다함수를 써야 함
import React, {useState} from "react";

function Fortest1(props){
    const [fruitList] = useState(["사과", "배", "포도", "수박", "머루" ]);

    const goSelect = (index)=>{
        alert(fruitList[index]);
    }
  return(
    <div>
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

export default Fortest1;