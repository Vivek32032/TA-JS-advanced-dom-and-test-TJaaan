let addNoticeBtn = document.querySelector("#addNoticeBtn");
let root = document.querySelector("ul")
addNoticeBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    addNotice();
})


function addNotice(){
    let li = document.createElement("li");
    let span= document.createElement("span");
    let h3 = document.createElement("h3");

    let title = document.querySelector("#title")
    h3.innerText= title.value;
    h3.addEventListener("dblclick",(event)=>{
       let textarea = document.createElement("textarea");
    
    })
    li.append(span,h3);
    let category = document.querySelector("#category");
    span.innerText = category.value;
    title.value = "";
    // category.value = "Select"
    root.append(li);

}