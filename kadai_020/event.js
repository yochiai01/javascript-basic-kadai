const eventBtn = document.getElementById('btn');
const h2Text = document.getElementById('text');
eventBtn.addEventListener('click',()=>{
    h2Text.textContent = "ボタンをクリックしました";
})