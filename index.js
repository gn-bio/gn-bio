function sendMail() {
    console.log('start');
    let params = {
        email : document.getElementById("email").value,
        whatNeedHelpWith : document.getElementById("whatNeedHelpWith").value,
        moreInfo : document.getElementById("moreInfo").value
    }
    try {
        console.log('before send');
        emailjs.send("service_eucl8wo","template_gjy0yka",params).then(window.alert("Support message sent!"))
        console.log('after send');
    }
    catch(error)  {
        console.log('error');
        window.alert(`An error occured: ${error}, so we couldn't send your support message.`);
        return -1;
    }
    return 0;
}
function submit() { // for feedback form!!
    return 0;
}
function main() {
    return 0;
}