const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const lenght = input.lenght;
    
    const blurValue = 20 - lenght* 2
    background.style.filter = `blur(${blurValue})`
})