

|||||||||
| :- | :- | :- | :- | :- | :- | :- | :- |
|**Project Name**|*JNEWS WEB APPLICATION*|||||||
|**Module Name**|<p>` `LOGIN PAGE &</p><p>*HOME*</p><p>*PAGE*</p>|||||||
|**Created by**|jay|||||||
|**Creation Date**||||||||
|**Reviewed by**||||||||
|**Reviewed Date**||||||||
||||<h2><a name="_heading=h.zacvz8qyenbi"></a>Sprint-1</h2>|||||
|||||||||
|**Test cases-ID**|**Description**|**Test  Steps**|<p>**Pre-**</p><p>**conditions**</p>|**Test data**|**Post- condition**|**Expected Result**|**Test Pass/Fail**|
|||<p><h5><a name="_heading=h.tdcd4ng9hk5"></a>User interface</h5></p><p><h5></h5></p>||||||
|<a name="_heading=h.yd99h9pu8aoc"></a>**UI001**|Verify the login screen has rendered correctly with all items appearing “as expected” on the User Interface (UI)|1\.Enter valid username     2.Enter valid password   3.Click on login button|Need valid username and password for login and Valid URL |<p>User name:</p><p></p><p>Password:</p>|You should able to see J News application Homepage|<p>Successful</p><p>Login</p>|Pass|
|**UI001**|Verify the login screen has rendered correctly with all items appearing “as expected” on the User Interface (UI)|1\.Enter valid username     2.Enter Invalid password   3.Click on login button|Need valid username and password for login and Valid URL|<p>User name:</p><p></p><p>Password:</p>|You should able to see News application Homepage|Username or Password is not correct|pass|
|**UI001**|Verify the login screen has rendered correctly with all items appearing “as expected” on the User Interface (UI)|1\.Enter Invalid username     2.Enter valid password   3.Click on login button|Need valid username and password for login and Valid URL|<p>User name:</p><p></p><p>Password:</p>|You should able to see News application Homepage|Username or Password is not correct|pass|
|**UI001**|Verify the login screen has rendered correctly with all items appearing “as expected” on the User Interface (UI)|1\.Enter Invalid username     2.Enter Invalid password   3.Click on login button|Need valid username and password for login and Valid URL|<p>User name:</p><p></p><p>Password:</p>|You should able to see News application Homepage|Username or Password is not correct|pass|
|**UI002**|Verify if your Name is visible in the home page or not.|You have to log in |` `You have to enter the valid username and password|<p>`   `User name:</p><p></p><p>Password:</p>|You should able to see your name Hello in the Homepage|It will show Hello Username in the correct position.|pass|
|**UI002**|Verify logo is displayed as per the design specification|Check the Logo is presented or not|` `You have to Enter the valid URL|` `Valid URL|` `You should be able to see the Jnews logo and Welcome to Jnews  on the web page.|It will show Jnews logo and Welcome user |Pass|
|||||||||
|**UI003**|Verify username box is displayed with default text “”Your Username name””|Check the Username Box there or not|` `-||`  `-|You are able see Username box with enter your username|Pass|
|**UI004**|Verify the password box is displayed with default text ”Your password”.|Check the Password Box there|` `-|`   `-||` `You are able see Password box with enter your Password |Pass|
|**UI005**|Verify the “Sign In” button is present.|` `Check the verify button is visible |`    `-|          	|`    `-|You are able see Signin Button|Pass|
|**UI006**|Verify the “Sign up” button is present.|`  `Check the verify Sign up visible ||`       `-|`     `-|`  `You are able to see Signup button |` `Pass|
|||<h4><a name="_heading=h.p7v009y075cc"></a>FUNCTIONAL TESTING</h4>||||||
|**FT001**|Verify user is able to enter their credentials or not|Credentials  are accepted by the system.|`  `You need to give valid Username and password|` `Username and password|`  `If the user enter valid credentials then it will be accepted by system|Username and password are accepted by system|` `Pass|
|**FT002**|Verify the “Submit” button can be selected.|“Submit” button is clickable||`   `-|`   `-|You can see the Submit button|` `Pass|
|**FT003**|` `Verify The cancel button is working|` `‘ Check ’Cancel button is working and it is resetting your credentials  |You have to enter credentials|`  `Enter your Username and password|` `If you are click on the cancel button it will reset all your fields|` `All credentials are going  resetting |Pass|
|**FT004**|<p>Verify the login page accepts the user’s credentials</p><p></p><p></p><p></p>|<p>Login page accepts credentials.</p><p></p><p>User is directed to the home page.</p>|` `You have to enter the valid credentials |`  `Enter Username, Password and confirm your password|It will directed you  to Home page|You can directly go to homepage without re login|` `Pass|
|**FT005**|Verify user can login successfully once valid credentials have been entered |` `Enter username password and click to submit |` `You need to valid credentials |Username password|Successful login message should display with thank you |You can see the message |Pass|
|**FT006**|The Verify registration section is not displayed when the user enters valid credentials for an existing account.|<p>User is directed to the post login page if the login is successful.</p><p></p><p></p>|<p>You need to</p><p>Give valid </p><p>credentials </p>|<p>Username </p><p>Password </p><p>Confirm </p><p>password</p>|Successfully register|<p>You can see the </p><p>Message for register is successfully</p>|pass|
|**FT007**|Verify incorrect username fails login. |<p>Login Error Message is displayed.</p><p></p><p></p>|<p>You need to </p><p>Give valid</p><p>credentials </p>|<p>Username </p><p>And </p><p>password</p>|<p>In valid </p><p>credentials</p>|You username or password incorrect|pass|
|**FT008**|Verify invalid password is not accepted.|<p>Login is rejected.</p><p></p><p>Error message is displayed</p><p></p><p>User is NOT logged in.</p>|You need to give valid credentials|<p>Username and </p><p>password</p>|Invalid credentials|You username or password incorrect|pass|
|**FT009**|Verify invalid username and invalid password entered simultaneously fail. |A meaningful error message such as “Invalid Login Error” should be displayed.|You need to give valid credentials|<p>Username and </p><p>password</p>|Invalid credentials|You username or password incorrect|pass|
|**FT010**|Verify User name field is too short to contain validated input data. |Users cannot continue testing unless resolved / tab refreshed / browser restarted etc.|You need to give valid user name |User name |<p>Minimum </p><p>Eight characters</p>|You username should be minimum eight characters |pass|
|**FT011**|<p>The Verify Password field is too short to contain validated input data. </p><p></p><p></p>|Password has minimum length requirements of 5 characters with upper/lower case letters, numbers and symbols allowed – e.g “!123qwe” OR “A1b2C3d4e5”.|You need to give valid password|password|At Least one upper/lower and one special character|You password should be minimum eight characters |pass|
|**FT012**|<p>Verify password meets the minimum passphrase length criteria. </p><p></p><p></p>|Pass phrase minimum 6 words (no set words/patterns) – minimum 8 characters in length (must contain at least one of the following: upper case letter, case letter, number or symbol)|You need to give valid password|password|At Least one capital and one special character|You password should be minimum eight characters |pass|
|**FT013**|<p>The Verify Password field is too long to contain validated input data. </p><p></p><p></p>|Password has maximum length requirements of 16 characters with upper/lower case letters, numbers and symbols allowed – e.g “!123qwe&@#ABCDEFG”.|You need to give valid password|password|At Least one capital and one special character|You password should be minimum eight characters |pass|
|**FT014**|Verify Caps Lock key is enabled during password entry. |Incorrect Password error should display.|You need to give valid password|password|At Least one capital and one special character|You password should be minimum eight characters |pass|
|**FT015**|Verify Num Lock key is enabled during password entry.|Incorrect Password error should display.|You need to give valid password|password|At Least one capital and one special character|You password should be minimum eight characters |pass|
|**FT016**|<p>The Verification system does not accept passwords which are too similar. </p><p></p><p></p><p></p>|Invalid Credentials error should display. , e.g “password” & “Password”|You need to give valid password|password|At Least one capital and one special character|You password should be minimum eight characters |pass|
|||<h5><a name="_heading=h.xhsdirh56uxv"></a>API-TEST</h5>|<h5><a name="_heading=h.vmdgkinl0ojx"></a>postman</h5>|||||
|**API001**|200|The requested succeeded sign in |You need to give valid password|Username and password|||pass|
|**API002**|400|Bad request the server could not understand the request|Server is not connected|error|||pass|
|**API003**|401|<p>Unauthorised</p><p>The request is not authorised</p>|||||pass|
|**API004**|200|The requested succeeded sign up  |You need to give valid password|<p>Username and password</p><p></p>|||pass|
|**API005**|400|Bad request the server could not understand the request|Server is not connected|error|||pass|
|**API006**|401|<p>Unauthorised</p><p>The request is not authorised</p>|||||pass|
|||<h5><a name="_heading=h.r1hbepivmpai"></a>Data base</h5>||||||
|DA001|Check the table is available in database|available in database|||||pass|
|DA002|<p>Check the data is saving or not</p><p></p>|<p>` `the data is saving or not</p><p></p>|||||pass|
|<p></p><p><h2><a name="_heading=h.rx7voufd45vm"></a>                                              **SPRINT-2**</h2></p><p></p><p></p><p></p><p></p>|
|**Test cases-ID**|<a name="_heading=h.lsnshlyu1omc"></a>**Description**|**Test  Steps**|<p>**Pre-**</p><p>**conditions**</p>|**Test data**|**Post- condition**|**Expected Result**|**Test Pass/Fail**|
|||<h5><a name="_heading=h.57c0neuro7xc"></a>User interface</h5>||||||
|UI101|Verify Sign in button is there |Visit Jnews|`  `-|News URL|Signin button should be there|User can sign in into Jnews|Pass|
|UI102|Verify Homepage is showing General categories News |User need to sign in |` `Sign in into J news|` `Valid credentials |`    `-|General news should be there|Pass|
|UI103|<p>Verify that</p><p>The</p><p>homepage of the newsweb application loads successfully and all the</p><p>components of the page are displayed correctly</p>|User need to sign in |<p>Sign in into J news</p><p></p>|Valid credentials |** See all the news|News should be load and display correctly|Pass|
|UI104|Verify News headline font is bigger than news in size|User need to sign in |Sign in into J news|Valid credentials ||User able to see news headline easily|Pass|
|UI105|Verify that the top news stories are displayed on the homepage and the headlines are clickable|User need to sign in |Sign in into J news|Valid credentials ||User able to see Top news in the homepage|Fail|
|UI106|Verify that the news  are  in the correct category |User need to sign in |Sign in into J news|Valid credentials ||News should be in the correct category|pass|
|UI107|Verify that font size and style are same throughout news |User need to sign in |Sign in into J news|Valid credentials ||News article should be displayed in the same font size and style|Pass|
|UI108|Verify Refresh button is there |User need to sign in |Sign in into J news|Valid credentials ||Refresh button should be there|Pass|
|UI109|Verify setting button is there|User need to sign in |Sign in into J news|Valid credentials ||Setting button should be there|Pass|
|UI110|Verify categories Checkbox is working |You need to click on the setting button |Sign in into J news|Valid credentials |User need to select one or more categories |User can select multiple category based on their interest|Pass|
|UI111|Verify the OK button is working properly or not.|You need to click on the setting button |Sign in into J news|Valid credentials |At Least one category needs to be select|OK  button should be there|Pass|
|UI112|Verify the Cancel button is working properly or not.|You need to click on the setting button |Sign in into J news|Valid credentials ||Cancel button should be there|Pass|
|||||||||
|||<h4><a name="_heading=h.491ak3r2irie"></a>Functional Testing</h4>||||||
|FT101|Verify JNews displaying general news on the landing page|Visit JNews|You have URL of Jnews|JNEWS URL |User have to visit Jnews|Page displaying general news|Pass|
|FT102|Check if the news articles are categorised into different categories |User  have to sign in Jnews|User have to enter valid credentials and then signed in |Valid credentials |`   `**-**|User able to choose categories as|Pass|
|FT103|Verify How many categories user can select |User need to click on setting button  |User need to select categories |`  `**-**|User can select more than one category |User able to see different categories|Pass|
|FT104|Verify that  the user can access news from a specific category.|User need to choose a categories|`  `User to click on settings button|<p>**      </p><p></p><p>`     `**–**</p>|User have to choose category as per their interest|It will shows news only from selected categories|Pass|
|FT105|Verify that news feed is displayed properly|` `Visit Jnews Homepage|<p></p><p></p><p>`         `–</p>|<p>**  </p><p></p><p>`     `**–**</p>|<p>** </p><p></p><p>`    `**–**</p>|News should be in proper format|Pass|
|FT106|Verify  that the news feed displays the latest news articles|Visit Jnews and click on the Latest news|`     `**–**|`    `**–**|**–**|User able see Latest News in the homepage |Fail|
|FT107|Check that each article contains a title, description, image, and source.|Click on the News article|** User able to expand news article|`     `**-**|`    `**-**|User able to expand news article and see title description image and source|Fail|
|FT108|Verify that the articles are sorted by date and time, with the latest articles appearing first|`   `User |`        `**-**|`      `**-**|`    `**-**|Articles should be sorted date and time wise.|Fail|
|FT109|Verify that clicking on a news article leads to a detailed article page|User need to click on the news article|`     `**-**|`     `**-**|`    `**-**|When user clicks on the link user can see full news article|Pass|
|FT111|Check the News web application page loading time |Click on the News link|User need to see page loading time for news articles|` `News link|`    `-|`  `Page loading time should be minimum.|Pass|
|FT11|Verify that user can update their categories|User need to click on the setting page|User need to select new category||`  `User need to click on the OK button |` `User able to add new category in their choosing category list|Pass|
|FT114|Verify that the news web application has a "trending now" section that displays the most popular article|User need to click on the trending now section |`      `-|` `Trending news |`  `-|User able to see the most visited article from the JNEWS |Fail|
|FT115|Verify that the news web application has a "recommended for you" section that displays articles based on the user categories|User need to choose categories|`    `-|`   `-|User can see recommend for you section |` `User can see the news as per their selection|Fail|
|||<h3><a name="_heading=h.6nwv2yxdrow2"></a>API Testing</h3>|<h4><a name="_heading=h.66p607adwemf"></a>postman</h4>|||||
|API 101|200 |Verify that a GET request to the API endpoint for news articles returns a 200 OK response|||200 ok refresh button||<p>Not  done</p><p>yet</p>|
|API 102|401 un orthu|Verify that the response contains the expected number of articles|||<p>401 user is not recognized</p><p></p>||<p>Not  done</p><p>yet </p>|
|API 103||Verify that a GET request to the API endpoint with a category parameter returns only news articles that belong to that category.|||Setting button ||Not yet done|
|API 104||Verify that each article in the response belongs to the specified category.|||News.api call||pass|
|||||||||
|API 106||<p>Verify that the API returns an error message when an invalid or incorrect URL is provided.</p><p></p>|||<p>Api call to Retrieve</p><p>User preferences </p>||pass|
|API 107||Sign in users|||Sign in||pass|
|API 108||Sign up|||Sign up||pass|
|||<h5><a name="_heading=h.9anpah79fj29"></a>Database</h5>||||||
|DB101|Verify that the database schema is correctly set up and all tables are created with the correct data types and relationships|Make a user table and created a columns of all the categories |Insert a data into user table and connect tables|Table and data |User table should be updated |Database schema and data types should be correctly set with correct relationship|` `Pass|
|DB102|Test that the database can store and retrieve news articles correctly|Check that the table can store the news article.|Store the news article in the database|News articles data |News article should be retrieved correctly |All the news articles should be stored and retrieved correctly in the database.|Pass|
|DB103|<p>Test that data is properly stored and retrieved from the database.</p><p></p>|<p>Store the news article and then retrieve them from the database table</p><p></p>|Store the news article in the database in the proper manner |News articles data |News article should be retrieved properly |All the news articles data should be stored and retrieved Properly in the database.|Pass|
|DB104|Check that the database can handle user authentication and authorization, including storing and retrieving user passwords securely|User’s credentials and their data retrieved properly or not. |User needs to sign in first |Login credentials |User need to choose their categories as per their interest|When user sign in into JNEWS their chosen Categories should be remain same |Pass|
|DB105|Check that the database can handle different types of data|Check that all types of data are there in the database or not|<p>` `Table</p><p>should consist different types of data </p>|` `All types of data which is used in the JNEWS |`    `-|Database need to handle all types of data like images and text etc. |Fail|
|DB106|Test that articles can be retrieved from the database by category |News articles data should be store with their category|News articles and Categories should be related correctly.|News articles and category name |Make sure that news articles are perfectly belonging to that category only.|Articles should be retrieved correctly as per their categories.|Pass|

