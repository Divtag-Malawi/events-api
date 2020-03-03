# divtag-events-api

****

## Environment

- NodeJS: version 12.13.1
- DataBase: MongoDB 4.0 (You can also use 3.6)
- MongoDB ORM: Mongoose version 5.8.11
- OS: Windows 10 x64
- Test: Mocha, Chai

## Structure

  `bin`
  `config`
  `data-access`
  `db`
  `drivers`
  `helpers`
  `services`
  `.env`
  `app.js`
  `README.md`


## Inserting Member Info

- Go to POST `api/v1/members`
- Insert similar data to the one below in your Postman
  
  ```js   const body = {
    memberId: "23566",
    firstname: "Nejat",
    lastname: "Mhango",
    username: "nejat-njonjo",
    avatar: "https://avatars0.githubusercontent.com/u/17430132?s=400&u=12001721d56f3bd38ea2295f5f9e3de411385a0e&v=4",
    role: "normal"
  }
  ```

## to be continued
