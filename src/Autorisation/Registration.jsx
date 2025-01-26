import {ReactComponent as CloseIcon} from '../images/close.svg';
import { useState , useContext} from 'react';
import { Context } from '../pages/Layout';
import {createUser, authUser} from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { emailRegex } from '../utils/constants';

const Registration = () => {

    const [isAccount, setIsAccount] = useState(true)
    const toggleLogin = () =>{
        setIsAccount(!isAccount);
        setValues({
            name: '',
            email:'',
            password: '',
            avatar: "https://picsum.photos/800"
        });
        setLoginVakues({
            email:'',
            password: ''
        });
    }

    const [isOpen, setIsOpen] = useContext(Context)

    const dispatch = useDispatch()
    const {isUser, authError} = useSelector(state => state.user)

    const [values, setValues] = useState({
        name: '',
        email:'',
        password: '',
        avatar: "https://picsum.photos/800"
    })


    const [loginValues, setLoginVakues] = useState({
        email:'',
        password: ''
    })


    const handleValues = (e, keyName) => {
        setValues({ ...values, [keyName]: e.target.value });
    };

    const handleLoginValues = (e, keyName) => {
        setLoginVakues({ ...loginValues, [keyName]: e.target.value });
    };

    if(isUser){
        return
    }

    return (
        <div className={`registration-layout ${isOpen? '' : 'registration__hide'}`}>
            <div className="registration">
                <div className="registration-wrapper">
                    <div className="registration-close">
                       <CloseIcon onClick={()=>setIsOpen(!isOpen)} className="busket-delete__icon" />
                    </div>
                    {
                        isAccount?
                            <>  
                                <h5>Login</h5>
                                <form className="registration-form">
                                    <input type="email" placeholder='Email' value={loginValues.email} onChange={(e)=>handleLoginValues(e, 'email')}/>
                                    <input type="password" placeholder='Password' value={loginValues.password} onChange={(e)=>handleLoginValues(e, 'password')}/>
                                </form>
                                {authError && <p className='authError'> * wrong password or email</p>}
                                <div className="change-form">
                                    Don't have account?
                                    <button onClick={()=>toggleLogin()}>Sign in</button>
                                </div>
                                <button className='registration-btn'
                                    onClick={()=>dispatch(authUser(loginValues))}>
                                        Log in</button>
                            </>
                            :
                            <>
                                <h5>Register</h5>
                                <form className="registration-form">
                                    <input type="email" placeholder='Email'value={values.email} onChange={(e)=>handleValues(e, 'email')}/>
                                    {!emailRegex.test(values.email) && <p className='authError'> * incorrect email format</p>}
                                    <input type="password" placeholder='Password' value={values.password} onChange={(e)=>handleValues(e, 'password')}/>
                                    {(values.password.length < 4) && <p className='authError'> * password too short, at least 4 symbols</p>}
                                    <input type="text" placeholder='User name' value={values.name} onChange={(e)=>handleValues(e, 'name')}/>
                                    {(values.name.length === 0) && <p className='authError'> * please, input your name</p>}
                                </form>
                                <div className="change-form">
                                    Already hava account?
                                    <button onClick={()=>toggleLogin()}>Login</button>
                                </div>
                                <button className='registration-btn' type='submit' 
                                    onClick={()=>{dispatch(createUser(values))}}>
                                        Create an account
                                </button>
                            </>

                    }
                </div>
            </div>
        </div>
    );
};

export default Registration;