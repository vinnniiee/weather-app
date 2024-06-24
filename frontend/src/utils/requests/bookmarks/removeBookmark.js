import { getBookmarks } from "./getBookmarks";


export const removeBookmark = async(city,setBookmarks)=>{

    try{
        const response = await fetch("/bookmarks/remove",{
            method:"POST",
            body: JSON.stringify(city),
            headers:{
                "Content-type": "application/json"
            }
        });
        const data = await response.json();
        await getBookmarks(setBookmarks);
        return data.deleted;
    }
    catch(e){
        console.log(e);
        return false;
    }


}