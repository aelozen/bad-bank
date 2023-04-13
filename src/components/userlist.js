const UserList = (props) => {
    const usersToRender = props.users.filter(user => user.name !== null);

    if (usersToRender.length === 0) {
        return <div className="user-list">No users to show</div>;
    }
    else {
        return (
            <div className="user-list">
                {usersToRender.map((user) => (
                    <div className="user-list">
                        <div className="card-header">
                        </div>
                        <div className="card-body">
                            <h5><strong>name:  </strong>   {user.name}  </h5>
                            <h5><strong>email:  </strong> {user.email}  </h5>
                            <h5><strong>password:  </strong> {user.password}  </h5>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default UserList; 