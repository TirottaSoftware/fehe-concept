import React from "react";

function createButton(type) {
    switch (type) {
        case "button":
            return function Button(props) {
                return <button {...props}>{props.children}</button>
            }
        case "link":
            return function Button(props) {
                return <a {...props}>{props.children}</a>
            }
        default:
            throw new Error(`Invalid component type ${type}`)
    }
}

export default createButton