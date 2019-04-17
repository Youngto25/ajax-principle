/*
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
*/
button.addEventListener('click',()=>{
    window.jQurey.ajax({
        url:'/blake',
        method:'post',
        body:'hello'
    }).then(
        (text)=>{console.log(text)},
        (request)=>{console.log(request)}
    )
})

window.jQurey = function (){}
window.jQurey.ajax = function ({url,method,body}){
    return new Promise(function (resolve,reject){
        let request = new XMLHttpRequest()
        request.open(method,url)
        request.onreadystatechange = ()=>{
            if(request.readyState === 4){
                if(request.status >= 200 && request.status < 300){
                    resolve.call(undefined,request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}