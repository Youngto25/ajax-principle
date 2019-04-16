button.addEventListener('click',()=>{
    let request = new XMLHttpRequest()
    request.open('post','/blake')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                let string = request.responseText
                let object = window.JSON.parse(string)
                console.log(object)
                console.log(object.note.to)
            }else if(request.status >= 400){

            }
        }
    }
    request.send()
})