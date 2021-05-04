import React from 'react'

const Card = ({ children }) => {
    return (
        <div className="mx-2">
            <div className="p-5 rounded-xl bg-indigo-500 border-r border-opacity-50 border-indigo-600 shadow-md">
                {children}
            </div>
        </div>
    )
}

export default Card
