function newUser(name, age, country) {
    var name = name || 'Oscar'; // Valores por defecto
    var age = age || 34;
    var country = country || 'MX';  
    console.log(name,age,country);  
}

newUser();
newUser('David', 15 , 'CO');


// Nueva manera de pasar valores por defecto
function newAdmin(name = 'Oscar', age = 34, country = 'CL'){
    console.log(name,age,country);  
};

newAdmin();
newAdmin('David', 15 , 'CO');