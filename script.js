function checkDOB() {
    const dobInput = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');
    const imagesDiv = document.getElementById('images');

    // Clear previous results
    resultDiv.innerHTML = '';
    imagesDiv.innerHTML = '';
    imagesDiv.classList.add('hidden');

    // Check if the input date matches the specified date
    if (dobInput === '2003-07-14') {
        resultDiv.innerHTML = 'Happy april fool Bhanusee';
        displayAprilFoolImages();
    } else {
        resultDiv.innerHTML = 'Try again!';
    }
}

function displayAprilFoolImages() {
    const imagesDiv = document.getElementById('images');
    const images = [
        'https://i.pinimg.com/736x/c6/43/df/c643df816aae775f0648428744bc2091.jpg', // Replace with actual image URLs
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6Vf8hIz77589ecOe1c_Rmsa-nw_TJ1f3Iw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbvych1ZQOHLyLCQuZ4Ej0Owk9ZEFCTRsaA&s'
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'April Fool Image';
        imagesDiv.appendChild(img);
    });

    imagesDiv.classList.remove('hidden');
}