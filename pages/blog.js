const formBox = document.querySelector('pop');

document.querySelector('comment-box').onclick = () => {
    formBox.classList.toggle('.active');
}

document.querySelector('close').onclick = () => {
    formBox.classList.remove('.active');
}