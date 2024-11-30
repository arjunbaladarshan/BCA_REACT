import Menu from "./parts/Menu";

function DemoEvent(){

    return(
        <>
            <input type="text" onChange={(e)=>{
                console.log(e.target.value);
            }}/>

            <button onClick={()=>{
                console.log("Hiiiiiii")
            }}>Click</button>
        </>
    );
}

export default DemoEvent;