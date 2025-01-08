import { useState , useContext} from 'react';
import {ReactComponent as CloseIcon} from '../images/close.svg';

import { Context } from '../pages/Layout';

const Registration = () => {

    const [isAccount, setIsAccount] = useState(true)
    const toggleLogin = () =>{
        setIsAccount(!isAccount)
    }

    const [isOpen, setIsOpen] = useContext(Context)

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
                                    <input type="email" placeholder='Email'/>
                                    <input type="password" placeholder='Password'/>
                                </form>
                                <div className="change-form">
                                    Don't have account?
                                    <button onClick={()=>toggleLogin()}>Sign in</button>
                                </div>
                                <button className='registration-btn'>Log in</button>
                            </>
                            :
                            <>
                                <h5>Register</h5>
                                <form className="registration-form">
                                    <input type="email" placeholder='Email'/>
                                    <input type="password" placeholder='Password'/>
                                    <input type="text" placeholder='Username'/>
                                </form>
                                <div className="change-form">
                                    Already hava account?
                                    <button onClick={()=>toggleLogin()}>Login</button>
                                </div>
                                <button className='registration-btn'>Create an account</button>
                            </>

                    }
                </div>
            </div>
        </div>
    );
};

export default Registration;