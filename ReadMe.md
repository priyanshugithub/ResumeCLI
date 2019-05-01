How to make it Executable?
Add #!/usr/bin/env node on the top of index.js.

In package.json, add section of bin

"bin": {
    "myprofile": "./index.js"
}
Now go to the terminal and write

 myprofile

How to run it?
Go to the desire folder.

cd ResumeCLI
Install the dependency using :

npm install
From the root of the myprofile run the following command to start the application

node index.js

