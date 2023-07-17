import { useEffect } from "react"
import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 30px;
  transition: background-color .3s ease;
  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

const Formulario = () => {
  // useSelectMonedas nos retorna un arreglo con dos elementos
  // el nombre del primer elemento de nuestro array hará referencia al primer elemento del arreglo retornado, y el del segundo al segundo
  // por eso podemos llamarlo como queramos sin necesitar que coincida el nombre
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas) 

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      console.log(resultado.Data)

    }
    consultarAPI()
  }, [])

  return (
    <form>
      <SelectMonedas />
      <InputSubmit
        type="submit"
        value='Cotizar'
      />
    </form>
  )
}

export default Formulario