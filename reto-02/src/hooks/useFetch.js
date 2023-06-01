import { useEffect, useState } from "react"
export const useFetch = () => {
    const [data, setData] = useState("")

    const getData = async(word) => {
        const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        try {
         const res = await fetch(URL)
         if(!res.ok) {
          throw new Error("Network is bad")
         }
         const data =  await res.json()
         setData(data[0].meanings[0].definitions[0].definition)
        } catch (error) {
         console.log(error)
        }
     }
    return {
        getData,
        data
    }
}