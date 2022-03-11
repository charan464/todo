showtask();
let addtaskinput=document.getElementById("addtaskinput");
let addtaskbtn=document.getElementById("addtaskbtn");
let savetaskbtn=document.getElementById("savetaskbtn");
let saveindex=0;


function showtask()
{
    let webtask=localStorage.getItem("localtask");
    if(webtask==null)
    {
        taskObj=[];
    }
    else
    {
        taskObj=JSON.parse(webtask);
    }
    let html='';
    let addedtasklist =document.getElementById("addedtasklist");
    taskObj.forEach((item,index) => {
        html += `<tr>
        <th scope="row">${index+1}</th>
        <td><b>${item}</b></td>
        <td><button id="btn" type="button "   onclick="edittask(${index})"     class="text-primary">Edit</button></td>
        <td><button id="btn" type="button"     onclick="deletetask(${index})"     class="text-danger">Delete</button></td>
    </tr>`;
        
    });
    addedtasklist.innerHTML=html;
}


addtaskinput.addEventListener("keypress",function(e)
{
    addtaskinputval = addtaskinput.value;
    let webtask=localStorage.getItem("localtask");
    if(e.keyCode===13){
    if(addtaskinputval.trim()!=0){
    if(webtask==null)
    {
        taskObj=[];
    }
    else
    {
        taskObj=JSON.parse(webtask);
    }
    taskObj.push(addtaskinputval);
    localStorage.setItem("localtask",JSON.stringify(taskObj));}
    addtaskinput.value="";
}
    showtask();
})




addtaskbtn.addEventListener("click",function()
{
    addtaskinputval = addtaskinput.value;
    let webtask=localStorage.getItem("localtask");
    if(addtaskinputval.trim()!=0){
    if(webtask==null)
    {
        taskObj=[];
    }
    else
    {
        taskObj=JSON.parse(webtask);
    }
    taskObj.push(addtaskinputval);
    localStorage.setItem("localtask",JSON.stringify(taskObj));}
    addtaskinput.value="";
    showtask();
})


function edittask(index)
{
   addtaskbtn=document.getElementById("addtaskbtn");
   savetaskbtn=document.getElementById("savetaskbtn");
   addtaskbtn.style.display="none";
   savetaskbtn.style.display="block";
   addtaskinput=document.getElementById("addtaskinput");
   let webtask=localStorage.getItem("localtask");
   taskObj=JSON.parse(webtask);
   addtaskinput.value=taskObj[index];
   saveindex=index;
}

savetaskbtn.addEventListener("click",function()
{
    let webtask=localStorage.getItem("localtask");
   taskObj=JSON.parse(webtask);
     var savedtask=addtaskinput.value;
    taskObj[saveindex]=savedtask;
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    addtaskbtn.style.display="block";
   savetaskbtn.style.display="none";
   addtaskinput.value="";
    showtask();
});


function deletetask(index)
{
    let webtask=localStorage.getItem("localtask");
    taskObj=JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
}


let deleteallbutton = document.getElementById("deleteallbtn");
deleteallbutton.addEventListener("click",function()
{
    let webtask=localStorage.getItem("localtask");
    if(webtask==null)
    {
        taskObj=[];
    }
    else
    {
        taskObj=JSON.parse(webtask);
        taskObj=[];
    }
    addtaskbtn=document.getElementById("addtaskbtn");
   savetaskbtn=document.getElementById("savetaskbtn");
   addtaskbtn.style.display="block";
   savetaskbtn.style.display="none";
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
});


let searchtextbox = document.getElementById("searchtextbox");

searchtextbox.addEventListener("input",function()
{
    let searchtextboxvalue=searchtextbox.value;
    let trlist=document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item)
    {
        let tdtext=item.getElementsByTagName("td")[0].innerText;
        let re=new RegExp(searchtextboxvalue,"gi");
        if(tdtext.match(re))
        {
            item.style.display="table-row";
        }
        else
        {
            item.style.display="none";
        }

    })



})















