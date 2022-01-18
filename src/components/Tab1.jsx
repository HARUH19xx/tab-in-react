import React from "react";

const Tab1 = () => {
    const pronouns = [
        'you', 'I', 'he', 'she', 'they'
    ]
    const body = () => {
        for (let index = 0; index <= pronouns.length; index++) {
            return (
                <div key={index}>{pronouns}</div>
            )
        }
    }
    return (
        <div>
            <p>Hello!</p>
            {body()}
        </div>
    )
}

export default Tab1