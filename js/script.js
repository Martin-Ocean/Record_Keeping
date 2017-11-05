// pass stuctured data into arry @employees
class checkPass {
    constructor(id, password) {
        this.id = id;
        this.password = password;
    }
}

// pass structured data into arry @timeRecord
class displyRecord {
    constructor(EmployeeNumber, Date, time, PunchIn)  {
        this.employeeNumber = EmployeeNumber;
        this.date = Date;
        this.time = time;
        this.punchIn = PunchIn;
    }
}

//hard coded data for testing
const employees = [];
employees.push(new checkPass("223456", "1Password1"));
employees.push(new checkPass("224333", "2Password2"));
employees.push(new checkPass("330000", "3 Password3"));
employees.push(new checkPass("123", "123"));


/*Date format YYYYMMDD
Time format HHMMSS use 24 hours clock
Punch in Boolean true = punchin && false = punchout*/

const timeRecord = [];
var now = new Date()
var samplePunchIn = new Date();
samplePunchIn.setHours(now.getHours()-1);

// options for String formatting
var formatDate = {
    year: 'numeric', month:'2-digit', day: '2-digit'
};

var formatTime = {
    hour: '2-digit', minute: '2-digit', second: "2-digit"
};

timeRecord.push(new displyRecord('123', samplePunchIn.toLocaleDateString("en-US", formatDate), samplePunchIn.toLocaleTimeString("en-us", formatTime),
                                 true));


timeRecord.push(new displyRecord('123', now.toLocaleDateString("en-US", formatDate), now.toLocaleTimeString("en-us", formatTime),
                                 false));




// login button is clicked, 
var logBtn = document.getElementById('loginButton');
logBtn.addEventListener('click', () => {
    var id = document.getElementById('id').value;
    var password = document.getElementById('password').value;
    var text = "Wrong combination of Employee Number and Password";
    for(let employee of employees) {
        if(employee.id === id) {
            if(employee.password === password){
                text = "Login Success";
                
                //once logged in, hide login form
                document.querySelector('form').className += "collapse";
                
                /*
                1. display login successful message and hide login message after 2 seconds
                2. remove collapse from logout button
                3. display employee number
                4. add Date time punch card title
                5. add rows of data
                */
                setTimeout(() => {
                    document.getElementById('response').innerHTML = `Employee Number ${id}`;
                    
                    document.getElementById('logOut').className = 'btn btn-primary';
                    
                    var topRow = document.createElement('div');
                    topRow.className += 'row';
                    
                    //date column
                    var topLeftRow = document.createElement('div');
                    topLeftRow.className += 'col-4 text-center';
                    var dateTitle = document.createTextNode('Date');
                    topLeftRow.appendChild(dateTitle);
                    
                    
                    //time column
                    var topMiddleRow = document.createElement('div');
                    topMiddleRow.className += 'col-4 text-center';
                    var timeTitle = document.createTextNode('Time');
                    topMiddleRow.appendChild(timeTitle);
                    
                    
                    // punch card column
                    var topRightRow = document.createElement('div');
                    topRightRow.className += 'col-4 text-center';
                    var punchTitle = document.createTextNode('Punch Card');
                    topRightRow.appendChild(punchTitle);
                    
                    //push each column to parent row
                    topRow.appendChild(topLeftRow);
                    topRow.appendChild(topMiddleRow);
                    topRow.appendChild(topRightRow);
                    
                    
                    //push row into tag 
                    document.getElementById('content').appendChild(topRow);
                    
                    
                    /*
                    1. loop through timeRecord array
                    2. create three columns to display data
                    3. add each corresponding data to text node
                    4. push textNode to divs
                    5. push all divs to parent tag
                    */
                    
                    for(let record of timeRecord) {
                        //console.log('in the loop');
                        if(record.employeeNumber == id) {
                            var dataRow = document.createElement('div');
                            dataRow.className += 'row';
                            
                            //date
                            var leftColumn = document.createElement('div');
                            leftColumn.className += 'col-4 text-center';
                            var dataDate = document.createTextNode(record.date);
                            leftColumn.appendChild(dataDate);
                            
                            //time
                            var middleColumn = document.createElement('div');
                            middleColumn.className += 'col-4 text-center';
                            var dataTime = document.createTextNode(record.time);
                            middleColumn.appendChild(dataTime);
                            
                            //punch card
                            var rightColumn = document.createElement('div');
                            rightColumn.className += 'col-4 text-center';
                            if(record.punchIn) {
                                var dataPunch = document.createTextNode('IN');
                            } else {
                                var dataPunch = document.createTextNode('OUT');
                            }
                             rightColumn.appendChild(dataPunch);
                            
                            
                            dataRow.appendChild(leftColumn);
                            dataRow.appendChild(middleColumn);
                            dataRow.appendChild(rightColumn);
                            
                            document.getElementById('content').appendChild(dataRow);
                        }
                        //console.log('after if');
                    }
                    
                    if (timeRecord.length != 0) {
                        if (timeRecord[timeRecord.length-1].punchIn) { 
                            document.getElementById('punchIn').className = 'collapse';
                             document.getElementById('punchOut').className = 'btn btn-primary' 
                        } else {
                            document.getElementById('punchOut').className = 'collapse';
                             document.getElementById('punchIn').className = 'btn btn-primary';
                        }
                    }
                    
                    
                    /*
                    create button after login is done
                    error when trying to add eventListener after specific buttons not created initially.
                    
                    
                    var btnRow = document.createElement('div');
                    var leftBtn = document.createElement('div');
                    var rightBtn = document.createElement('div');
                    
                    btnRow.className += 'row';
                    leftBtn.className += 'col-6 text-center';
                    rightBtn.className += 'col-6 text-center';
                    
                    if (timeRecord.length != 0) {
                        if (timeRecord[timeRecord.length-1].punchIn) {
                            var btnOut = document.createElement('button');
                            btnOut.id = 'punchOut';
                            btnOut.nodeType = HTMLButtonElement;
                            btnOut.className += 'btn btn-primary'
                            var punchOutText = document.createTextNode('Punch Out');
                            btnOut.appendChild(punchOutText);
                            rightBtn.appendChild(btnOut);
                        } else {
                            var btnIn = document.createElement('button');
                            btnIn.id = 'punchIn';
                            btnIn.nodeType = HTMLButtonElement;
                            btnIn.className += 'btn btn-primary'
                            var punchInText = document.createTextNode('Punch In');
                            btnIn.appendChild(punchInText);
                            leftBtn.appendChild(btnIn);
                        }
                    
                    
                    
                    btnRow.appendChild(leftBtn);
                    btnRow.appendChild(rightBtn);
                                                }
            
                    document.getElementById('punch').appendChild(btnRow);
                    */
                }, 2000);
            } 
        }
    }
    document.getElementById('response').appendChild(document.createTextNode(text));
    
});

