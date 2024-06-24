export const checkBookmark = async (city)=>{
    try{
        const response = await  fetch("/bookmarks/info",{
            method:"POST",
            body:JSON.stringify(city),
            headers:{
                "Content-type":"application/json"
            }
        });
        const data = await response.json();
        return data.exist;
    }
    catch(e){
        console.log(e);
        return false;
    }
}