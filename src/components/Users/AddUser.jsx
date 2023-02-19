const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="">Username</label>
            <input id="" type="text" />
            <label htmlFor="">Age (Years)</label>
            <input id="" type="number" />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;