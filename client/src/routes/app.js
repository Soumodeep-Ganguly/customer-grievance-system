import Dashboard from "../pages/dashboard/dashboard";

const Routes = [
  {
    path: '/',
    view: <Dashboard />,
    layout: 'auth',
    permission: "user",
    title: 'Dashboard | Customer Grievance'
  }
]

export default Routes;