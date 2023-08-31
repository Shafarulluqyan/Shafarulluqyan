const quitButton = document.getElementById('quitButton');

quitButton .addEventListener('click', function()){
    const confirmQuit = confirm('apakah anda yakin ingin keluar')
    if(confirmQuit){
        window.close()
    }
}