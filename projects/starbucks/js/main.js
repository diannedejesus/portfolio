function myFunction(event){
    const childrenList = event.parentNode.parentNode.children[0].childNodes
    console.log(event.parentNode.parentNode)
    for(items of childrenList){
        if(items.nodeName === 'UL'){
            
            if(items.className === 'menu'){
                items.className = 'menu open'
            }else{
                items.className = 'menu'
            }
        }
    }
    if(event){
        if(event.className === 'fas fa-chevron-up'){
            event.className = 'fas fa-chevron-up rotate down'
        }else if(event.className === 'fas fa-chevron-up rotate'){
            event.className = 'fas fa-chevron-up rotate down'
        }else{
            event.className = 'fas fa-chevron-up rotate'
        }
    }
}


function openMenu(event){
    const mobileMenu = document.querySelector(".mobileMenu")

    if(mobileMenu){
        if(mobileMenu.className === 'mobileMenu'){
            mobileMenu.className = 'mobileMenu openMobileMenu'
        }else{
            mobileMenu.className = 'mobileMenu'
        }
    }
}

















