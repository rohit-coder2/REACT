import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { DataContext } from "../context.jsx";
import { useNavigate } from "react-router-dom";

const LogPage = () => {
    const {token , setToken} = useContext(DataContext);
    const navigate = useNavigate();
    return <>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={(e) => {
            console.log(e);
            const LogSubmit = () => {
                
        fetch("http://localhost:2000/login/", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(e)
          }).then((res) => res.json()).then((res) => {
            console.log(res)
            sessionStorage.setItem('token' ,res.token)
            setToken(res.token)
            navigate('/list');
          }).catch((err) => {
            // navigate('/error')
            // console.log(err);
  
          });
  
  
            }
            LogSubmit();
        }}>
            <Form>
                <div className="con">

                    <div className="login-box">
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="">Email:</label>
                            <Field name="email" type="email" placeholder=" Enter your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email:</label>
                            <Field name="password" type="password" placeholder="  Enter your Password" />
                        </div>
                        <button type="submit" className="sub">Submit</button>
                        <a href="#" className="forgot-link">Forgot Password?</a>
                    </div>
                </div>

            </Form>
        </Formik>
    </>
}

export default LogPage;