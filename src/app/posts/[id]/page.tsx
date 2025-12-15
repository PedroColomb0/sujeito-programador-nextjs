export default async function DetailPost({
    params
} : {
    params: Promise<{id: string}>
}){
    

    const {id} = await params;

    return(
        <div>
            <h1>Detalhes do post: id</h1>
        </div>
    )
}