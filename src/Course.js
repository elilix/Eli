const Course = (props) => {
    return (
      <div style={{
        border: "1px solid #ccc",
        borderRadius: '5px',
        padding: "7px 7px",
        marginBottom: "20px",
      }}>
        <h3 style={{color:"#ccc"}}>2023U0002023154{props.code}</h3>
        <h1>{props.classcode}_{props.title}</h1>
        <h4>{props.prof}</h4>
      </div>
    );
  };

  export default Course;