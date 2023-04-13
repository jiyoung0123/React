import React, {useState} from 'react';

function Gugu (props){
    const[dan, setDan] =useState(4);     //단
    const[iList] = useState([1,2,3,4,5,6,7,8,9]);
    const [show, setShow]= useState(false);   //show가 true일때만 화면에 구구단 출력
    
    const danChange=(e)=>{
        setShow(false);  //show를 false로 해서 화면에 출력을 막음
        setDan(e.target.value);    //단값 넣고    
    }

    const goConfirm=()=>{
        setShow(true);           //확인버튼 누르면 show->true로 바꿔서 화면에 출력하게
    }


    return(
        <div>
            몇단? : <input type="text" onChange={danChange}></input>
            <button type="button" onClick={goConfirm}>구구단계산</button>
            <br/><br/>
            <ul>
             {show?
                iList.map( (item,index)=>{
                    return(
                        <li key={index}>
                            {dan} X {item} = {dan*item}
                        </li>
                    );
                })
                :""
            }
            </ul>
        </div>
    )   
}
export default Gugu;   