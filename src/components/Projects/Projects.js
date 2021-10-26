import React from 'react'
import Card from '../Card/Card'

function Projects() {
    return (
        <div>
            <h5 className="text-center my-5">These are my previous projects</h5>
            <div className="mx-10 grid grid-cols-4 md:grid-cols-3">
                <Card name={"Project 1"}/>
                <Card name={"Project 2"}/>
                <Card name={"Project 3"}/>
                <Card name={"Project 4"}/>
            </div>
        </div>
    )
}

export default Projects
