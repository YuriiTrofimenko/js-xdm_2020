const banner = iframe.contentWindow
form.onsubmit = function(){
 banner.postMessage(window.message.value, "*")
 return false
}
