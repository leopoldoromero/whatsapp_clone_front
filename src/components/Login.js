import React from 'react'
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase"
import "./Login.css"
import {useStateValue} from "../redux/StateProvider"
import {actionTypes} from "../redux/reducer"

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })

        .catch((error) => alert(error.message))
        
    };

    return (
        <div className="login">
            <div className="login_contain">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg"
                    alt=""
                    />
                    <div className="login_title">
                        <h1>Sing in to WhatsApp</h1>
                    </div>
                    <Button onClick={signIn}>
                     Sing In With Google
                    </Button>
            </div>
            
        </div>
    )
}

export default Login
