import React from 'react'

const Instagram = () => {
    const link='https://www.instagram.com/ionescu_vladd/?hl=ro';
    return (
        <div className='instagram'>
            <a href={link}style={{
                        position:'relative',
                        top:'31px',
                        left:'80px',
                        color:'white',
                        backgroundColor:'#c5ccb9',
                        borderRadius:'5px',
                        textDecoration:'none'
                    }}>Instagram</a>
        </div>
    )
}

export default Instagram
