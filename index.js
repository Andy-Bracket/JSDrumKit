function handleClick () {
    alert("I got clicked!");
};

let btns = document.querySelectorAll(".drum");

for (let i of btns) {
    i.addEventListener('click', handleClick)
};

