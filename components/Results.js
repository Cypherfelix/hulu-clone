import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"
function Results( {results}) {
    console.log(results)
    // (result) => 
    // (
    //     <Thumbnail key={result.id} result={result} />
    // )
    // results.map( result =>{})
    var myArr = null;
    return (
        <div className="px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {
                // results.map( (result) => (<Thumbnail key={result.id} result={result} />))
            }   
        </div>
    )
}



export default Results
