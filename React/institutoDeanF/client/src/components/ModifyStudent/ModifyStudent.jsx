import style from "./Modify.module.css";
import React, { useEffect,useState } from "react";
import axios from "axios";
import FooterPag from "../Footer/FooterPag";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"

const ModifyStudent = () => {
  const {id}=useParams()
const [detail, setDetail]=useState()
  const [formModify, setFormModify] = useState({
    id: "",
    name: "",
    lastName: "",
    dni: "",
    birthDate: "",
    email: "",
    phone: "",
    image: "",
  });

  useEffect(()=>{
    axios.get(`http://localhost:3001/student/student/${id}`)
    .then ((data)=>{
         //console.log(data.data,"esto es data");
        // console.log(data.data.id,"esto es data.data.id");
        if(data.data.id){
            setDetail(data.data)
            console.log(detail,"esto es detail");
        }
    })
    },[id])
   
  const submitHandler = (e) => {
    e.preventDefault();
    const formToSubmit = { ...formModify };
   // console.log(formToSubmit,"hola ");  
  for (const key in formModify) {
    if (formModify[key] === "") {
      formModify[key] = detail[key];
    //  console.log( formModify[key]," formModify[key]");
     // console.log(detail[key],"detail[key]");
    }
  }
  console.log(formToSubmit,"info enivada al back ");
    axios
      .put("http://localhost:3001/student", formToSubmit)
      .then((res) => alert(res));

  };

  const handleImageUpload = (event) => {
    //console.log(event.target.files, "event.target.files")
    const imageFile = event.target.files[0];
    console.log(event.target.files[0], "esto es event.target.files[0]");
    setFormModify({ ...formModify, image: imageFile });
    const imageURL = URL.createObjectURL(imageFile); // Generar la URL de la imagen
    setFormModify((prevRegister) => ({ ...prevRegister, imageURL }));
  };

  const changeHandler = (e) => {
    setFormModify({ ...formModify,[e.target.name]: e.target.value })
  };


 

  return (
        <form encType="multipart/form-data" onSubmit={submitHandler} className={style.divbody}>
        <div  className={style.divcontainer}>
          <div>
          <h1 className={style.title}>Modificar estudiante</h1>
          </div>
         


          
          <div className={style.conteinerDivDivs}>
            
            <div className={style.divLabelInput}>
              <label htmlFor="name" className={style.label}>Nombre</label>
              <input
                type="text"
                name="name"
                value={formModify.name}
                onChange={changeHandler}
                className={style.input}
                />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="lastName" className={style.label}>Apellido</label>
              <input
                type="text"
                name="lastName"
                value={formModify.lastName}
                onChange={changeHandler}
                className={style.input}
              />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="dni" className={style.label}>DNI</label>
              <input
                type="number"
                name="dni"
                value={formModify.dni}
                onChange={changeHandler}
                className={style.input}
                />
             
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="birthDate" className={style.label}>Fecha de nacimiento</label>
              <input
                type="text"
                name="birthDate"
                value={formModify.birthDate}
                onChange={changeHandler}
                className={style.input}
                />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="email" className={style.label}>Email</label>
              <input
                type="text"
                name="email"
                value={formModify.email}
                onChange={changeHandler}
                className={style.input}
              />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="phone" className={style.label}>Telefono</label>
              <input
                type="text"
                name="phone"
                value={formModify.phone}
                onChange={changeHandler}
                className={style.input}
                />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="image" className={style.label}>Image</label>
              <input
                type="file"
                name="image"
                value={formModify.image}
                onChange={handleImageUpload}
                className={style.input}
                />
            </div>
          </div>
          <div className={style.buttomDiv}>

           
              <div  id="divCrear" >
            <button type="submit" className={style.buttomSend} >ACEPTAR</button>
              </div>

          <Link to="student"><button className={style.buttomSend}>VOLVER</button></Link>
          
          </div>
          <FooterPag/>
          
        </div>
        </form>
   
  
  );
};

export default ModifyStudent;
