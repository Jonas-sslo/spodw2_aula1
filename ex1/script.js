triangle()

function triangle() {
    for (i = 0; i < 6; i++) {
       let x = 'x'.repeat(i)
       console.log(x)
    }
}

triangle2()

// sem repeat
function triangle2() {
    for (i = 1; i < 6; i++) {
        let x = '';
        for (j = 0; j < i; j++) {
            x += 'x';
        }
        console.log(x)
    }
}