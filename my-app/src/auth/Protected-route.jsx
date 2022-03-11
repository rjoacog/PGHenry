import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args}) => {
    const Cp = withAuthenticationRequired(component)
    return <Cp {...args} />
}

export default ProtectedRoute;