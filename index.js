const boxContainers = document.querySelectorAll('.boxcontainer');

boxContainers.forEach((e) => {
    e.addEventListener('click', () => {
        e.children[0].classList.toggle('open')
        if (e.children[0].classList.contains('open')) {
            e.style.height = "auto";
        } else {
            e.style.height = "70px";
        }
    })
})

