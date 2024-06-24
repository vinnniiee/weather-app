
export const getBookmarks = async (setBookmarks)=>{

    const response = await fetch("/bookmarks");
    // console.log("response: ",response);
    const data = await response.json();
    // console.log("data: ",data);
    setBookmarks(data);
    return data;

} 