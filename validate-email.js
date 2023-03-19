// validate email
function validateEmail(val) {
    let regex = /^\S+@\S+\.\S+$/;
    let elm = document.getElementById('error');
    let errMsg = {
        required: 'mail is required',
        pattern: 'mail is not valid'
    };
    try {
        if (!val) {
            elm.innerText = errMsg.required;
            elm.classList.add('invalid');
        } else if (!regex.test(val)) {
            elm.innerText = errMsg.pattern;
            elm.classList.add('invalid');
        } else {
            elm.classList.remove('invalid');
        }
    } catch (err) {
        console.log(err);
    }
}