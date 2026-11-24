import React, { useState } from "react";
import projects from "../data/projects";
function Form({ handleProjectFormSubmit }) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        const newProject = {
            id: `${projects.length + 1}`,
            name: name,
            description: description
        }
        handleProjectFormSubmit(newProject);
        setName("")
        setDescription("");
    }

    return (
        <form className="NewItem" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
                Description:
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>

            <button type="submit">Add to Projects</button>
        </form>
    );
}

export default Form;