const {StaffTeacher}=require("../../db")




const postStaffTeacher=async(auxStaff)=>{
try {

    const   newStaf= await StaffTeacher.create({nameStaff:auxStaff.fname,lastNameStaff:auxStaff.lname,dniStaff:auxStaff.dni,
        phone:auxStaff.phone,birthDate:auxStaff.datetime,
        gender: auxStaff.gender,postalcode:auxStaff.postalcode,
        localidad:auxStaff.localidad,
        street:auxStaff.street,
        streetnumber:auxStaff.streetnumber,
        email:auxStaff.email,
        matricula:auxStaff.matricula,userStaff:auxStaff.email,
        typeuser:auxStaff.typeuser, passwordStaff:auxStaff.password,banned:auxStaff.banned})
    console.log(newStaf,"controller");

 return "se ha creado"
    
} catch (error) {
    return ({error:error.message})
}




}

module.exports={
    postStaffTeacher

}