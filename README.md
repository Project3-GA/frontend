# Image Board

## Description:

A community-based app where users can post and organize ideas about goals or interests. Users can also tag images and collections to share their interests.

## Deployment:

hatcrew.herokuapp.com/

## Wireframes:

![proposalwireframe]]https://media.git.generalassemb.ly/user/35733/files/6ddda000-c872-11eb-9c9b-930ee121d797

![routingImage](https://media.git.generalassemb.ly/user/35453/files/d3e69c00-ce0b-11eb-8e4e-9405ceda7d2d)

## Technology Used:

Javascript, HTML, CSS
Frontend: React.js, Express, RESTful API
Backend: MongoDB, Mongoose

## Requirements

npm i
Express.js


## Resources:

1. Create react App with : https://github.com/facebook/create-react-appneed

## User Stories:

- I want to look at photos of things I like.
- I want to show off what I like
- I want to make sure that only the images I like show up.
- I want to update tags on images.

## Git Workflow

Feature Branch Workflow

## Planning Directory

A planning/ directory in the root of your repo containing a diagram mapping out your project domain. You are welcome to include other planning documents (e.g., wireframes, user stories).

## Unsolved Problems

- Need to set up so certain actions are only permitted when user ID matches author ID (Delete IMGs & tags).
- Allow all users to add tags to images but ONLY image authors can delete tags (Currently, while other users can NOT delete, it gives error messages).
  EDIT: Resolved, got user ID from the token and set up the user ID/author ID checks for tags and images.
- State occasionally disappears/ doesn't save and thus the image in the gallery disappears.

# Future Plans

## MVP

- Users can view all images, view single images, post new images, update images or delete images. ✅
- Users can signup and login to the website. ✅
- Website displays navigation bar with access to home bar, login screen, and the gallery.
- The galley displays all images.
- Selecting a single image displays an image with details and options to update and delete. ✅
- Access attempts without authentication token will be redirected to the login/signup page. ✅
- Deploy website. ✅

## Bronze:

- Set up an API file for crud commands for code legibility. ✅

## Silver:

1. Setup backend to allow user ID to be checked against author ID. ✅
1. Setup collection of user created images to be displayed. ✅

## Gold:

1.  Voting System( Users can click to vote for images that they like)
