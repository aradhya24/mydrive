import React, { useEffect } from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap'
import GoogleButton from 'react-google-button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Auth() {
    let auth = getAuth();
    let googleProvider = new GoogleAuthProvider();
    let navigate = useNavigate();
    const signUp = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                localStorage.setItem('userEmail', res.user.email);
                toast.success("Logged In!")
                setTimeout(() => {
                    navigate('/drive')
                }, 1000)
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/drive')
            }
            else {
                navigate('/')
            }
        })
    }, [])
    return (
        <div>
        <Navbar bg="dark" variant="dark" >
    <Container>
    <Navbar.Brand href="#home">MyDrive</Navbar.Brand>
 
    <Nav className="justify-content-right">
      <Nav.Link href="#login"><div >
           
            <GoogleButton
                onClick={signUp}
            />
        </div></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</div>


    )
}
