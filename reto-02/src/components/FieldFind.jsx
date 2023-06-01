import { useState } from 'react'
import style from '../styles/main.module.css'
const FieldFind = ({ getData, setWord, word }) => {
  return (
    <div className={style.inputContainer}>
      <label htmlFor=""> Dicionario </label>
      <input onChange={e => setWord(e.target.value)} type={'search'} />
      <button onClick={()=>getData(word)} className={style.buttonFind}>buscar</button>
    </div>
  )
}

export default FieldFind