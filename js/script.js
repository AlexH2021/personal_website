//define element
const course_items = document.querySelectorAll('.course-items');

function checkInp(x) {
    // let regex = /^[a-zA-Z]+$/; // only letter
    let regex = /^[0-9]+$/; // only number
    if (x.match(regex)) {
        return true;
    } else {
        return false;
    }
};

function courseArray() {
    // find course items and return
    let courseArr = [];

    for (item of course_items) {
        code = item.innerText.split("\n\n")[0];
        date = item.innerText.split("\n\n")[2];
        courseArr.push({ code, date });
    }

    return courseArr;
}

function findCourse(courseList) {
    //find course, change background to green if find the course, else add in array
    do {
        user_input = window.prompt('Enter 4-digit from code: ');
        if (user_input === null) { return }
    } while (!checkInp(user_input) || (user_input.length !== 4));

    flag = 0;

    for (let item of courseList) {
        if (item.code.includes(user_input)) {
            for (jtem of course_items) {
                if ((jtem.childNodes[1].innerText.split('-')[0].split(' ')[1]).includes(user_input)) {
                    jtem.classList.toggle('green');
                }
            }
        }
        if (!(item.code.includes(user_input))) {
            flag += 1;
        }
    }

    if (flag === courseList.length) {
        let tmp_code = `ACIT ${user_input}`;
        let tmp_date = 'N/A';
        courseList.push({ code: tmp_code, date: tmp_date });
        console.log(`Added code: "${tmp_code}", date: "${tmp_date}" into course list.`);
        console.log(courseList);
    }

}

//run function
let CourseList = courseArray();
findCourse(CourseList);