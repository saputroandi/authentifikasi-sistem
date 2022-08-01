import axios from "axios";
import React, { useState } from "react";
import { useCustomAxios } from "../../api/axios";
import { User } from "../../types";

const initialState: User = {
  email: "",
  password: "",
  isLogin: false,
};

const Register: React.FunctionComponent = (): React.ReactElement => {
  const [userState, setUserState] = useState<User>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    return setUserState((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await useCustomAxios.post("/auth/sign-up", userState);
    // const res = await axios.post(
    //   "http://localhost:8800/auth/sign-up",
    //   userState
    // );
    console.log(res);
  };
  return (
    <div>
      <div>
        <div>Daftar</div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              value={userState.email}
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={userState.password}
              placeholder="Password"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
