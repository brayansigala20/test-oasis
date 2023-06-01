import style from '../styles/main.module.css'
import { mockReq } from '../mock'

const WordExp = ({data}) => {
  return (
    <div className={style.WordExpContainer}>
        <p>
            ref: {data}
        </p>
    </div>
  )
}

export default WordExp