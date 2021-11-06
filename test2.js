// Prints help message to the console
// Returns a string
// Method 1
function alternatingSums1(a) {
    let ta = 0, tb = 0
    for (let i = 0; i < a.length; ++i) {
        if (i%2===0) {
            ta+= a[i]
        } else {
            tb+= a[i]
        }
    } 
    return [ta,tb]
}

// Method 2
function alternatingSums2(a) {
    let ta = 0, tb = 0
    for (let i = 0; i < a.length; i+=2) {
        ta+= a[i]
    }
    for (let i = 1; i < a.length; i+=2) {
        tb+= a[i]
    }
    return [ta,tb]
}

alternatingSums([60, 40, 55, 75, 64])