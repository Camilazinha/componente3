const Etiqueta = (props) => {
    var textoLocal = "TEXTO PADRAO"
    return (
        <>
        <p>{
        props.texto != null
        ? props.texto 
        : textoLocal
        }</p>
        </>
    )
}

export default Etiqueta