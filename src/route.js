import React from "react";

const SignUp = React.lazy(() => import("./Demo/Authentication/SignUp/SignUp"));
const Signin = React.lazy(() => import("./Demo/Authentication/SignIn/SignIn"));

const route = [
  { path: "/auth/signup", exact: true, name: "Signup", component: SignUp },
  { path: "/auth/signin", exact: true, name: "Signin", component: Signin },
];

export default route;
