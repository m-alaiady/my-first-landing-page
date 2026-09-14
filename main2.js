function mode_switcher(){
    let body = document.getElementById("body");
    let btn = document.getElementById('btn');

    body.classList.toggle('dark-mode');

    if(btn.innerHTML == 'Light mode')
    {
        btn.innerHTML = 'Dark mode';
    }
    else if(btn.innerHTML == 'Dark mode')
    {
        btn.innerHTML = 'Light mode';
    }
}

document.getElementById('btn').addEventListener('click', mode_switcher);
