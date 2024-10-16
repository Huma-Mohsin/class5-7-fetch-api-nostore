
{/**The cache: "no-store" directive is another caching control option used in HTTP requests, particularly when using the fetch API.

cache: "no-store"
Purpose: When you set cache: "no-store", it instructs the browser and any intermediate caches to completely avoid storing the response of the request. This means that the data will not be cached at all, and the browser will always make a fresh request to the server whenever you fetch the resource. */}
async function UserData(){
    const url="https://jsonplaceholder.typicode.com/users";
    const fetchData=await fetch(url,{cache:"no-store"});//ensure you always receive the latest data from an API
    const response=await fetchData.json();
    console.log(response);
    return(
        <div>
        <h1 style={{color:"blue",fontSize:"50px",fontWeight:"bold",textAlign:"center",padding:"20px",margin:"20px"}}>Data Integration</h1>
        
        
        
        {/*<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{JSON.stringify(response,null,2)}</h1 >*/}

        <br/>

<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[1].username}</h1 >
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[6].company.bs}</h1>
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[9].phone}</h1>
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[5].address.suite}</h1 >
        </div>

       
    )
}
export default UserData

{/**no-store: Prevents any caching of the response entirely. No data is stored, and every request will go directly to the server.
    
    no-store: Use this when the data is highly sensitive, frequently changing, or you need to ensure that every request retrieves the most up-to-date data without any caching.*/}