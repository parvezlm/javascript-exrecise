const errorMsg = 'Please enter a valid email ID';

function submitForm(event) { }

function validateEmail() {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const email = document.getElementById('username');
    if (emailRegex.test(email.value)) {
        email.classList.remove('invalid');
        errorMsgElm('', '', true);
    } else {
        if (!email.classList.contains('invalid')) {
            email.classList.add('invalid');
            errorMsgElm(errorMsg, 'email_form_group', false);
        }
    }
}

function errorMsgElm(text, elementID, removeElm) {
    const element = document.createElement('p');
    element.classList.add('errorMsg');
    element.id = 'errorMsg';
    element.textContent = text;
    document.getElementById(elementID)?.appendChild(element);
    if (removeElm) {
        document.getElementById('errorMsg').remove();
    }
}
