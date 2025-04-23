import { Field, Form, Formik } from "formik";
const MyForm = () => {
    return <>
        <Formik initialValues={{
            name: "", email: "", phone: "", password: ""
        }} onSubmit={(e) => {
            console.log(e);
            const handleSubmit = () => {
                
        fetch("http://localhost:2000/contact/", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(e)
          }).then((res) => res.json()).then((res) => {
            console.log(res)
            // navigate('/home');
          }).catch((err) => {
            // navigate('/error')
            // console.log(err);
  
          });
  

            }
            handleSubmit();
        }}><Form>
            <div className="con">

                <div className="login-box">
                    <h2>Sing Up</h2>
                    <div className="form-group">
                    <label htmlFor="name">Name:</label> 
                    <Field  type="name"name="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">Email:</label> 
                    <Field type='email' name="email" placeholder="Enter Your Email"  />
                    </div>

                    <div className="form-group">
                    <label htmlFor="name">Phone:</label>
                    <Field type='phone' name="phone" placeholder="Enter Your Phone Number" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">Password:</label>
                    <Field  type='password' name="password" placeholder="Enter password"              />
                    </div>
                    <button type="submit" className="sub">Submit</button>

                </div>
                </div>
            </Form>

        </Formik>
    </>
}

export default MyForm;