import React from 'react'

export const Button = ({title, type, onClick, size, disabled}) => {
    return (
        <button onClick={onClick} className={["button", type, size].join(" ")} disabled={disabled}>
            {title}
        </button>
    )
}
