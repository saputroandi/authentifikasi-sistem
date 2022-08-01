import { AxiosResponse } from "axios";
import { NextRouter, withRouter } from "next/router";
import React from "react";
import { useCustomAxios } from "../../api/axios";
import { User } from "../../types";

type Props = {
  children?: React.ReactNode;
  router: NextRouter;
};

type State = User;

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  readonly state: State = {
    email: "",
    password: "",
    isLogin: false,
  };

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  }

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res: AxiosResponse = await useCustomAxios.post(
      "/auth/sign-in",
      this.state
    );

    if (res.status === 200) {
      this.setState((state) => {
        return { ...state, isLogin: true };
      });

      this.props.router.push("register");
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <div>
          <div>Login</div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.email}
                placeholder="Email"
              />
              <input
                name="password"
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
                placeholder="Password"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
