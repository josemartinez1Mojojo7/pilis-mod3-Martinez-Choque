import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { BiUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import './Login.css'

const Login = () => {

  const { setCurrentUser } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    localStorage.setItem('currentUser', JSON.stringify(data))
    setCurrentUser(data)
    navigate('/')
  }

return (
    <div className='sign-in-container'>
    <form className='sign-in-form shadow p-4 mb-4' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='mb-4'>Welcome</h1>
        <div className='div-input'>
            <div className="input-group mb-3">
                <span className="box-icon">
                    <i className='icon-login'><BiUser/></i>
                </span>
                <input
                    className='form-control'
                    type="text"
                    placeholder='Nombre de usuario'
                    {...register('username', {
                        required : 'Debe ingresar su nombre de usuario'
                        }
                    )
                } />
            </div>
            <p className='txt-error'>{errors.username?.message}</p>
        </div>
        <div className='div-input'>
            <div className="input-group mb-3">
                <span className="box-icon">
                    <i className='icon-login'><RiLockPasswordFill/></i>
                </span>
                <input
                    className='form-control'
                    type='password'
                    placeholder='Contraseña'
                    {...register(
                        'password',
                        {
                            required : 'Debe ingresar su contraseña'
                        }
                        )
                    }
                    />                
            </div>
            <p className='txt-error'>{errors.password?.message}</p>
        </div>
        <button className='btn-form' type='submit'>Iniciar Sesión</button>
    </form>
    </div>
)
}

export default Login