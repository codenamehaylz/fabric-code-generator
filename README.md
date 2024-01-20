# Fabric Code Generator

A simple web app to create 3-character codes from a word or phrase. 

### ...but why?
I built this specifically as an aid for my previous admin job, where I had to come up with codes for new fabrics that we were launching, based on what we were naming them. For example the code for 'Charlotte' might be 'CHA'. However as more fabrics were added, it became harder to find unique codes that were not already used on our system.

This app would have saved me some brain power while trying to think of all possible 3-character combinations I could have for a name. So, I've built this to hopefully make the job easier for the next person who fills the role.

### Features

- An error message appears if the user attempts to submit an empty input or anything less than 3 characters.
- The generated codes all begin with the same letter as the word/phrase that is input. This is an intentional feature because our fabric codes always have the same first character as the fabric name. (For example we would not use the code 'ATE' for 'Charlotte').
- No duplicate codes.
- Spaces are ignored.