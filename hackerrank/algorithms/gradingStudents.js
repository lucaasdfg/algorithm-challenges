//return an integer array consisting of rounded grades.
//gradingStudents has the following parameter(s):
//grades: an array of integers representing grades before rounding
function gradingStudents(grades) {
   for(let i = 0;i<grades.length;i++){
       if(grades[i]>= 38){
           if(grades[i]+(5-grades[i]%5)-grades[i]<3){
                grades[i]=(grades[i]+(5-grades[i]%5));
           }
        }
    }
   return grades
}