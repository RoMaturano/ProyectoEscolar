import { Link, useHistory } from "react-router-dom";
import style from "./CrearUsuario.module.css";
import { useState } from "react";
import axios from "axios";
import FooterPag from "../../Footer/FooterPag";

const CrearUsuario = () => {
  const history = useHistory();
  const [register, setRegister] = useState({
    fname: "",
    lname: "",
    dni: 0,
    userStaff: "",
    passwordStaff: "",
    phone: "",
    datetime: "",
    gender: "",
    postalcode: "",
    localidad: "",
    street: "",
    streetnumber: "",
    email: "",
    matricula: "",
    userStaff: "",
    passwordStaff: "",
    typeuser:""
  });

  const changeHandler = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  const submitHandler = () => {
    //  console.log(register,"register");

    axios
      .post("http://localhost:3001/staff", register)
      .then((res) => alert(res));
    history.push("/usuario");
  };

  //encType="multipart/form-data"
  return (
    <form onSubmit={submitHandler} className={style.divbody}>
      <div className={style.div1}>
        <h1 className={style.title}>Registrar admin</h1>
        <div className={style.conteinerDivDivs}>
          <div className={style.divLabelInput}>
            <label htmlFor="fname" className={style.label}>
              Nombre
            </label>
            <input
              type="text"
              value={register.fname}
              name="fname"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          <div className={style.divLabelInput}>
            <label htmlFor="lname" className={style.label}>
              Apellido
            </label>
            <input
              type="text"
              value={register.lname}
              name="lname"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          <div className={style.divLabelInput}>
            <label htmlFor="dni" className={style.label}>
              DNI
            </label>
            <input
              type="number"
              value={register.dni}
              name="dni"
              onChange={changeHandler}
              className={style.input}
            />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <input
              type="text"
              value={register.email}
              name="email"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          {
            "------------------------------------------------------------------------------"
          }
          <div className={style.divLabelInput}>
            <label htmlFor="phone" className={style.label}>
              Telefono
            </label>
            <input
              type="text"
              value={register.phone}
              name="phone"
              onChange={changeHandler}
              className={style.input}
            />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="datetime" className={style.label}>
              Fecha nacimiento
            </label>
            <input
              type="text"
              value={register.datetime}
              name="datetime"
              onChange={changeHandler}
              className={style.input}
            />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="gender" className={style.label}> Genero </label>

            <select  name="gender" value={register.gender} onChange={changeHandler}>
              <option value="">Seleccionar </option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
            </select>
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="gender" className={style.label}> Tipo de Usuario </label>

            <select  name="gender" value={register.gender} onChange={changeHandler}>
              <option value="">Seleccionar </option>
              <option value="Preceptor">Preceptor</option>
              <option value="Docente">Docente</option>
              <option value="Padre">Padre</option>
            </select>
          </div>

          typeuser

          <div className={style.divLabelInput}>
            <label htmlFor="postalcode" className={style.label}>
              Codigo Postal
            </label>
            <input
              type="number"
              value={register.postalcode}
              name="postalcode"
              onChange={changeHandler}
              className={style.input}
            />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="localidad" className={style.label}>
              Localidad
            </label>
            <input
              type="text"
              value={register.localidad}
              name="localidad"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          <div className={style.divLabelInput}>
            <label htmlFor="street" className={style.label}>
              Calle
            </label>
            <input
              type="text"
              value={register.street}
              name="street"
              onChange={changeHandler}
              className={style.input}
            />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="streetnumber" className={style.label}>
              Numero de calle
            </label>
            <input
              type="text"
              value={register.streetnumber}
              name="streetnumber"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          <div className={style.divLabelInput}>
            <label htmlFor="matricula" className={style.label}>
              Matricula
            </label>
            <input
              type="number"
              value={register.matricula}
              name="matricula"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          <div className={style.divLabelInput}>
            <label htmlFor="passwordStaff" className={style.label}>
              Contraseña
            </label>
            <input
              type="number"
              value={register.passwordStaff}
              name="passwordStaff"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
        </div>

        <div className={style.buttomDiv}>
          <button type="submit" className={style.butom}>
            ENVIAR
          </button>
          <Link to="/usuario">
            <button className={style.butom}>VOLVER</button>
          </Link>
        </div>
      </div>
      <FooterPag />
    </form>
  );
  /**
   * En React, las etiquetas <input> se consideran elementos vacíos y no deben tener contenido ni etiquetas de cierre.
   */
};
export default CrearUsuario;
