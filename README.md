# **Lesson Less**
A digital music sharing platform for private music instructors and their students



*Developed at Hack Reactor, San Francisco by Lizzie Shipton. Deployed via Heroku*

___


## TABLE OF CONTENTS

1. [Dependencies](# dependencies)
2. [Development](# develop-/-contribute)
  * [Usage](# usage)
  * [Tasks](# tasks)
3. [Known Bugs (Updated October, 2016)](# known-bugs)



## DEPENDENCIES

- "body-parser": "^1.15.2",
- "express": "^4.14.0",
- "forever": "^0.15.2",
- "mongodb": "^2.2.10",
- "mongoose": "^4.6.3",
- "nodemon": "^1.11.0"


## DEVELOP / CONTRIBUTE

### Usage

  Fork the repo to your github.com account. Clone to your local machine.

  Install dependencies and start local server (from command-line):

```
cd lesson-less
npm install
cd client
bower install
cd ..
npm start
```

### Tasks

  To seed the database, run the seed_database.js file one time from your command-line:

  ```
  node seed_database.js
  ```

  This will populate your database with 50 initial Real Book charts from [www.guitarcats.com](guitarcats.com)



## BACKLOG

[![Stories in Ready](https://badge.waffle.io/lizzieshipton/Lesson-Less.png?label=ready&title=Ready)](http://waffle.io/lizzieshipton/Lesson-Less)

