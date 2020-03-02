const logDate = () => {
    let myBirthday = new Date(1997,6,10)
    let now = new Date();
    let seconds = (now.getTime() - myBirthday.getTime())/1000
    console.log(seconds);
}
logDate()