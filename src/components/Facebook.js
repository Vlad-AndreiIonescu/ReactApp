import React from 'react'

const Facebook = () => {
    const link='https://www.facebook.com/ionescu.vlad.16.vl/';
    return (
        <div className='facebook'>
          <a href={link}style={{
                        color:'white',
                        backgroundColor:'#c5ccb9',
                        borderRadius:'5px',
                        textDecoration:'none'
                    }}>Facebook</a>  
        </div>
    )
}

export default Facebook
