function DemoCondition(props){
    let isEdit = props.isEdit;
    return(
        <>
            <h1>Hello world from {props.name}</h1>
            {!isEdit && <button className="btn btn-primary">Add</button>}
            {isEdit && <button className="btn btn-warning">Edit</button>}
        </>
    );
}

export default DemoCondition;