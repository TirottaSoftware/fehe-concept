import React from 'react'

function Section({ id, children }) {
    return (
        <section className='max-w-[1440px] mx-auto my-[10%]' id={id}>
            {children}
        </section>
    )
}

export default Section