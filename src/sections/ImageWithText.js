import image from "../assets/img/sample-image.png"

function ImageWithText({
    imageFirst = false,
    heading = "Image with text",
    content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    buttonLabel = "Learn More",
    buttonLink = "#"
}) {
    return (
        <div className={`w-full flex items-center ${imageFirst ? "flex-row-reverse" : "flex-row"}`}>
            <div className={`w-1/2 ${imageFirst ? "ml-8" : "mr-8"}`}>
                <h1 className="text-4xl font-bold mb-4">{heading}</h1>
                <p className="text-lg text-gray-600">{content}</p>
                <a className="block mt-4 bg-black text-white w-1/3 text-center py-4" href={buttonLink}>{buttonLabel}</a>
            </div>
            <div className="w-1/2">
                <img src={image} alt="Your Image" className="w-full" />
            </div>
        </div>
    )
}

export default ImageWithText