# Local Karobar using MERN

<img src="https://drive.google.com/uc?export=view&id=1JlXBj79sCrZMAnbs3ZpvXB-I3x2jhAqI" style="width: 500px; max-width: 100%; height: auto" />

## Introduction
The Local कारोबार website is a dynamic and inclusive platform designed to empower and promote various facets of the local community. With a focus on fostering growth and connectivity, the website serves as a hub for small-scale shops, wholesale and retail businesses, local vendors, and freelancers ranging from artists and skilled traders to essential service providers like milkmen, plumbers, and maids.

## Problem Statement
- The lack of a unified digital platform catering to the needs of small-scale shops, wholesale and retail businesses, local vendors, and freelance individuals, including artists, skilled traders, milkmen, plumbers, maids, and others, has created a significant barrier to their growth and sustainability. <br>

- Many of these local entities struggle to establish a strong online presence, reach a wider customer base, and effectively market their unique products and services. <br>

- Additionally, the absence of a centralized hub hampers collaboration, networking, and knowledge-sharing among these diverse stakeholders. <br>

- To address these challenges and foster the holistic development of local businesses and freelancers, there is a pressing need to design and develop a comprehensive website that serves as a dedicated platform.

## Features

- One owner can upload various karobars and its branches of different categories.
- Owner can plot their karobar on map based on their locality ( currently scoped to Thane ).
- User can explore karobars using their needs, categories and locality.

## Objectives
- Empowerment and Visibility : <br>
Provide a digital platform for small-scale shops, wholesale and retail businesses, local vendors, and freelancers to showcase their products and services. Amplify the visibility of local artisans, artists, skilled traders, and essential service providers like milkmen, plumbers, and maids.

- Community Building:<br>
 Foster a sense of community and solidarity among local businesses, vendors, and freelancers. Establish online and offline networking spaces for knowledge exchange, collaboration, and relationship-building

- Preservation of Tradition:<br>
Celebrate and uphold the cultural and traditional aspects of local businesses and freelancers. Maintain the uniqueness and authenticity of local offerings in the face of globalization.

- Digital Accessibility:<br>
 Bridge the digital divide for businesses that may not have the resources or expertise to establish an online presence. Ensure that local vendors and essential service providers can be found easily by those in need.


## Software used to build

1.	Visual Studio Code  IDE
2.	ReactJS for front-end development
3.	ExpressJS using NodeJS for back-end development
4.	MongoDB for database 

## Dependencies

- Frontend:

```
"dependencies": {
    "@react-spring/parallax": "^9.7.3",
    "@react-spring/web": "^9.7.3",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^29.5.0",
    "@types/node": "^16.11.14",
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "axios": "^1.5.1",
    "clipboard-copy": "^4.0.1",
    "jsonwebtoken": "^9.0.2",
    "leaflet": "^1.9.4",
    "querystring": "^0.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-leaflet": "^4.2.1",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.1.3"
}
```

- Backend:

```
"dependencies": {
    "axios": "^1.5.1",
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-async-handler": "^1.2.0",
    "express-fileupload": "^1.4.1",
    "googleapis": "^126.0.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.5.0",
    "multer": "^1.4.5-lts.1",
    "node-localstorage": "^3.0.5",
    "nodemailer": "^6.9.6",
    "otp-generator": "^4.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
```


## Database Schema (MongoDB)

```
const userSchema = new mongoose.Schema( 
    {
    username: {type: String },
    email: { type: String },
    password: { type: String },
    generatedToken: { type: String },
    resetTokenExpiry: {  type: String  },
    karobars: [
{
        ownerName: {  type: String  },
        orgEmail: {  type: String  },
        category: {  type: String  },
        orgName: {  type: String  },
        no_of_people: {  type: Number  },
        gender: {  type: String  },
        profilephoto: {  type: String  },
        karobarphotos :[
   { type: String }
  ],
        no_of_branches: {  type: Number },
        branchData: [
            {
            brContact: {  type: String  },
            brAddress: {  type: String  },
            lat: {  type: String  },
            long: {  type: String  },
            additionalInfo: [
               {
                tag : {  type: String  },
                description : {  type: String  },
               }
            ]
        }]
    }]
},)
```


## Implementation

Home:

<img src="https://drive.google.com/uc?export=view&id=1JlXBj79sCrZMAnbs3ZpvXB-I3x2jhAqI" style="width: 600px; max-width: 100%; height: auto" />

<img src="https://drive.google.com/uc?export=view&id=10FXo-DM-MDubMNcBUAkb_wWYcdb-G37a" style="width: 600px; max-width: 100%; height: auto" />

Login:

<img src="https://drive.google.com/uc?export=view&id=1YIVSHjf79Ga5PJmkBFKjVcCRdglaRnrg" style="width: 600px; max-width: 100%; height: auto" />

Upload:

<img src="https://drive.google.com/uc?export=view&id=1JnwcTo2wWt6JmqouiwCiUikbUOZg2bMn" style="width: 600px; max-width: 100%; height: auto" />

<img src="https://drive.google.com/uc?export=view&id=1k1qnrnOuBQZMBzFTrmgAg8C02kxzRMVg" style="width: 600px; max-width: 100%; height: auto" />

Maps:

<img src="https://drive.google.com/uc?export=view&id=1cig4HwuhX9ALPcZ2qiaRxieoJzFFy0Cq" style="width: 600px; max-width: 100%; height: auto" />

Explore:

<img src="https://drive.google.com/uc?export=view&id=1_cg7e23Xv8Y2YS3JRvoiHno1AJTy55Sq" style="width: 600px; max-width: 100%; height: auto" />


## Future Scope
- Turn the website into an android-based application for more user-friendly interface.

- Subscription Models: Implement subscription-based premium features for service providers, such as enhanced visibility or marketing tools, to generate revenue and incentivize participation.

- Booking and Payment Systems: Enhance your platform with advanced booking, scheduling, and secure payment systems to streamline the service booking process.

- Partnerships: Collaborate with local businesses, chambers of commerce, or government agencies to promote your platform and create exclusive partnerships or promotions.

- Data Analytics: Use data analytics to gather insights into user behavior, preferences, and trends, assisting about platform improvements and marketing strategies using AI models

- Geographical Expansion: Consider expanding your platform to serve neighboring communities or regions, increasing the reach and relevance of your website. 

## Contributers

[Tufayl Dalvi](https://github.com/Tufayl18)

## Contact

Aditi Narkar
- Gmail - aditinarkar2004@gmail.com
- Instagram - [@narkar08](https://www.instagram.com/narkar08/)
- LinkedIn - [Aditi Narkar](https://www.linkedin.com/in/aditi-narkar-0936a31b1/)
- Github - [AditiNarkar](https://github.com/AditiNarkar)
