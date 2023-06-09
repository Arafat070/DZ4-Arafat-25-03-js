const wrapper = document.querySelector('.wrapper');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const div = document.createElement('div');
            div.classList.add('user');
            const img = document.createElement('img');
            img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXjYfou58DzQmbhstbtO7hZEYTfroOmEqrLtp4zTC5g&s)'); // здесь указываем путь к изображению пользователя

            const name = document.createElement('p');
            div.innerHTML = `
                <h2>Name: ${user.name}</h2>
                <span>Age: ${user.age}</span>
            `

            div.appendChild(img);
            div.appendChild(name);

            wrapper.appendChild(div);
        });
    });



const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};

