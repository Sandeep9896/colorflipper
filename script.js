let color = document.getElementById('color');
    let hex = document.getElementById('hex');
    let btn = document.getElementById('btn');
    let result = document.getElementById('select');
    let container = document.querySelector('.container');
    let value = 1;


    color.addEventListener('click', function () {
        color.style.backgroundColor = 'grey';
        value = 1;

    })
    color.addEventListener('mouseout', function () {
        color.style.backgroundColor = '';
    })
    hex.addEventListener('click', function () {
        hex.style.backgroundColor = 'grey';
        value = 2;
    })
    hex.addEventListener('mouseout', function () {
        hex.style.backgroundColor = '';
    })
    btn.addEventListener('click', function () {
        if (value == 1) {
            const col = ['red', 'blue', 'green', 'Orange', 'Green', 'Yellow', 'Red', 'Blue', 'Purple', 'Black', 'White', 'Pink', 'Gray', 'Brown', 'Magenta'
                , 'Violet', 'Navy Blue', 'Indigo', 'Maroon', 'Gold', 'Aqua', 'Beige', 'Crimson', 'Lime', 'Olive', 'Coral'
            ];
            let ind = Math.floor(Math.random() * col.length);
            container.style.backgroundColor = col[ind];
            result.innerHTML = col[ind];
            h.innerHTML = ''
        }
        else if (value == 2) {
            const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
            var txt = "#";
            for (let i = 0; i < 6; i++) {
                let index = getrandom();
                txt += hex[index];
            }
            container.style.backgroundColor = txt;
            result.innerHTML = txt;
            h.innerHTML = ''
        }

    })
    function getrandom() {
        let ran = Math.floor(Math.random() * 16);
        return ran;
    }
    document.addEventListener('copy', function () {
        let span = document.createElement('span');
        h.innerHTML = 'color is copied'
    })
