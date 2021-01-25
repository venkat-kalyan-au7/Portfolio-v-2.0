import React from 'react';
import './projectStyle.css'



const ProjectList = (props) => {

    const renderHex = (props) => {
        return (<div class="hex"><img src={props.img} alt="some" /> </div>)
    }

    const renderInfo = (props) => {
        return (
            <div className="info">
                <h3>{props.name}</h3>
                <p>{props.about}</p>
                <div className="button-container">
                        <a href={props.website} target="_blank">Website</a>
            
                        <a href={props.gitHub} target="_blank" >GitHub</a>
                </div>
            </div>
        )
    }

    const renderAll = (props) => {
        if (props.className === "odd") {
            return (<div className={`${props.className} section`}>
                {renderHex(props)}
                {renderInfo(props)}

            </div>)
        } else {
            return (<div className={`${props.className} section`}>
                {renderInfo(props)}
                {renderHex(props)}

            </div>)
        }
    }

    return (
        renderAll(props)
    )
}

export default ProjectList;