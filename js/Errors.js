try {
    let x = 55;
    if (x == 55) {
        console.log("ok")
    } else {
        throw "error"
    }
} catch (error) {
    console.log(error)

} finally {
    console.log('finally')

}