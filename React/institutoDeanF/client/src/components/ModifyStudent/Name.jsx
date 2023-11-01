import style from "./Modify.module.css";
import React, { useEffect,useState } from "react";
import axios from "axios";
import FooterPag from "../Footer/FooterPag";
import { Link } from "react-router-dom";
import CardStudent from "../CardStudent/CardStudent";

const Name = () => {
    const [student,setStudent]=useState({
       name:""
      })
      const [studentFilter, setStudentFilter] = useState();


      const changeHandler = (e) => {
   
        setStudent({
          ...student,
          [e.target.name]: e.target.value,
        });
      };

      const clickName=async ()=>{
     
       const students=await axios.get(`http://localhost:3001/student/${student.name}`)
        //console.log("Data", students.data);
        setStudentFilter(students.data)
      }

  return (
       <div className={style.divbody}>
        <label htmlFor="name"  className={style.label}>Nombre</label>
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={changeHandler}
                className={style.input}
                />

                <button onClick={clickName} className={style.butom}>Buscar</button>

                <div>
          {studentFilter?.map((el) => {
            return (
              <div>
                <CardStudent
                  key={el.id}
                  id={el.id}
                  lastName={el.lastName}
                  name={el.name}
                  dni={el.dni}
                  image={el.image}
                />
                ,
                <Link to={`/modify/${el.id}`}>
                  <div className={style.divButomCargar}>
                    <button className={style.butom}>Modificar</button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
       </div>
   
  
  );
};

export default Name;
