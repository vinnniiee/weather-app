import { getBookmarks } from "./getBookmarks";

export const saveBookmark = async (city,setBookmarks)=>{

    try{
        console.log(city);
    const response = await fetch("/bookmarks/save",{
        method:"POST",
        body:JSON.stringify(city),
        headers:{
            "Content-type": "application/json", 
        }
    });
    const data  = await response.json();
    await getBookmarks(setBookmarks);
    console.log(data);
    return data;
    }
    catch(e){
        console.log(e);
        return null;
    }
}