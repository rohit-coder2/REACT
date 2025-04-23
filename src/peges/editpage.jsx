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
            <Field type="text" name="name" placeholder="name"/>
            <Field type="email" name="email" placeholder="email"/>
            <Field type="text" name="phone" placeholder="phone"/>
            <Field type="password" name="password" placeholder="password"/>
            <button type="submit">Submit</button>
        </Form>

        </Formik>
     </>
}

export default EditPage;