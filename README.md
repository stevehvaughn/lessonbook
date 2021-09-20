<p align="center">
  <a href="https://lessonbook.herokuapp.com">
    <img src="https://user-images.githubusercontent.com/82396393/134022320-2611bf4f-5e09-4086-bba2-41cfa0c2dccf.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Lessonbook</h3>

  <p align="center">
    An App for private music teachers and studio professors to manage their students' progress. 
    <br />
    <br />
    <a href="https://www.loom.com/share/662b7191451e411b9694e2e89d1c2301">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![lessonbook-screenshot](https://user-images.githubusercontent.com/82396393/134024872-161e9557-9c64-4506-8592-679519c24d1b.png)

The idea for this app came to me while teaching lessons to my students at the University of Northern Colorado. I always keep a notebook to track my students' progress in lessons including their assignments, grades, and repertoire and I thought that having a way to manage my studio digitally would be incredibly useful. Lessonbook is a digital tool do just that, and it can be used by both teachers and students!

Features of Lessonbook:
* For teachers, having a single space dedicated to tracking your students lessons is incredibly time saving! 
* For students, you can keep a practice log to make sure you are working on the materials each day for your next lesson! 
* Students and Teachers can both leave comments on an individual lesson to ask questions, clarify an assignment, or leave an encouraging note! 

### Built With

* [Ruby on Rails](https://rubyonrails.org/)
* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)

<!-- GETTING STARTED -->
## Getting Started

This project is deployed on Heroku and can be visited at https://lessonbook.herokuapp.com
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* ruby<br/>
  You might already have ruby installed, run this to check 
  ```sh
  ruby -v
  ```
  If you don't have ruby, check this [documentation](https://www.ruby-lang.org/en/documentation/installation/#rvm) for how to install it

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/stevehvaughn/lessonbook.git
   ```
2. Install Gemfiles
   ```sh
   bundle install
   ```
4. Install NPM packages
   ```sh
   npm install --prefix client
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Creating an Account
When you click the "Sign Up" button in the Navbar you are presented with a sign up form. When prompted with the "Student or Teacher" question if you choose Teacher the website will create your account as a teacher. If you choose Student you are promped with more questions so the database knows who your teacher is and additional information only necessary for students. 
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134033251-590e2d79-c13a-4fa9-8b1e-be9419bdcc35.gif"/>
</p>

### Teachers
#### Creating Lessons
While you are in a student with a lesson, click the "New Lesson" button. Here you can fill out information such as repertoire, objective, and assignment for the student to view. Be sure to select your student in the drop down menu before creating the lesson as well.  
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134034271-537b8541-af36-4fad-beec-5a8c5bcc803a.gif"/>
</p>

#### Viewing Lessons
You can view lessons that you have created for your students by clicking the "Show Lessons" button. Hover over a lesson to see information about it, and click it to see a detailed view of that lesson.
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134031966-d53584a9-2469-4fc5-821b-f0e1ec61afb8.gif"/>
</p>

<!-- ROADMAP -->
## Roadmap

In the coming weeks I plan on implementing the student-side features of this application. I am aiming for a launch date of January 2022 to use the App with the students in my current studio. 

<!-- CONTRIBUTING -->
## Contributing

Are you a private lesson teacher who also codes? Do you want to contribute to this open-source project with your own ideas? Are you interested in this app and want to make it even better? Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

Steve Vaughn - [Twitter](https://twitter.com/stevehvaughn) | [LinkedIn](https://www.linkedin.com/in/stevehvaughn/) | [Email](steve.h.vaughn@gmail.com) | [Medium](https://stevehvaughn.medium.com/)

Project Link: [https://github.com/stevehvaughn/lessonbook](https://github.com/stevehvaughn/lessonbook)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Free Vector Musical Notes Pattern](https://www.freevector.com/musical-notes-pattern#)

