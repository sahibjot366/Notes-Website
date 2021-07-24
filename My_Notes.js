function showpass() {
    if (document.getElementById('showpwd').checked == true) {
        document.getElementById('pwd').type = 'text';
    }
    else {
        document.getElementById('pwd').type = 'password';
    }
}

function LogIn() {
    let username = document.getElementById('usr').value;
    let password = document.getElementById('pwd').value;
    let userarray = JSON.parse(localStorage.getItem('users'))
    let passarray = JSON.parse(localStorage.getItem('passwords'))
    let sessarray = [];
    let t = 0;
    let index;
    if(userarray!=null){
    for (let i = 0; i < userarray.length; i++) {
        if (userarray[i] === username) {
            t = 1;
            index = i;
            break;
        }
    }
    if (t == 1) {
        for (let i = 0; i < passarray.length; i++) {
            if (passarray[index] === password) {
                if (sessionStorage.getItem('currusers') == null) {
                    sessarray.push(username);
                    sessionStorage.setItem('currusers', JSON.stringify(sessarray));
                }
                else {
                    sessarray = JSON.parse(sessionStorage.getItem('currusers'));
                    sessarray.push(username);
                    sessionStorage.setItem('currusers', JSON.stringify(sessarray));
                }
                window.open('/Main.html');
                username = "";
                password = "";
                document.getElementById('usr').value = "";
                document.getElementById('pwd').value = "";
                break;
                // window.close();

            }
            else {
                alert('Password is incorrect!')
                document.getElementById('pwd').value = "";
                password = "";
                break;
            }
        }
    }
    else {
        alert('Account doesn\'t exist. Please Sign Up first')
        username = "";
        password = "";
        document.getElementById('usr').value = "";
        document.getElementById('pwd').value = "";
    }
    }
    else
    {
        alert('Account doesn\'t exist. Please Sign Up first')
    }
}