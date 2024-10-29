<div align='center'>
  <h1><a href="https://iganza-roy.github.io/Litnerd_letters-about/">KOPERO STUDIOS </a></h1>
  <h2>We capture every moment in your life wherever,
whenever and however you need it in just few steps.</h2>
  <p>
    This is a full-stack booking platform built using React (frontend) and Django (backend), enabling users to easily book services with experienced photographers and videographers. The platform offers a wide range of services and allows clients to connect directly with professionals in a streamlined and user-friendly manner.
  </p>
  <img src="https://github.com/omollpeter/KoPeRo-Studios-Frontend/blob/main/src/assets/cover-photo.png"style="border-radius: 10px; box-shadow: 0 5px 20px rgba(43, 0, 56, 0.559);"/>
</div>

<a id="readme-top"></a>

  <p align="center">
    <br />
    <a href="https://github.com/KoPeRo-studios"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/KoPeRo-studios">View Demo</a>
    ·
    <a href="https://github.com/KoPeRo-studios">Report Bug</a>
    ·
    <a href="https://github.com/KoPeRo-studios">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Features of The Project
- **User and Crew Profiles:** Users and crew members have distinct profiles, each with tailored navigation and features.
- **Service Selection and Booking:** Clients can view available services and book appointments with professionals, filtering by date and availability.
- **Role-Based Navigation:** Custom dashboards and navigation bars for crew and users.
- **Authentication:** Users and crew members can log in and register with unique role-based access, using token-based authentication.
- **Appointment Management:** Both clients and crew members can manage appointments with status tracking, such as booked or completed.
- **Profile and Image Upload:** Users can update profile pictures directly in the PUT request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Project Structure
The project is organized into two main directories:

[![React][React.js]][React-url] 
- **Frontend:** Built with React, using Vite as the bundler.
- **Backend:** Developed with Django, handling API endpoints, authentication, and data management for bookings and profiles. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

## Installation
Ensure you have Node.js and npm installed for frontend setup, and Python for backend setup. Clone both repositories for a complete setup.

#### 1. Clone the Repositories
Clone this repository and the backend server repository.
```sh
git clone <frontend-repo-url>
git clone <backend-repo-url>
```

#### 2. Frontend Setup
1. Navigate to the frontend directory.
   ```sh
   cd KoPeRo-Studios-Frontend
   ```
2, Install Dependancies
```sh
npm install
```
3. Run the development server.
```sh
   npm run dev
```

#### 3. Backend Setup
For backend setup and API details, please refer to the backend server repository link provided here: [kopero backend Repo](https://github.com/omollpeter/kopero-studios-server). Follow the instructions in the backend repository README for database migrations, environment configurations, and server startup.

### Running the Project
1. Ensure both frontend and backend servers are running. The frontend will likely run on localhost:5173 (default for Vite), while the Django backend server should run on  ```localhost:8000```.
2. To connect the frontend to the backend, ensure that CORS settings in Django are configured to allow requests from ```http://localhost:5173```.
3. Update any environment variables as needed for your setup.

### API and Backend Integration
The Django backend provides RESTful endpoints for user registration, authentication, profile management, service listings, and booking management.
Endpoints:
- User and Crew Authentication: /api/v1/auth/
- Profile Management: /api/v1/profile/
- Service Listings: /api/v1/services/
- Bookings: /api/v1/bookings/
For further API details and request examples, refer to the backend documentation in [kopero backend Repo](https://github.com/omollpeter/kopero-studios-server).

## Usage
1. **Register/Login** as a user or crew member.
2. **Browse Services:** Users can view the list of services offered by photographers and videographers.
3. **Book an Appointment:** Select an available crew member, choose a service, and complete the booking process.
4. **Manage Appointments:** Track status, reschedule, or cancel appointments through the user or crew dashboard.


## Dependencies
The project relies on several key packages:

- **React:** Frontend framework for building user interfaces.
- **Vite:** Bundler for fast project setup and optimized builds.
- **Django:** Backend framework for handling API requests, user management, and data persistence.
- **Axios:** For making HTTP requests to the backend API.
- **JWT-Decode:** For token-based authentication.
- **Toast Notifications:** Used for alerting users with messages and errors.
- Other packages and dependencies are listed in the ```package.json``` files in their respective repositories.


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:
<img src='https://avatars.githubusercontent.com/u/132392673?v=4' style='width: 40px; border-radius: 100%; '/>
<img src='https://avatars.githubusercontent.com/u/109495506?v=4 ' style='width: 40px; border-radius: 100%; '/>
<img src='https://avatars.githubusercontent.com/u/123968710?v=4' style='width: 40px; border-radius: 100%;'/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Roy Kibata - [@Iganzaroy](https://twitter.com/IganzaRoy) - iganzaroy55@gmail.com
Peter Omollo - [OmolloPeter](https://twitter.com/Peteromollo) - peterOmollo21@gmail.com
Matthew Koech -  [Matthewk](https://twitter.com/matthewkoech) - matthewkoech55@gmail.com

Project Link: [https://github.com/omollpeter/KoPeRo-studios](https://github.com/omollpeter/kopero-studios)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/


