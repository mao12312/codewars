function getGrade(s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3;
    if (90 <= score && score <= 100) {
        return 'A';
    } else if (80 <= score && score < 90) {
        return 'B';
    } else if (70 <= score && score < 80) {
        return 'C';
    } else if (60 <= score && score < 70) {
        return 'D';
    } else if (0 <= score && score < 60) {
        return 'F';
    }
}

getGrade(70, 70, 100)

function getGrade(s1, s2, s3) {
    avg = (s1 + s2 + s3) / 3;
    if (avg < 60) return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}