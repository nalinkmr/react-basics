import React from 'react'

const inputForwardRef = React.forwardRef((props,ref) => {

    return (
        <div>
            <input ref={ref}/>
        </div>
    )
}) 

export default inputForwardRef
