let submitButton = document.getElementById('submitButton');


submitButton.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault()
    let userInput = document.getElementById('userInput').value;
    fetch(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=dc6zaTOxFJmzC`)
    .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        removeGifs();
        handleResponse(response);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    function removeGifs() {
        let ulImages = document.getElementById('images');
        while (ulImages.firstChild) {
            ulImages.removeChild(ulImages.firstChild);
        }
    }

   function handleResponse(response) {
    for (let i = 0; i < response.data.length; i++) {
        console.log(response.data[i].images.downsized_large.url);
        let createImageTag = document.createElement('IMG');
        createImageTag.src = response.data[i].images.downsized_large.url;
        document.getElementById('images').appendChild(createImageTag);   
    };
   }