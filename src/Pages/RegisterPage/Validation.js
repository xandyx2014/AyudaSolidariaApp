export default function validation(data){
    const error ={}

    const emailPattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passwordPattern= /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g;

    if(data.fullname === ""){
        error.fullname="* Nombre es requerido!"
    }

    if(data.email === ""){
        error.email ="* Email es Requerido"
    }
    else if(!emailPattern.test(data.email)){
        error.email="* Email no hace match"
    }



    if(data.password === ""){
        error.password = "* Password es requerido"
    }
    else if(!passwordPattern.test(data.password)){
        error.password="* Password no es valido"
    }
    

    if(data.confirmpassword === ""){
        error.confirmpassword="* Confirmar password es Requerido"
    }
    else if(data.password !== data.confirmpassword){
        error.confirmpassword ="* Confirmar password no hace  match"
    }

    return error
}