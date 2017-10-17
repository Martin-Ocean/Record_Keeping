class checkPass {
    constructor(id, password) {
        this.id = id;
        this.password = password;
    }
}

const users = [];
users.push(new checkPass("223456", "1Password1"));
users.push(new checkPass("224333", "2Password2"));
users.push(new checkPass("330000", "3 Password3"));

var logBtn = document.getElementById('loginButton');
logBtn.addEventListener('click', () => {
    var id = document.getElementById('id').value;
    var password = document.getElementById('password').value;
    var text = "Wrong combination of Employee Number and Password";
    for(let user of users) {
        if(user.id === id) {
            if(user.password === password){
                text = "Login success";
            } 
        }
    }
    document.getElementById('response').appendChild(document.createTextNode(text));
});