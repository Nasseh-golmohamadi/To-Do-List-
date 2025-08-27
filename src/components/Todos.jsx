import React from 'react'


const Todos = ({value}) => {
    console.log({value});
    
    return (
        <div className='border border-2 border-line flex items-center justify-center'>
            {value}
        </div>
    )
}

export default Todos