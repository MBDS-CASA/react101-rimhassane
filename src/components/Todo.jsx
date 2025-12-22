function Todo({label, description, status}) {
    return (
        <div className="todo-item">
            <h3>{label}</h3>
            <p>{description}</p>
            <p>Status: {status ? "Completed" : "Pending"}</p>
        </div>
    );
}
export default Todo;