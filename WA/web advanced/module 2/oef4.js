'use strict';

const students ={
Alex: {grades: []},
Sam: {grades: []},
Jo: {grades: []},
};

addButton.addEventListener('click', () => {
    const student = studentSelect.value;
    const course = courseInput.value;
    const grade = Number(gradeInput.value);

    if(!course || !grade || grade<0 || grade>20){
alert('vul alle velden correct in!');
return;
    }
})

//score toevoegen
students[student].grades.push({
    course: course,
    grade: grade
});

