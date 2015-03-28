var empDetail=function(){
	return("name of employee:"+this.empName+",  "+"empId:"+this.empId+",  "+"monthlySalary:"+this.salary);
};
var employee=function(empName,empId,salary){
	this.empName=empName;
	this.empId=empId;
	this.salary=salary;
	this.empDetail=empDetail;
};
var employee1=new employee("jayanth",142255,500000);
var employee1Detail=employee1.empDetail();
console.log(employee1Detail);

var employee2=new employee("swamiji",142254,550000);
var employee2Detail=employee2.empDetail();
console.log(employee2Detail);

var employee3=new employee("dubeyji",199999,50000);
var employee3Detail=employee3.empDetail();
console.log(employee3Detail);