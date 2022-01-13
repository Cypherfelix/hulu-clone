import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react"
function Thumbnail(resultvalue) {
    const result = resultvalue.result;
    const lineWrap = React.useRef()
    const desc = React.useRef()
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    var img1 = result.backdrop_path
    var img2 = result.poster_path
    var img3 = result.poster_path
    var image = null
    if (!img1 && !img2) {
        image = img3
    }else if (!img1) {
        image = img2
    }else{
        image = img1
    }
    image = BASE_URL + image
    // console.log(image)
    return (
        <div className="p-2 group cursor-pointer min-w-fit">
            <Image
                layout="responsive"
                src={image}
                alt=""
                height={1080}
                width={1920}
            />
            <div className="p-2">
                
                <div className="relative">
                    <p ref={desc} className="line-clamp-2 group-hover:t max-w-[75%]" id="desc">{result.overview}</p>
                    <div ref={lineWrap} className="absolute right-0 text-blue-700 -bottom-1" onClick={
                        () => {
                            if (lineWrap.current.innerHTML == "Read More") {
                                lineWrap.current.innerHTML = "Read Less"
                                desc.current.classList.remove("line-clamp-2")
                            } else if(lineWrap.current.innerHTML == "Read Less"){
                                desc.current.classList.add("line-clamp-2")
                                lineWrap.current.innerHTML = "Read More"
                            }
                        }
                    }>Read More</div>
                </div>

                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>

                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {/* {result.media_type && ' .'}{" "} */}
                    {result.release_date || result.first_air_date} .{" "}
                    <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
