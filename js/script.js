// wait for page to load
document.addEventListener("DOMContentLoaded", function(_event) {

    // add view source button
    document.body.innerHTML += `<div id="viewSource"><a id="viewSourceHyperlink">View Source On GitHub</a></div>`
    const viewSourceButton = document.getElementById('viewSourceHyperlink');
    const ghUser = window.location.host.split('.')[0];
    const ghProject = window.location.pathname.split('/').filter(e => e)[0]
    viewSourceButton.href = `https://github.com/${ghUser}/${ghProject}`

    // get all buttons inside the soundboard element
    const buttons = document.querySelectorAll('#soundboard button');

    // loop through every button we find
    buttons.forEach(button => {

        // get the audio tag in the button
        const audio = button.querySelector('audio');

        // when the user clicks the button
        console.log('Adding click handler to button', button)
        button.addEventListener("click", function() {

            // restart and play the audio
            console.log('Button clicked', button)
            audio.currentTime = 0
            audio.play();
        });
    })
});