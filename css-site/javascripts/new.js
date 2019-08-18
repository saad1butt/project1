var students = [];
function student(first,last,age)
{
	this.firstname = first;
	this.lastname = last;
	this.age= age;
	this.greeting = function()
	{
		return "Hi I am " +this.firstname+ " and I am  "+this.age+ "Years old.";
	}
}


students.push(new student("ALi","Ahmad",19));
students.push(new student("ALiii","Ahmad",19));
students.push(new student("ALii","Ahmad",19));
students.push(new student("ALiiii","Ahmad",19));

for(var index=0;index<=students.length;index++)
	{
		var student = students[index];
		console.log(student.greeting());
	}