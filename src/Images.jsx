import imageOne from "./Images/Image1.jpg"
import imageTwo from "./Images/Image2.jpg"
import { FiSmile } from "react-icons/fi"
import { FiSave } from "react-icons/fi"

const allMyImages = [
    {
        id: 1,
        image: imageOne
    },
    {
        id: 2,
        image: imageTwo
    }
]


export default function Images () {
        const imagesStyle = {
            height: "100px"
        }

    return (
        <div>
            {allMyImages.map((image) =>(
                <div key = {image.id}>
                    <img src={image.image} alt="image"  style={imagesStyle}/>
                </div>

            ))}

            {/* Public folder image rendering*/}
            <img src="/vite.svg" alt="" />
            <FiSmile />
            <FiSave />
        </div>
    )
}