import 'bootstrap/dist/css/bootstrap.min.css'    //부트스트랩 라이버러리 데리고 들어오는것
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { SERVERIP } from '../../CommonUtil';
import {Link} from "react-router-dom";

function ScoreListFront(props){
    const[scoreList, setScoreList] = useState([]);
    const[loading, setLoading]=useState(false);

    useEffect( ()=>{
        async function loadData(){
        const url = SERVERIP+"/score/list";
        await axios.get(url)
        .then( (res)=>{
            setScoreList(res.data);
            setLoading(true);
            console.log(res.data);
        })
        .catch((error)=>{
            console.log(error);

        })
    }
    loadData();
    },[]);

    return(
        <div className="container">   {/*container로 등록 해 두면, 모양이 옆에 여백이 생기면서 예뻐짐*/}
            <h1>게시판 목록</h1> 
            <div className="input-group mb-3" style={{marginTop:"20px"}}>
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                선택하세요
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">제목</a></li>
              <li><a className="dropdown-item" href="#">내용</a></li>
              <li><a className="dropdown-item" href="#">제목+내용</a></li>
            </ul>
            <input type="text" className="form-control" placeholder="Search"/>
            <button className="btn btn-secondary" type="submit">Go</button>
          </div>

        <table className="table table-hover ">
            <thead className="table-secondary">
              <tr>
                <th>STUDENT_NAME</th>
                <th>KOR</th>
                <th>ENG</th>
                <th>MAT</th>
                <th>WDATE</th>
              </tr>
            </thead>
            <tbody>
               {
                loading===true?
                scoreList.map( (item, index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.STUDENT_NAME}</td>   
                            <td>{item.KOR}</td>
                            <td>{item.ENG}</td>
                            <td>{item.MAT}</td>
                            <td>{item.wdate}</td>
                        </tr>
                    )
                })
                :""
               }                        
            </tbody>
          </table>            
        </div>
    )
}

export default ScoreListFront;