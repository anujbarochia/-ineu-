const title=document.querySelector("#title")
const input=document.querySelector("#content")
const button=document.querySelector("#button")
const userpost=document.querySelector("#userpost")
const post=document.querySelector("#postcontainer")
input.setAttribute("placeholder", "Enter your content");
button.addEventListener("click",(e)=>{
    console.log(title.value.length)
    console.log(input.value.length)
 e.preventDefault()
//  console.log(title.value)
console.log("clicked")

if((title.value.length===0&& input.value.trim().length===0)||(title.value.length!=0&& input.value.trim().length===0)||(title.value.length===0&& input.value.trim().length!=0)){
    console.log(title.value.length)
    alert("fill the from first")
}
else{

    let div=document.createElement("div")
    let h1=document.createElement("h1");
    let p=document.createElement("p");
    let deletebutton=document.createElement("button");
    deletebutton.addEventListener("click",()=>{
        div.remove()
    })
    h1.innerHTML=title.value;
    p.innerHTML=input.value;
    deletebutton.innerHTML="Delete"
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(deletebutton)
    div.className="userpost"
    userpost.appendChild(div)
    title.value="";
    input.value="";

}
    

})
let details=[];
let url='https://jsonplaceholder.typicode.com/posts'
async function fetchdetalis(){

   
    const response=await fetch(url)
    const data=await response.json()
    // details=data
  displaydata(data)
   
}
fetchdetalis()
function displaydata(data){
   
   data.forEach(Data => {
    let div=document.createElement("div")
    let h1=document.createElement("h1")
   let h4=document.createElement("h4")
   let p=document.createElement("p")
  
   h4.innerHTML=Data.title;
   p.innerHTML=Data.body
  
   div.appendChild(h4)
   div.appendChild(p)
   div.classList="innerdiv"
   post.appendChild(div)
   })
}
