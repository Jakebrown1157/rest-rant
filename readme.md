# Project REST-Rant

REST-Rant is an app where users can review restaurants.

coding languages 

CSS Framework: Bootstrap

Stack: MongoDB, Express, NodeJS

Server-Side Rendering: JSX

node modules: method-overide, dotenv, express-react-views

# Paths

| method | Path | purpose |
| :------ | :------ | :------ |
| Get | / | Home Page |
| Get | /places | Places index page |
| POST | /places | Create new place |
| Get | /places/new | Form page for creating a new page |
| Get | /places/:id | Details about a particular place |
| Put | /places/:id | Update a particular place |
| Get | /places/:id/edit | Form page for editing an exsisting page |
| Delete | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| Delete | /places/:id/rand/randId | Delete a rand (comment) about a particular place |
| Get | * | 404 page (matches any rout not defined abo) |

# places

| Field | Type |
| :----- | :----- |
| name | la esquina |
| city | Las Vegas |
| state | Nevada |
| Cuisines | Mexican |
| pic | https://images.unsplash.com/photo-1494233914995-8c8b438d3f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3R1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60 |