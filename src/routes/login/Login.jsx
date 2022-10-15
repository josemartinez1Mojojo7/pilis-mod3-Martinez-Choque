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
    <span className='mb-3'>Ingresa con tu usuario y contraseña</span>
    <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='div-input'>
            <div class="input-group mb-3">
                <span class="box-icon">
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
            <p>{errors.username?.message}</p>
        </div>
        <div className='div-input'>
            <div class="input-group mb-3">
                <span class="box-icon">
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
            <p>{errors.password?.message}</p>
        </div>
        <button className='btn-form' type='submit'>Iniciar Sesión</button>
    </form>
    </div>
)
}

export default Login