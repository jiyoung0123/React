import axios from "axios";
import React, {useState} from "react";

function HeroWrite(props){
    const [hero_name, setHeroName] = useState("");  
    //useState함수가 문자열변수랑 변수값 바꾸는 함수를 만들어서 배열형태로 전달한다
    const [horo_desc, setHoroDesc] = useState("");

    //input태그에 값이 바뀌면 이 함수가 호출된다.
    const heroNameChange =(e)=>
    {
      setHeroName(e.target.value);

    }

    //input태그에 값이 바뀌면 이 함수가 호출된다.
    const horoDescChange = (e)=>
    {
        setHoroDesc(e.target.value);
    }

    //form태그를 써서 서버로 전송할때 <button>태그에 type="button" 속성이 없으면 
    //버튼을 누를때 submit()함수가 호출된다.
    //submit 함수가 호출되면 form 태그에 onSubmit이벤트핸들러가 호출된다. 이때
    //잡아채서 서버에 전송하는 처리를 한다. onSubmit함수의 경우 무조건 서버로 전송을 한다.
    //이걸 막기 위해서 preventDefault()함수를 호출한다
    const onSubmit = (e)=>{
        e.preventDefault();    //form태그를 통해 서버에 정보를 전송전에 호출된다.
                               //버튼의 기본 기능을 정지시킨다. submit버튼의 submit기능을 
                               //막고, 별도의 처리를 한다
        //Spring은 데이터를 문자열로 와야 받는다
        //Axios는 JSON으로 데이터를 주고 받는다                       
        axios.post("http://localhost:9090/hero/write",
        {hero_name:hero_name, horo_desc:horo_desc})
        .then( (res)=>{
            console.log(res.data.result);
            window.location.reload();   //화면 다시 불러오기
            //location 객체는 원래 존재하는데 부모가 윈도우
            //react가 아니면 location.reload()만 호출해도 되는데
            //react는 window.location.reload()로 호출해야 함.
        })
        .catch( (error)=>{
            console.log(error);
        })                      
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
            <h3>영웅</h3>
            이름 : <input type="text" onChange={heroNameChange}></input> <br/>
            업적 : <input type="text" onChange={horoDescChange}></input> <br/>

            <button>추가</button>
            </form>
        </div>
    )
}

export default HeroWrite;