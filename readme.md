# Project REST-Rant

REST-Rant is an app where users can review restaurants.

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