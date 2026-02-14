addEventListener('keydown', function (e) {
    if (e.key == 'Control') {
        const elements = document.querySelectorAll('strong')
        elements.forEach(el => {
            if (el.textContent.trim() === "Post ID") {
                let id = el.parentElement.querySelector('span').innerText
                navigator.clipboard.writeText(id)
                    .then(() => {
                        console.log('sec')
                    })
                    .catch(err => {
                        console.log('err')
                    }); 
            }
        });
    }
});