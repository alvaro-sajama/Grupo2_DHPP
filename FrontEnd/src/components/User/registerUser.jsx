
export function registerUser(){
    return(
        <form>
            <label htmlFor="">Nombre</label>
            <input className="" id="name"></input>
            
            <label htmlFor="">Email</label>
            <input className="" id="email"></input>
            
            <label htmlFor="">Telefono</label>
            <input className="" id="telefono"></input>
            
            <label htmlFor="">Perfil URL de Linkedin</label>
            <input className="" id="perfilLinkedin"></input>
            
            <label htmlFor="">Rubro</label>
            <input className="" id="rubro"></input>
            
            <label htmlFor="">Contraseña</label>
            <input className="" id="passwd"></input>
            
            
            <label htmlFor="">Repetir Contraseña</label>
            <input className="" id="repitPasswd"></input>
            
            <label htmlFor="">Imagen</label>
            <input className="" id="img"></input>
            <button id="btnImg">Cargar Imagen</button>
 
            <label className="">
                    <input type="checkbox" id="acceptTerms" name="acceptTerms" >
                    Acepta Términos y Condiciones
                    </input>
            </label>

            <button type="submit">
                Enviar
            </button>
            <button type="reset">
                Resetear
            </button>
        </form>
    );
}