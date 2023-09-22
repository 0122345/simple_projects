
const counters = document.querySelectorAll('.counter')


counters.forEach(counter => {
    counter.innerText = '0'

    const updatedCounter = () => {
        Number(counter)
        const target = counter.getAttribute('data-target')
        const d = +counter.innerText

        const increment = target / 1500

        if(d < target) {
            counter.innerText = `${Math.ceil(d + increment)}`
            setTimeout(updatedCounter, 1)
        }
        else{
            counter.innerText = target
        }
        console.log(counter)
    }
    updatedCounter()
})