import { Field , Form ,Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditPage  =( ) => {
    const  {id} = useParams();
    const [data, setData] = useState();

    const navigate = useNavigate();
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`http://localhost:2000/contact/${id}`);
            const res = await response.json();
            setData(res);
        }

        fetchData();
    },[data?.status]);

    if(!data){
        return <>Loading...</>
    }

return <>
        <Formik initialValues={{
            name: data.user.name,
            email : data.user.email,
            phone:data.user.phone,
            password:data.user.password
        }} onSubmit={(e)=>{console.log(e);
            
      const postData = async () => {

        fetch(`http://localhost:2000/contact/${id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(e)
        }).then((res) => res.json()).then((res) => {
          console.log(res)
        //   navigate('/updatesuc');
        }).catch((err) => {
        //   navigate('/error')
          // console.log(err);

        });
      }
      postData();

        }}>
        <Form>
          <div className="con">
            <div className="login-box"> 
            <h1>Edit page</h1>
            <br />
            <label htmlFor="name">Name:</label> 
            <Field type="name" name="name" placeholder="name"/>
            <br />
            <br />
            <label htmlFor="name">Email:</label> 
            <Field type="email" name="email" placeholder="email"/>
            <br />
            <br />
            <label htmlFor="name">Phone:</label> 
            <Field type="phone" name="phone" placeholder="phone"/>
            <br />
            <br />
            <label htmlFor="name">Password:</label> 
            <Field type="password" name="password" placeholder="password"/>
            <br />
            <br />
            <button type="submit" className="sub">Submit</button>
            </ div>
          </div>
        </Form>

        </Formik>
     </>
}

export default EditPage;