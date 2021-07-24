function showpass() {
    if (document.getElementById('showpwd').checked == true) {
        document.getElementById('pwd').type = 'text';
    }
    else {
        document.getElementById('pwd').type = 'password';
    }
}
function SignUp() {
    let username = document.getElementById('usr').value;
    let password = document.getElementById('pwd').value;
    let notesarray;
    if (localStorage.getItem('users') == null) {
        if (username.length != 0 && password.length != 0) {
            localStorage.setItem('users', JSON.stringify([username]));
            localStorage.setItem('passwords', JSON.stringify([password]));
            alert('Account made successfully')
            localStorage.setItem('notes',JSON.stringify([[]]));
        }
        else {
            alert('Enter a username and password!!')
        }
    }
    else {
        let userarray = JSON.parse(localStorage.getItem('users'))
        let passarray = JSON.parse(localStorage.getItem('passwords'))
        let t = 0;
        notesarray = JSON.parse(localStorage.getItem('notes'))
        for(let i=0;i<userarray.length;i++)
        {
            if(userarray[i]===username)
            {
                t=1;
                break;
            }
        }
        if(t==0)
        {
            if (username.length != 0 && password.length != 0) {
                userarray.push(username);
                passarray.push(password);
                notesarray.push([])
                localStorage.setItem('users', JSON.stringify(userarray));
                localStorage.setItem('passwords', JSON.stringify(passarray));
                localStorage.setItem('notes',JSON.stringify(notesarray));
                alert('Account made successfully')
            }
            else {
                alert('Enter a username and password!!')
            }
        }
        else
        {
            alert('This Username already exists!!')
        }
    }
    username = ""
    password = ""
    document.getElementById('usr').value = ""
    document.getElementById('pwd').value = ""
}