/*
PunchIn time button 
1. clicked
2. create and push data into array
3. push data onto columns
4. hide punchOut
*/
document.getElementById('punchIn').addEventListener('click', () => {
    var currentTime = new Date();
    timeRecord.push(new displyRecord('123', currentTime.toLocaleDateString("en-US", formatDate), currentTime.toLocaleTimeString("en-us", formatTime),
                                 true));
    
    var dataRow = document.createElement('div');
                            dataRow.className += 'row';
                            
                            //date
                            var leftColumn = document.createElement('div');
                            leftColumn.className += 'col-4 text-center';
                            var dataDate = document.createTextNode(timeRecord[timeRecord.length-1].date);
                            leftColumn.appendChild(dataDate);
                            
                            //time
                            var middleColumn = document.createElement('div');
                            middleColumn.className += 'col-4 text-center';
                            var dataTime = document.createTextNode(timeRecord[timeRecord.length-1].time);
                            middleColumn.appendChild(dataTime);
                            
                            //punch card
                            var rightColumn = document.createElement('div');
                            rightColumn.className += 'col-4 text-center';
                            
                            var dataPunch = document.createTextNode('IN');
                            
                            rightColumn.appendChild(dataPunch);
                            
                            
                            dataRow.appendChild(leftColumn);
                            dataRow.appendChild(middleColumn);
                            dataRow.appendChild(rightColumn);
                            
                            document.getElementById('content').appendChild(dataRow);
    
    document.getElementById('punchIn').className = 'collapse';
                             document.getElementById('punchOut').className = 'btn btn-primary';
    
});

/*
same as punchIn button, but just opposite
*/
document.getElementById('punchOut').addEventListener('click', () => {
    var currentTime = new Date();
    timeRecord.push(new displyRecord('123', currentTime.toLocaleDateString("en-US", formatDate), currentTime.toLocaleTimeString("en-us", formatTime),
                                 false));
    
    var dataRow = document.createElement('div');
                            dataRow.className += 'row';
                            
                            //date
                            var leftColumn = document.createElement('div');
                            leftColumn.className += 'col-4 text-center';
                            var dataDate = document.createTextNode(timeRecord[timeRecord.length-1].date);
                            leftColumn.appendChild(dataDate);
                            
                            //time
                            var middleColumn = document.createElement('div');
                            middleColumn.className += 'col-4 text-center';
                            var dataTime = document.createTextNode(timeRecord[timeRecord.length-1].time);
                            middleColumn.appendChild(dataTime);
                            
                            //punch card
                            var rightColumn = document.createElement('div');
                            rightColumn.className += 'col-4 text-center';
                            
                            var dataPunch = document.createTextNode('OUT');
                            
                            rightColumn.appendChild(dataPunch);
                            
                            
                            dataRow.appendChild(leftColumn);
                            dataRow.appendChild(middleColumn);
                            dataRow.appendChild(rightColumn);
                            
                            document.getElementById('content').appendChild(dataRow);
    
                            document.getElementById('punchOut').className = 'collapse';
                             document.getElementById('punchIn').className = 'btn btn-primary' 
});

document.getElementById('logOut').addEventListener('click', () => {
    window.location.href = './index.html';
 
});