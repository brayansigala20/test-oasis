import { useFormUser } from '../hooks'
import style from '../styles/userForm.module.css'
const UserForm = () => {
    const { handleSubmit, handleOnChange, data } = useFormUser()
    return (
        <div className={style.container}>
            <h2>UserForm</h2>
            <form onSubmit={handleSubmit} className={style.formContainer}>
                <div>
                    <label>First Name:</label>
                    <input
                        onChange={(e) => handleOnChange(e)} type="text" name="firstName" />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input onChange={(e) => handleOnChange(e)} type="text" name="lastName" />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        onChange={(e) => handleOnChange(e)} type="email" name="email" />
                </div>
                <button type="submit" className={style.buttonSubmit}>Submit</button>
            </form>

            {data.firstName && data ? (
                <div className={style.data}>
                    <h2>First Name:{''} {data.firstName}</h2>
                    <h2>Last Name:{''} {data.lastName}</h2>
                    <h2>Email: {''} {data.email}</h2>
                </div>
            ) : (
                ''
            )}

        </div>
    )
}

export default UserForm