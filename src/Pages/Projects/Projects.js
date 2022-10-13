import Header from "../../Components/Header/Header";
import ProjectsCard from "../../Components/ProjectsCard/ProjectsCard";
import "./Projects.css"

const Projects =() =>{
    return(
        <>
            <Header/>
            <h1 className="projects__h1">Projects</h1>
            <section className="projects">
                <ProjectsCard title="title" image="Glue-img.jpg" description="Project information/description"/>
                <ProjectsCard title="title" image="stack.jpg" description="Project information/description"/>
            </section>
        </>
    )
}

export default Projects;