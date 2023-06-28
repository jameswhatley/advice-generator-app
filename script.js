const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('.adviceText');
const btn = document.querySelector('.btn');

const contactAPI = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    return await response.json();
}

const addToDOM = (data) => {
    adviceId.textContent = data.slip.id;
    adviceText.textContent = data.slip.advice;
}

const getAdvice = () => {
    contactAPI()
        .then(data => addToDOM(data))
        .catch(err => console.log(err));    
}

window.addEventListener('DOMContentLoaded', getAdvice);
btn.addEventListener('click', getAdvice);
