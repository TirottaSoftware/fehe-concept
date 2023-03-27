function ImageWrapper({ src, ...props }) {
    return (
        <div {...props}>
            <img src={src} alt={props.alt} className="w-full object-cover" width={props.width} height={props.height} />
            {
                props.children ? <div className='absolute w-full h-full bg-black opacity-0 group-hover:opacity-100 transition-all bg-opacity-50 top-0 z-20 flex flex-col items-center justify-center'>
                    {props.children}
                </div> : null
            }

        </div>
    )
}

export default ImageWrapper