/* 
    Copyright (C) 2019 Hillotech, LLC. All Rights Reserved
*/

/* 

    1. Redirect to mobile or desktop from index

*/



/* 

    1. This a Javascript that will redirect to another page when the screen
    is larger than a certain point. If it is less than then it will be a
    mobile device and sent it to the mobile page.

*/

if (screen.width >= 699){
    document.location = "app/index_desktop.html";
}else{
    document.location = "app/index_mobile.html";
}




