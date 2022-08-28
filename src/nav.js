window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

perfilProfile.addEventListener('click', () => {
    location.hash = '#status'
})

backBtn.addEventListener('click', () =>{
    history.back();
})


function navigator() {
    if(location.hash.startsWith('#status')) {
        statusPages();
    }
    else{
        homePage();
    }
}; 

function homePage(){
    statusSection.classList.add('inactive');
    perfilProfile.classList.remove('inactive');

    messageIcon.classList.remove('inactive');
    mainSection.classList.remove('inactive');
    asideSection.classList.remove('inactive');
    footerSection.classList.remove('inactive');
}

function statusPages(){
    statusSection.classList.remove('inactive');
    perfilProfile.classList.add('inactive');

    messageIcon.classList.add('inactive');
    mainSection.classList.add('inactive');
    asideSection.classList.add('inactive');
    footerSection.classList.add('inactive');
}