let text = document.querySelector('#textarea');
let ans = document.querySelector('#p');

text.addEventListener('input', function(){
    let output = marked.parse(text.value);
    ans.innerHTML = `${output}`
})