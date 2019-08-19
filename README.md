# countries-info

Client setup 

```
cd client
npm install
npm start
```

Server setup

Go to server folder

You have to install PostgreSQl on your machine. I used this guide https://www.robinwieruch.de/postgres-sql-macos-setup/
and you have to create one database (`countriesInfo` for example)
In `.env` you have to set some constants 

```
DATABASE=countriesInfo
DATABASE_USER={username}
DATABASE_PASSWORD={password}
```
and after that just run 

```
  npm install
  npm run
```
