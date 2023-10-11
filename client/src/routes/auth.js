import SignIn from "../pages/auth/signin";
import SignUp from "../pages/auth/signup";

const Routes = [
  {
    path: '/signup',
    view: <SignUp />,
    layout: 'auth',
    title: 'SignUp | Customer Grievance'
  },
  {
    path: '/signin',
    view: <SignIn />,
    layout: 'auth',
    title: 'SignIn | Customer Grievance'
  }
]

export default Routes;