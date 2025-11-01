const eventBtn = document.getElementById('btn');
eventBtn.addEventListener('click',()=>{
    const h2Text = document.getElementById('text');
    h2Text.textContent = "ボタンをクリックしました";
})