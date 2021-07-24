let currusers = JSON.parse(sessionStorage.getItem('currusers'));
console.log(currusers)
let curruser = currusers[(currusers.length) - 1];
let user = document.getElementById('users');
user.innerHTML = `
    <span>
    <img src="/user.png" height="30" width="30" />
    <a id="currusr">${curruser}</a>
    </span>

`
function SignOut()
{
    // currusers = JSON.parse(sessionStorage.getItem('currusers'));
    // let currusers = JSON.parse(sessionStorage.getItem('currusers'));
    let reply = confirm('Do you want to Log Out?')
    currusers = JSON.parse(sessionStorage.getItem('currusers'));
    if(reply==true)
    {
        for(let index=0;index<currusers.length;index++)
        {
            if(currusers[i]==(document.getElementById('currusr').innerText))
            {
                console.log(currusers[i],i,currusers)
                let newcurrusers=currusers.splice(i,1);
                console.log(currusers[i],i,currusers)
                sessionStorage.setItem('currusers',JSON.stringify(newcurrusers));
                break;
            }
        }
        // window.open('/My_Notes.html');
        // window.close()
    }
    else
    {
        window.history.go(-1)
    }
}