import React from 'react';
import { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { Form } from "./style";

const Login: FunctionComponent<RouteComponentProps> = () => {
  return(
    <Form>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Form> 
  )
};

export default Login;
