import image from "../assets/img/sample-image.png"
import ImageWrapper from "../components/ImageWrapper"

function ImageWithText({
    imageFirst = false,
    src = image,
    alt,
    heading = "Image with text",
    buttonLabel = "Learn More",
    buttonLink = "#",
    className,
    children
}) {
    return (
        <div className={`w-full flex items-center ${imageFirst ? "flex-col lg:flex-row-reverse" : "flex-col-reverse lg:flex-row"} ${className}`}>
            <div className={`w-full lg:w-1/2 ${imageFirst ? "lg:ml-8" : "lg:mr-8"}`}>
                <h1 className="text-4xl font-bold mb-4">{heading}</h1>
                <p className="text-lg text-gray-600">{children}</p>
                {buttonLabel ? <a className="block mt-4 bg-black text-white w-1/3 text-center py-4" href={buttonLink}>{buttonLabel}</a> : null}
            </div>
            <ImageWrapper src={src} alt={alt} className="w-full lg:w-1/2" />
        </div>
    )
}

export default ImageWithText