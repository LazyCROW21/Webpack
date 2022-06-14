const btn = document.createElement('button');
btn.innerText = 'Click me';
btn.onclick = () => {
    System.import('./img_viewer').thne(module => {
        console.log(module);
    });
};

document.body.appendChild(btn);