
import Image from 'next/image'

function SmallCardLogo(props) {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className={`w-44 cursor-pointer h-2/3  rounded-2xl shadow-lg ml-4 hover:transform transition duration-500 hover:scale-105 hover:border-2 border-white bg-center bg-cover bg-no-repeat bg-gray-800 ${props.className} flex items-center justify-center p-4`}>
                <Image src={props.Image} />
            </div>
        </div>
    )
}

export default SmallCardLogo
