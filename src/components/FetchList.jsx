export default function FetchList({array}){
    return(
        <>
<div>
    {array.map((item,index)=>(
        <p key={index}>{item}</p>
    ))}
</div>
        </>
        
    )
}