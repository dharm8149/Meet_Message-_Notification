
function doWork(Name, data) {
    
    setTimeout(function () {

        new Notification(Name, {
            body: data,
        })
    }, 0)

}



function f(mutationsList) {
    try{
    if (document.visibilityState != "visible") {

        if (mutationsList[0].target.className == "z38b6 CnDs7d hPqowe" || mutationsList[0].target.className == "Zmm6We") {
            if (mutationsList[0].target.className != "Zmm6We")
                doWork(mutationsList[0].addedNodes[0].childNodes[0].childNodes[0].textContent, mutationsList[0].addedNodes[0].childNodes[1].innerText)
            else
                doWork(mutationsList[0].target.parentNode.childNodes[0].childNodes[0].textContent, mutationsList[0].addedNodes[0].innerText)
        }

        if (mutationsList[0].target.className == "NSvDmb cM3h5d Uir1pc") {
            doWork(mutationsList[0].addedNodes[0].childNodes[2].querySelector(".UgDTGe").innerText, mutationsList[0].addedNodes[0].childNodes[2].querySelector(".mVuLZ.xtO4Tc").innerText)

        }
    }}
    catch(err){}
}


var o = new MutationObserver(f)

var notify_bt=document.createElement("div")
notify_bt.setAttribute("style","z-index:120;position:absolute;top:20px;left:20px")
notify_bt.setAttribute("id","offline")
notify_bt.setAttribute("class","notify")


notify_bt.innerHTML="<img  src='"+chrome.extension.getURL('icons/offline.png')+"' style='width:45px;height:45px'>"




var notify_bt1=document.createElement("div")
notify_bt1.setAttribute("style","z-index:120;position:absolute;top:20px;left:20px")
notify_bt1.setAttribute("class","notify")
notify_bt1.setAttribute("id","online")

notify_bt1.innerHTML="<img src='"+chrome.extension.getURL('icons/online.png')+"' style='width:45px;height:45px'>"


document.body.appendChild(notify_bt1)
document.body.appendChild(notify_bt)


try{
    document.querySelector("#offline").addEventListener("click",
    
    function(){
       
        if(Notification.permission=="granted"){
            document.querySelector("#offline").style.display="none"
            document.querySelector("#online").style.display="block"
            o.observe(document,{childList:true,subtree:true})
            
        }
        else{
            
                Notification.requestPermission().then(permission => {
                    if(Notification.permission=="granted"){
                        document.querySelector("#offline").style.display="none"
                        document.querySelector("#online").style.display="block"
                        o.observe(document,{childList:true,subtree:true})
                    } 
                });
             
        }
    })
    }
    catch(err){
        console.log(err)
    }


    
try{
    document.querySelector("#online").addEventListener("click",
    
    function(){
        document.querySelector("#online").style.display="none"
        document.querySelector("#offline").style.display="block"
        o.disconnect()
    })
    }
    catch(err){
        console.log(err)
    }