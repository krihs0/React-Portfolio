import "./ProjectsCard.css";

const ProjectsCard = (props) => {
    return(
        <article className="card">
            <div className="card__img--gradient">
            <img className="card__img" src={"img/" + props.image} alt=""/>
            </div>
            <div className="card__info">
                <h1 className="card__h1">{props.title}</h1>
                <p className="card__description">{props.description}</p>
            </div>
        </article>
    )
}

export default ProjectsCard;