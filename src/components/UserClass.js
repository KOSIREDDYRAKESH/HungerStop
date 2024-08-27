import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    render() {
        const { count } = this.state;
        const { name, Locality, Email } = this.props;
        return (
            <div>
                <UserContext.Consumer>
                    {({ loginUser }) => <h1 className="mt-24">Name : {loginUser}</h1>}
                </UserContext.Consumer>
                <h1 className="m-5">Locality : {Locality}</h1>
                <h1 className="m-5">E-mail : {Email}</h1>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    });
                }}>😍</button>
                <p>{count}</p>
            </div>
        );
    }
}

export default UserClass;