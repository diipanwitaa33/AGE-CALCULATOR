let userInput= document.getElementById("date");

//to select only todays date and past date 
userInput.max = new Date().toISOString().split("T")[0];

let result =document.getElementById("result");

//function for calculating the age 
function calculateAge(){

    //when we will create any date in the input box it will be stored in birthDate variable.
    let birthDate = new Date(userInput.value);

    let d1=birthDate.getDate(); //this will store the userinput date
    let m1=birthDate.getMonth() + 1;//this will store the userinput month
    let y1=birthDate.getFullYear();//this will store the userinput year

    let today= new Date(); //todays date to calculate the difference

    let d2=today.getDate();
    let m2=today.getMonth() + 1;
    let y2=today.getFullYear();

    let d3,m3,y3;

    y3=y2 - y1; //current year - date of birth year
    
    if(m2 >= m1){
         m3=m2 - m1;
    }
    else{
        y3--;
        m3=12 + m2 - m1;
    }

    if(d2 >= d1){
        d3= d2-d1;
    }else{
          m3--;
          d3=getDaysInMonth(y1,m1) + d2 - d1;
    }
    
    if(m3 < 0){
      m3=11;
      y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`; 
}
    function getDaysInMonth(year,month){
        return new Date(year,month,0).getDate();
    }
 