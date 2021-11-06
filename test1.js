// Prints help message to the console
// Returns a string

// Method 1
function allLongestStrings1(inputArray) {
    let longest = 0
    let array = []

    // dùng foreach để kiểm tra từng phần tử, nếu có chuỗi dài dơn thì set nó bằng longest
    inputArray.forEach(e => {
        if (e.length > longest)
            longest = e.length
    })

    // đẩy các phần tử có độ dài bằng longest vào mảng mới
    inputArray.forEach(e => {
        if (e.length === longest)
            array.push(e)
    })

    return array
}

// Method 2
function allLongestStrings2(inputArray) {
    let longest = 0
    // dùng map check từng phần tử để lấy chuỗi có độ dài dài nhất
    inputArray.map(e => longest = Math.max(e.length, longest))

    // dùng fulter để lọc lấy những phần tử có độ dài bằng longest
    array = inputArray.filter(e => e.length === longest)

    return array
}

allLongestStrings1(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"])