function getRandomDog() {
    const dogImage = document.getElementById('dogImage');
    dogImage.style.display = 'none';
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogImage.src = data.message;
            dogImage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to load dog image. Please try again.');
        });
} 