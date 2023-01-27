export const  getParamByName=(parametro)=>{
    let parametros=window.location.search
    parametros= new URLSearchParams(parametros);
    return parametros.get(parametro)
}