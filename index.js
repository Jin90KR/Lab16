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

// const firstBox = document.getElementById("first_box");
// const secondBox = document.getElementById("second_box");
// const thirdBox = document.getElementById("third_box");
// const firstDescription = document.getElementById("first_description");
// const secondDescription = document.getElementById("second_description");
// const thirdDescription = document.getElementById("third_description");
// const firstContainer = document.getElementById("first_container");
// const secondContainer = document.getElementById("second_container");
// const thirdContainer = document.getElementById("third_container");
// const firstPlus = document.getElementById("first_plus");
// const secondPlus = document.getElementById("second_plus");
// const thirdPlus = document.getElementById("third_plus");

// const containerNum = [firstContainer, secondContainer, thirdContainer];
// const plusNum = [firstPlus, secondPlus, thirdPlus];
// const boxNum = [firstBox, secondBox, thirdBox];

// function openCloseBox() {

//     for (let i = 0; i < boxNum.length; i++) {

//         if (boxNum[i].classList.contains("open")) {
//             containerNum[i].style.height = "Auto";
//             plusNum[i].classList.replace("fa-plus", "fa-minus");
//             console.log(firstBox.classList.contains("open"))
//         } else {
//             containerNum[i].style.height = "70px";
//             plusNum[i].classList.replace("fa-minus", "fa-plus");
//             console.log(firstBox.classList.contains("open"))
//         }
//     }

// }

// function openCloseBox() {

//     for (let i = 0; i < boxNum.length; i++) {
//         if (i === 0) {
//             if (firstBox.classList.contains("open")) {
//                 firstContainer.style.height = "Auto";
//                 firstPlus.classList.replace("fa-plus", "fa-minus");
//                 console.log(firstBox.classList.contains("open"))
//             } else {
//                 firstContainer.style.height = "70px";
//                 firstPlus.classList.replace("fa-minus", "fa-plus");
//                 console.log(firstBox.classList.contains("open"))
//             }

//         } else if (i === 1) {
//             if (secondBox.classList.contains("open")) {
//                 secondContainer.style.height = "Auto";
//                 secondPlus.classList.replace("fa-plus", "fa-minus");
//                 console.log(secondBox.classList.contains("open"))
//             } else {
//                 secondContainer.style.height = "70px";
//                 secondPlus.classList.replace("fa-minus", "fa-plus");
//                 console.log(secondBox.classList.contains("open"))
//             }

//         } else {
//             if (thirdBox.classList.contains("open")) {
//                 thirdContainer.style.height = "Auto";
//                 thirdPlus.classList.replace("fa-plus", "fa-minus");
//                 console.log(thirdBox.classList.contains("open"))
//             } else {
//                 thirdContainer.style.height = "70px";
//                 thirdPlus.classList.replace("fa-minus", "fa-plus");
//                 console.log(thirdBox.classList.contains("open"))
//             }

//         }

//     }
// };


firstBox.addEventListener("click", () => {
    firstBox.classList.toggle("open")
    openCloseBox()
});

secondBox.addEventListener("click", () => {
    secondBox.classList.toggle("open")
    openCloseBox()
});

thirdBox.addEventListener("click", () => {
    thirdBox.classList.toggle("open")
    openCloseBox()
});

