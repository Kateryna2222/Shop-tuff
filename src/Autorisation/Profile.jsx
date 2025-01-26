import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/userSlice";
import { Link } from "react-router-dom";
import { updateUser } from "../store/userSlice";
import { useState } from "react";
import { emailRegex } from "../utils/constants";

const Profile = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user)

    const [values, setValues] = useState({
        name: currentUser.name,
        email: currentUser.email
    })

    const handleValues = (e, key)=>{
        setValues({...values, [key]: e.target.value});
    }

    return (
        <section className="profile">
            <form>
                <div className="profile-items">
                    <div className="profile-item">
                        <label>Name:</label>
                        <input type="text" placeholder="Your name" value={values.name} onChange={e => handleValues(e, 'name')}/>
                        {values.name.length === 0 && <p className='authError'> * name can't be empthy</p>}
                    </div>
                    <div className="profile-item">
                        <label>Email:</label>
                        <input type="email" placeholder="Your email" value={values.email} onChange={e => handleValues(e, 'email')}/>
                        {!emailRegex.test(values.email) && <p className='authError'> * incorrect email format</p>}
                    </div>
                </div>
                <div className="profile-btns">
                    <button disabled={values.name.length === 0} onClick={(e)=>{
                        dispatch(updateUser({id: currentUser.id, upadateValues: values}))
                        e.preventDefault()}}>
                            Confirm changes
                    </button>
                    <Link to={'/'} onClick={()=>{dispatch(logOut())}} className="logout-btn">Log out</Link>
                </div>
            </form>
        </section>
    );
};

export default Profile;