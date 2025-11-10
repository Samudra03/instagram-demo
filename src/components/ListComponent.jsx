import FetchList from "./FetchList"

export default function ListComponent(){
    const product=["Lap","mouse","keybord","penDrive"]
    const users=["Sam","Balu","Ammu","Samu"]
    return(
        <>
        <h2>Users</h2>
        <FetchList array={users}/>
        <h2>Products</h2>
        <FetchList array={product}/>
        </>
        
    )
}