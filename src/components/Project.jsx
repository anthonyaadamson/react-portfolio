function Project(props) {
    return(
    <div className="col-6 py-3">
      <a href={props.link}>
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title text-center">{props.name}</h5>
            <p className="card-text text-center">{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Project;

