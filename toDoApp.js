let ip=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");
btn.addEventListener("click",function(e){
    let newL=document.createElement('li');
    newL.innerText=ip.value;
  


    let dbtna=document.createElement("button");
    dbtna.innerText="Delete";
    dbtna.classList.add("delete");

    newL.appendChild(dbtna);
     ul.append(newL);

     ip.placeholder="Add your task";
     ip.value="";
});
ip.addEventListener("keydown",function(e){
    if(e.code=="Enter"){
        let newL=document.createElement('li');
        newL.innerText=ip.value;
        // ul.append(newL);

       
        let dbtn=document.createElement("button");
        dbtn.classList.add("delete");
        dbtn.innerText="Delete";

        newL.appendChild(dbtn);
         ul.append(newL);

        ip.placeholder="Add your task";
        ip.value="";
    }
    });

    // It could not work on JS created list, so we will use of concept of Event Delegation that uses Event Bubbling
    // let dbtns=document.querySelectorAll(".delete");
    // for(dbt of dbtns){
    //     dbt.addEventListener("click",function(e){
    //     console.log("Deleter clicked!");
    //         let li=this.parentElement;
    //         li.remove();
    //     })
    // }

    // concept of Event Delegation
    ul.addEventListener("click",function(e){
        if(e.target.nodeName=='BUTTON'){
        let ldel=e.target.parentElement;
        ldel.remove();
        }

    })

    