import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { login, logout } from '../Redux/Auth/action';


export const Login = () => {
  const dispatch = useDispatch();

  const [temp, setTemp] = useState([])

  const [data, setData] = useState({
    username: '',
    pass: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  async function getData(){
    const res = await axios.get("http://localhost:8080/users");
    // setTemp([...temp, res.data]);
    console.log(res.data);
    // t.map((e) => (
    //   e.usernam
    // ))
  }

  const handleSubmit = () => {
    temp.map(t => {
      if(t.username === data.username && t.pass === data.pass){
        dispatch(login(true));
      }
    })
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <input
        onChange= {handleChange}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        onChange= {handleChange}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
};
