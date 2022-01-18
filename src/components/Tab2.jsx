import React from "react";

const Tab2 = () => {
    const pronoms = [
        'je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elle'
    ]
    const corps = () => {
        for (let index = 0; index <= pronoms.length; index++)
        return (
            <div key={index}>{pronoms}</div>
        )
    }
    return (
        <div>
            <p>Bonjour!</p>
            {corps()}
        </div>
    )
}

export default Tab2