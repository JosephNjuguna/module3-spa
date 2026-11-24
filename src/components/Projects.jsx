import { useState } from "react";
import Form from "./Form";
import Search from "./Search";

function Projects({ projects, setProjects }) {
    const [searchProject, setSearchProject] = useState("");

    function handleSearch(searchedProject) {
        setSearchProject(searchedProject);
    }

    const projectsToDisplay = projects.filter((project) => {
        const matchesSearch = project.description.toLowerCase().includes(searchProject.toLowerCase());
        return matchesSearch;
    });

    function handleItemFormSubmit(newItem) {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    return (
        <>
            <Form />
            <Search search={searchProject} onSearchChange={handleSearch} />
            {projectsToDisplay.map((project) => (
                <Project key={project.id} name={project.name} description={project.description} />
            ))}
        </>
    )
}


function Project({ name, description }) {

    return (
        <li className="project">
            <h3>{name}</h3>
            <p>{description}</p>
        </li>
    );
}

export default Projects;