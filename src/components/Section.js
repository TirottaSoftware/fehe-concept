import React from 'react'

function Section({ id, children, ...props }) {
    return (
        <section className='w-10/12 lg:max-w-[1440px] mx-auto my-[10%] relative' id={id} {...props}>
            {children}
        </section>
    )
}

export default Section