const btn = document.querySelector('.btn')
const div = document.querySelector('div')
const form = document.querySelector('form')
const formBtn = document.querySelector('.formBtn')

console.log(btn)

btn.addEventListener('click', async () => {
    console.log('kkk')
    const response = await fetch('/json/parse', { method: 'GET'});
    const data = await response.json();

    console.log(data);

    div.innerHTML = ''
    data.forEach(item => {
        div.innerHTML +=  `<p> Name: ${item['name']} </p>`
    })

})