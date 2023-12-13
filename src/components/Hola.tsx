import React from 'react'
interface ImagenProps {
    url: string;
    }
const Hola: React.FC<ImagenProps> = ({ url }) => {
  return (
    <>
    <img src={url} alt="Imagen" style={{width:"200px", marginTop:'20px'}}/>
    
    </>
  )
}

export default Hola