const boxes = document.querySelectorAll('.box')
const body = document.querySelector('body')

boxes.forEach(function (HW) {
    console.log(HW)
    HW.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'red') {
            body.style.background = 'rgb(199, 78, 78)';
        }
        else if (e.target.id === 'green') {
             body.style.background = 'rgb(87, 187, 87)';
        }
        else if (e.target.id === 'blue') {
             body.style.background = "rgb(96, 96, 184)";
        }
        else if (e.target.id === 'white') {
             body.style.background = 'rgb(250, 250, 250)';
        }
    })
})