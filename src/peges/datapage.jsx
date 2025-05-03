import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
const FieldFill = () => {


    const navigate = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('http://localhost:2000/contact/');
                const json = await data.json();
                setData(json);
                console.log(json);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [data?.status])
    if (!data) {
        return <div>Loading...</div>;
    }
    return <>
    
        <div className="con">

            <table className="table">
                <thead>
                    <tr>
                        <th className="td">Name</th>
                        <th className="td">Password</th>
                        <th className="td">Email</th>
                        <th className="td">Phone</th>
                        <th className="td">Update</th>
                        <th className="td">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.user?.map((element) => (
                        <tr key={element?._id}>
                            <td className="td">{element?.name}</td>
                            <td className="td">{element?.password}</td>
                            <td className="td">{element?.email}</td>
                            <td className="td">{element?.phone}</td>
                            <td className="td">
                                <button className="sub" 
                                    onClick={() => {
                                        navigate(`/list/${element._id}`);
                                    }}
                                >
                                    Edit
                                </button>
                            </td>
                            <td className="td">

                                <button className="sub"
                                    onClick={() => {
                                        const deleteData = async () => {
                                            await fetch(`http://localhost:2000/contact/${element._id}`, {
                                                method: 'DELETE',

                                            });
                                            document.location.reload();
                                        }
                                        deleteData();
                                        // navigate(`/field/${element._id}`);
                                        
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </>

}

export default FieldFill;