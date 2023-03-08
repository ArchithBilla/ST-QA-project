Project Name JNEWS WEB APPLICATION

    Module Name
      LOGIN PAGE














    Created by
















    Creation Date
















    Reviewed by
















    Reviewed Date


































    Test cases-ID
    Description
    Test  Steps
    Pre-

conditions Test data Post- condition Expected Result Test Pass/Fail
Comments UI001 Verify the login screen has rendered correctly with all
items appearing “as expected” on the User Interface (UI) 1.Enter valid
username 2.Enter valid password 3.Click on login button Need valid
username and password for login and Valid URL User name:

Password: You should able to see J News application Homepage Successful
Login Pass . UI001 Verify the login screen has rendered correctly with
all items appearing “as expected” on the User Interface (UI) 1.Enter
valid username 2.Enter Invalid password 3.Click on login button Need
valid username and password for login and Valid URL User name:

Password: You should able to see News application Homepage Username or
Password is not correct

    UI001
    Verify the login screen has rendered correctly with all items appearing “as expected” on the User Interface (UI)
    1.Enter Invalid username     2.Enter valid password   3.Click on login button
    Need valid username and password for login and Valid URL
    User name:

Password: You should able to see News application Homepage Username or
Password is not correct

    UI001
    Verify the login screen has rendered correctly with all items appearing “as expected” on the User Interface (UI)
    1.Enter Invalid username     2.Enter Invalid password   3.Click on login button
    Need valid username and password for login and Valid URL
    User name:

Password: You should able to see News application Homepage Username or
Password is not correct

    UI002
    Verify if your Name is visible in the home page or not.
    You have to log in 
     You have to enter the valid username and password
       User name:

Password: You should able to see your name Hello in the Homepage It will
show Hello Username in the correct position. Fail We can not see the
HelloUser name UI002 Verify logo is displayed as per the design
specification Check the Logo is presented or not You have to Enter the
valid URL Valid URL You should be able to see the Jnews logo and Welcome
to Jnews on the web page. It will show Jnews logo and Welcome user Pass

    UI003
    Verify username box is displayed with default text “”Your Username name””
    Check the Username Box there or not
     -
    *     -
    You are able see Username box with enter your username
    Pass


    UI004
    Verify the password box is displayed with default text ”Your password”.
    Check the Password Box there
     -
       -
    *    You are able see Password box with enter your Password 
    Pass


    UI005
    Verify the “Sign In” button is present.
     Check the verify button is visible 
        -
    *                   
        -
    You are able see Signin Button
    Pass


    UI006
    Verify the “Sign up” button is present.
      Check the verify Sign up visible 
    *          -
         -
      You are able to see Signup button 
     Pass


    UI007
    Verify the “Forgot Password?” link is present
     Check the forgot password ? link/button is visible
       -
        -
        -
      You are able to see forgot password ?link/button
      Fail
     There is forgotten password ? link/button




    FUNCTIONAL TESTING












    FT001
    Verify user is able to enter their credentials or not
    Credentials  are accepted by the system.
      You need to give valid Username and password
     Username and password
      If the user enter valid credentials then it will be accepted by system
    Username and password are accepted by system
     Pass
    user is able to enter their credentials or not
    FT002
    Verify the “Submit” button can be selected.
    “Submit” button is clickable
    *      -
       -
    You can see the Submit button
     Pass
    “Submit” button is clickable
    FT003
     Verify The cancel button is working
     ‘ Check ’Cancel button is working and it is resetting your credentials  
    You have to enter credentials
      Enter your Username and password
     If you are click on the cancel button it will reset all your fields
     All credentials are going  resetting 
    Pass
    Username and password 

Will be rest FT004 Verify the login page accepts the user’s credentials

    Login page accepts credentials.

User is directed to the home page. You have to enter the valid
credentials Enter Username, Password and confirm your password If you
directed to Home page You can directly go to homepage without re login
Pass accepts the user’s with valid credentials

    FT005
    Verify user can login successfully once valid credentials have been entered 
     Enter username password and click to submit 
     You need to valid credentials 
    Username password
    Successful login message should display with thank you 
    You can see the message 
    Pass
    accepts the user’s with valid credentials




    FT006
    The Verify registration section is not displayed when the user enters valid credentials for an existing account.
    User is directed to the post login page if the login is successful.




    You need to

Give valid credentials Username Password Confirm password Successfully
register You can see the Message for register is successfully pass
Successfully registered FT007 Verify incorrect username fails login.
Login Error Message is displayed.

    You need to 

Give valid credentials Username And password In valid credentials You
username or password incorrect pass In valid credentials FT008 Verify
invalid password is not accepted. Login is rejected.

Error message is displayed

User is NOT logged in. You need to give valid credentials Username and
password Invalid credentials You username or password incorrect pass
Invalid credentials FT009 Verify invalid username and invalid password
entered simultaneously fail. A meaningful error message such as “Invalid
Login Error” should be displayed. You need to give valid credentials
Username and password Invalid credentials You username or password
incorrect pass User cannot login FT010 Verify User name field is too
short to contain validated input data. Users cannot continue testing
unless resolved / tab refreshed / browser restarted etc. You need to
give valid user name User name Minimum Eight characters You username
should be minimum eight characters pass Username box will be red FT011
The Verify Password field is too short to contain validated input data.

    Password has minimum length requirements of 5 characters with upper/lower case letters, numbers and symbols allowed – e.g “!123qwe” OR “A1b2C3d4e5”.
    You need to give valid password
    password
    At Least one upper/lower and one special character
    You password should be minimum eight characters 
    pass
    password box will be red 
    FT012
    Verify password meets the minimum passphrase length criteria. 




    Pass phrase minimum 6 words (no set words/patterns) – minimum 8 characters in length (must contain at least one of the following: upper case letter, case letter, number or symbol)
    You need to give valid password
    password
    At Least one capital and one special character
    You password should be minimum eight characters 
    pass
    password box will be red 
    FT013
    The Verify Password field is too long to contain validated input data. 




    Password has maximum length requirements of 16 characters with upper/lower case letters, numbers and symbols allowed – e.g “!123qwe&@#ABCDEFG”.
    You need to give valid password
    password
    At Least one capital and one special character
    You password should be minimum eight characters 
    pass
    password box will be red 
    FT014
    Verify Caps Lock key is enabled during password entry. 
    Incorrect Password error should display.
    You need to give valid password
    password
    At Least one capital and one special character
    You password should be minimum eight characters 
    pass
    password box will be red 
    FT015
    Verify Num Lock key is enabled during password entry.
    Incorrect Password error should display.
    You need to give valid password
    password
    At Least one capital and one special character
    You password should be minimum eight characters 
    pass
    password box will be red 
    FT016
    The Verification system does not accept passwords which are too similar. 






    Invalid Credentials error should display. , e.g “password” & “Password”
    You need to give valid password
    password
    At Least one capital and one special character
    You password should be minimum eight characters 
    pass
    password box will be red 




    API-TEST












    API001
    200
    The requested succeeded








    pass


    API002
    400
    Bad request the server could not understand the request








    pass


    API003
    401
    Unauthorised

The request is not authorised

    pass


    API004
    403
    Forbidden 








    pass


    API005
    404
    Not found 








    pass


    API006
    500
    INTERNAL SERVER ERROR








    pass






    Data base












    DA001
    Check the table is available in database
    available in database








    pass


    DA002
    Check the data is saving or not


     the data is saving or not










    pass
