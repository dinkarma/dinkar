function validate(){

    // declaring variables
    var pin,mob,fname,lname,address,state,city,email,x_board,xii_board,g_board,m_board,x_per,xii_per,
    m_per,g_per,x_yop,xii_yop,m_yop,g_yop,gender_choosen = null,courses_choosen = null,otherHobbies,x_per_old,g_per_old,m_per_old,xii_per_old;

    // giving variables value;
    pin = document.getElementById('pin').value,mob = document.getElementById('mob').value,
    fname = document.getElementById('fname').value,lname = document.getElementById('lname').value,
    address = document.getElementById('address').value,state = document.getElementById('state').value,
    city = document.getElementById('state').value,email = document.getElementById('email').value,
    x_board = document.getElementById('x-board').value,xii_board = document.getElementById('xii-board').value,
    g_board = document.getElementById('g-board').value,m_board = document.getElementById('m-board').value,
    x_per_old = document.getElementById('x-per').value,xii_per_old = document.getElementById('xii-per').value,
    m_per_old = document.getElementById('m-per').value,g_per_old = document.getElementById('g-per').value,
    x_yop = document.getElementById('x-yop').value,xii_yop = document.getElementById('xii-yop').value,
    m_yop = document.getElementById('m-yop').value,g_yop = document.getElementById('g-yop').value,
    month = document.getElementById('month'),month_choosen = month.options[month.selectedIndex].text,
    day = document.getElementById('day'),day_choosen = day.options[day.selectedIndex].text,
    year = document.getElementById('year'),year_choosen = year.options[year.selectedIndex].text,
    gender = document.getElementsByName('gender'),courses = document.getElementsByName('courses'),
    otherHobbies = document.getElementById('otherhobbies').value,
    checkboxes = document.querySelectorAll('input[type="checkbox"]:checked'); 

    
    x_per=parseFloat(x_per_old).toFixed(2);
    g_per=parseFloat(g_per_old).toFixed(2);
    m_per=parseFloat(m_per_old).toFixed(2);
    xii_per=parseFloat(xii_per_old).toFixed(2);
    
    for(i = 0; i < courses.length; i++) {
        if(courses[i].checked){
            courses_choosen = courses[i].value;
            break;
        }
    }

    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked){
            gender_choosen = gender[i].value;
            break;
        }
    }
    
    // checking all fields filled or not     


    if(fname === ""){
        alert("Please Enter First Name");
        return false;
    }

    if(lname === ""){
        alert("Please Enter Last Name");
        return false;
    }

    if(day_choosen === 'Day' || month_choosen === 'Month' || year_choosen === 'Year'){
        alert("Please Select Date of Birth.");
        return false;
    }

    if(email === ""){
        alert("Please Enter email.");
        return false;
    }


    if(mob === ""){
        alert("Please Enter Mobile Number.");
        return false;
    }

    if(gender_choosen === null){
        alert("Please Select Gender.")
        return false;
    }

    if(address===""){
        alert("Please Enter address.");
        return false;
    }

    if(city === ""){
        alert("Please Enter city.");
        return false;
    }

    if(pin === ""){
        alert("Please Enter Pin.");
        return false;
    }

    if(state === ""){
        alert("Please Enter State");
        return false;
    }    
    
    if(checkboxes.length === 0){
        alert("Please Select Hobbies.");
        return false;
        
    }

    if(x_board==="" || xii_board ==="" || g_board===""|| m_board===""){
        alert("Board Name Cannot be Empty!");
        return false;
    }

    if(x_per==="" || xii_per==="" || m_per==="" ||g_per ===""){
        alert("Percentage Field Cannot be Empty!");
        return false;
    }


    if(x_yop==="" || xii_yop ==="" || g_yop===""|| m_yop===""){
        alert("Year of Passing Cannot be Empty!");
        return false;
    }


    if(courses_choosen === null){
        alert("Please Select course.")
        return false;
    }


    // checking first Name conditions

    if(fname.length >30 ){
        alert("First Name should Be less Than 30 characters.");
        return false;
    }
   
    if(!((fname >='A' && fname<='Z') || (fname>='a' && fname<='z'))){
        alert("Enter First Name according to the given parameters.");
        return false;
    }

    // checking Last Name conditions

    if(lname.length > 30){
        alert("Last Name should Be less Than 30 characters.");
        return false;
    }
    if(!((lname >='A' && lname<='Z') || (lname>='a' && lname<='z'))){
        alert("Enter Last Name according to the given parameters.");
        return false;
    }



    // checking mobile number conditions
    
    if(isNaN(mob) || (mob.length<10 || mob.length>10)){
        alert("Please Enter Valid Mobile Number.");
        return false;
    }
    

    // checking pin conditions
    
    if((isNaN(pin)) || pin.length > 6 || pin.length<6){
        alert("Invalid PinCode.");
        return false;
    }
    
    // checking state conditions
    
    if(state.length > 30){
        alert("State Name should Be less Than 30 characters.");
        return false;
    }
    if(!((state >='A' && state<='Z') || (state>='a' && state<='z'))){
        alert("Enter state Name according to the given parameters.");
        return false;
    }
    
    // checking board conditions

    if(x_board.length>10 || xii_board.length>10 || m_board.length>10 || g_board.length>10 ||
        !((x_board >='A' && x_board<='Z') || (x_board>='a' && x_board<='z')) || 
        !((xii_board >='A' && xii_board<='Z') || (xii_board>='a' && xii_board<='z')) ||
        !((g_board >='A' && g_board<='Z') || (g_board>='a' && g_board<='z')) || 
        !((m_board >='A' && m_board<='Z') || (m_board>='a' && m_board<='z'))){
        alert("Please Fill board values according to given parameters.");
        return false;
    }


    



    document.write(`First Name :  ${fname} <br>`);
    document.write(`<br> Last Name :   ${lname} <br>`);
    document.write(`<br> Date of Birth :  ${day_choosen}  /  ${month_choosen}  /  ${year_choosen} <br>`);
    document.write(`<br> Email :  ${email} <br>`);
    document.write(`<br> Mobile Number :  ${mob} <br>`);
    document.write(`<br> Gender :  ${gender_choosen} <br>`);
    document.write(`<br> Address :  ${address} <br>`);
    document.write(`<br> City :  ${city} <br>`);
    document.write(`<br> Pin Code :  ${pin} <br>`);
    document.write(`<br> State : ${state} <br>`);
    document.write("<br> Country : India <br>");
    document.write("<br> Hobbies : ");


    for (var i=0; i<checkboxes.length; i++) {
        if(i<checkboxes.length-1){
            document.write(checkboxes[i].value + ", ");
        }else if(i == checkboxes.length-1){
            document.write(checkboxes[i].value);
        }
        if(checkboxes[i].value === "others"){
            document.write( `: ${otherHobbies} `);
        }
    }

    document.write("<br>")
    document.write("<br> <b>Qualification  : &nbsp; &nbsp; &nbsp; &nbsp;    SL. No   &nbsp; &nbsp; &nbsp; &nbsp; Examination &nbsp; &nbsp; &nbsp; &nbsp; Board &nbsp; &nbsp; &nbsp; &nbsp; Percentage &nbsp; &nbsp; &nbsp; &nbsp; Year of Passing</b> <br>");
    document.write(`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Class X     &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ${x_board}   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${x_per}   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${x_yop} <br>`);
    document.write(`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Class XII   &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;               ${xii_board} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${xii_per} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${xii_yop} <br>`);
    document.write(`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Graduation  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;               ${g_board}   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${g_per}   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${g_yop} <br>`);
    document.write(`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Masters     &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;        ${m_board}   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${m_per}   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${m_yop} <br>`);
    document.write("<br>Course Applied For : " + courses_choosen + "<br>");
}



function resetData(){
        document.getElementById("myForm").reset();  
}
