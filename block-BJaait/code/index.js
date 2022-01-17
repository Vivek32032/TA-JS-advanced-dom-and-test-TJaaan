let input = document.querySelector("input");
let add = document.querySelector(".fa-plus");
let root = document.querySelector("ul");
 let itemList = localStorage.getItem("itemList")?  JSON.parse(localStorage.getItem("itemList")):[];

add.addEventListener("click",()=>{
    itemList.push(input.value);
    input.value = "";
    localStorage.setItem("itemList",JSON.stringify(itemList));
    createUI();

})

function createUI(){
    root.innerHTML="";
    itemList.forEach((ele)=>{
        let li = document.createElement("li");
        li.innerText = ele;
        root.append(li);
    })
}
createUI();