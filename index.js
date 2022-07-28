let user ={
    firstName : 'john',
    lastName :'Akeem',
    salary : function(bonus,salary){
        return bonus + salary;
    }
}
console.log(user.salary?.(100,500));