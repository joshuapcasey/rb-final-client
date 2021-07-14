# KYROS - Client
From the greek κύρος meaning
: *status*
: *validity*
: *presitge*
: *authority*

## What is it?
Kyros is a social application designed for phsyicans and the many organizations who work with them. The project goal is not for physicians to be constantly engaging with the app unlike other social media options, but rather to maintain accurate and up-to-date profiles on physicians, their credentials, their association affiliations, and publications. 

### Technologies Incorporated
The app is styled using StyledComponents, Reactstrap, and CSS to create an engaging user experience.
The app implements TypeScript using React under the Node.js framework meaning it was written entirely in Javascript. 

### User Interaction by CRUD
KYROS utilizes 3 tables from the server and lets the user Create, Read, Update, and Delete on all three.

### Data Storage and Transfer
The data is encrypted and pulls from a server deployed with Heroku. You can view the production application here => [Kyros App](https://jpc-kyros-client.herokuapp.com/home) or the source code for the back-end here => [Kyros Server](https://github.com/joshuapcasey/rb-final-server)

### Project Roadmap
---
**KYROS V1**
- User profiles
- User credentials
- User affiliations & publications

**KYROS V2**
- Improve styling and U|X throughout
- Implement a search feature to query physicians and find profiles by speciality, license, or publication
- Add test role for visibility beyond the landing page without requiring sign-in or registration

**KYROS V3**
- Incorporate National Provider Identifier (NPI) to prepopulate physician information and validate users
- Add webcrawler for National Organizations and Associations to maintain database accuracy and add userinfo
- Add client role with dashboards to easily see physicians by specialty, engagement, or prestige

**KYROS V4**
- Add Multi-Factor Authentication (MFA) to improve security
- Add Single-Sign-On Authentication (SSO) to improve security, expedite registration/login, and data entry
- Add comment threads to associations and publications to allow physicians to comment and engage with info

**KYROS V5**
- Add userfeed on profile to display relevant publications by user specialty 
- Incorporate available officers/roles of board or committees memberships by specialty 
- Add direct messaging feature between user profiles
