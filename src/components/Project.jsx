function Project(props) {
    return(
    <div className="col-6">
      <a href={props.link}>
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Project;

