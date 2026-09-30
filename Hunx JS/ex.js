const students = ["Aarav", "Priya", "Rohan", "Ananya", "Kabir"]

const findAStudent = (students, studentName) => {
  if (students.includes(studentName)) {
    console.log(`Student ${studentName} is found`)
  } else {
    console.log(`Student ${studentName} not found `)
  }
}
findAStudent(students, "Rohan")


// Time: O(n)
// Space: O(1)

// Array → I have a collection/list of things.
// Set → I care about whether a unique thing exists.