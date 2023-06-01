import { useState } from 'react';
import { FieldFind, WordExp } from "../components"
import { useFetch } from "../hooks/useFetch.js"

const MainPage = () => {
  const [word, setWord] = useState('')
  const { data, getData } = useFetch()
  console.log(data)
  return (
    <>
      <FieldFind setWord={setWord} getData={getData} word={word} />
      <WordExp data={data}/>
    </>


  )
}

export default MainPage