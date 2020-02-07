const organizeInstructors = function(instructors) {
  // Put your solution here
  let organizedTeachers = {};

  for(let i = 0; i < instructors.length; i++){
    if(!organizedTeachers[instructors[i].course]){
      organizedTeachers[instructors[i].course] = [instructors[i].name];
    } else {
      organizedTeachers[instructors[i].course].push(instructors[i].name);
    }
  }
  return organizedTeachers;
  ;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));