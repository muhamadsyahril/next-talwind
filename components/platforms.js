import { useState } from "react";

export default function Platforms() {
    const [platforms, setPlatforms] = useState([
        { image: "/image-1.png", name: "Wordpress"},
        { image: "/image-2.png", name: "Drupal"},
        { image: "/image-3.png", name: "Amazon"},
        { image: "/image-4.png", name: "Mailchimp"},
        { image: "/image-5.png", name: "Authorized.net"},
    ]);
    return(
        <div className="bg-platform z-50 -mt-36">
            <div className="container mx-auto h-96 pt-40">
                <h2 className="text-3xl lg:w-1/3 ">We have delivered intregrated solutions using these platforms</h2>
                <div className="p-10 mt-10 flex space-x-20">
                    {platforms.map(({image, name}) => (
                        <img className="w-full" src={image} alt={name}/>
                    ))}
                </div>
            </div>
        </div>
    )
}