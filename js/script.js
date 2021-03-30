let courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ACIT 1420", name: "Introduction to Systems Administration" },
    { code: "ACIT 1630", name: "Database System" }
];

function checkInp(x) {
    // let regex = /^[a-zA-Z]+$/; // only letter
    let regex = /^[0-9]+$/; // only number
    if (x.match(regex)) {
        return true;
    } else {
        return false;
    }
};

do {
    user_input = window.prompt('Enter 4-digit from code: ');
} while (!checkInp(user_input) || (user_input.length !== 4))

flag = 0;

for (const item of courseList) {
    if (item.code.includes(user_input)) {
        console.log(`Yes I am taking the course: ${item.code} - ${item.name}`);
    }
    if (!(item.code.includes(user_input))) {
        flag += 1;
    }
}

if (flag === courseList.length) {
    courseList.push({ code: user_input, name: null })
    console.log(`Added code: "${user_input}", name: "${null}" into course list.`)
    console.log(courseList)
}