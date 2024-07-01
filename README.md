<p align="center"> 
  <img src="/assets/stan-logo.png" alt="Stan Logo" width="270px" height="150px">
</p>
<h3 align="center">The simple react & typescript app</h3>  


</br>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#introduction"> ➤ Introduction</a></li>
    <li><a href="#tech-stack"> ➤ Tech stack</a></li>
    <li><a href="#improvement"> ➤ Improvement & Restructure</a></li>
    <li><a href="#deployment"> ➤ Deployment</a></li>
  </ol>
</details>

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- ABOUT THE PROJECT -->
<h2 id="introduction"> :pencil: Introduction</h2>

<p align="justify"> 
Welcome to the Stan coding test app! This application is built using React with TypeScript, and styled with pure CSS following the BEM (Block, Element, Modifier) naming convention to ensure a clean and maintainable codebase.

Key Features:
* Series and Movies List: The app fetches and displays a list of series and movies by calling a provided JSON file.
* Responsive Design: The layout is designed to be user-friendly on both tablets and mobile devices, ensuring a seamless viewing experience across different screen sizes.

Technical Overview:
* React: Utilized for building a component-based architecture, providing a robust and scalable structure.
* TypeScript: Ensures type safety, enhances code quality, and improves developer productivity through better tooling and autocompletion.
* Pure CSS: Employed for styling, keeping the design simple and efficient. The BEM naming strategy is used to maintain clarity and modularity in the CSS.

With this setup, the app is both easy to maintain and extend, providing a solid foundation for further development.
</p>

<p align="center">
  <img src="/assets/demo.png" alt="demo" width="80%" height="80%">        
</p>

### Demo url:
<a href="https://cs2l24-8080.csb.app/" target="_blank">https://cs2l24-8080.csb.app/</a>

### Codesand box(if demo url is not working): 

<a href="https://codesandbox.io/p/github/Daniel54088/stan-coding-test/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clxws2pge00063b6kx28op86s%2522%252C%2522sizes%2522%253A%255B59.39323220536756%252C40.60676779463244%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clxws2pge00023b6khdy6qnqz%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clxws2pge00043b6k06x1iypz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clxws2pge00053b6kf8wpdn88%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B49.93431215071256%252C50.06568784928744%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clxws2pge00023b6khdy6qnqz%2522%253A%257B%2522id%2522%253A%2522clxws2pge00023b6khdy6qnqz%2522%252C%2522activeTabId%2522%253A%2522clxws6mk000gp3b6kozqhqfrh%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clxws2pgd00013b6kxzen3dz8%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Ftasks.json%2522%252C%2522id%2522%253A%2522clxws6mk000gp3b6kozqhqfrh%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clxws2pge00053b6kf8wpdn88%2522%253A%257B%2522id%2522%253A%2522clxws2pge00053b6kf8wpdn88%2522%252C%2522activeTabId%2522%253A%2522cly2j8bwt004z3b6kvxka51kd%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522port%2522%253A8080%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522cly2j8bwt004z3b6kvxka51kd%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clxws2pge00043b6k06x1iypz%2522%253A%257B%2522id%2522%253A%2522clxws2pge00043b6k06x1iypz%2522%252C%2522activeTabId%2522%253A%2522clxwvt2kr00ck3b6ke6sgnjyz%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clxwvt2kr00ck3b6ke6sgnjyz%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" target="_blank">Codesand box</a>

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


<!-- Tech stack -->
<h2 id="tech-stack"> :books: Tech stack</h2>

<!--This project is written in Python programming language. <br>-->
How did you decide on the technical and architectural choices used as part of your solution?
* I want to match the technologies as closely as possible to what Stan uses. <br>
* The tools I am using are ones I am familiar with and have a strong understanding of. <br>

  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) <br>
     * Component-Based : React’s component-based architecture allows for building reusable, modular UI components. This improves code maintainability and reusability.<br>
     * I personally have more experiences on React, so it is comfortable and easier to use for me.
  
  
* I want to focus on <b>code quality</b>, so TypeScript and Jest are essential. <br>

  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) <br>
     * TypeScript provides static typing, which helps catch errors early in the development process, reducing bugs and improving code quality.

  ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) <br>
  * Built-In Assertions and Mocking: Jest comes with built-in assertion and mocking capabilities, making it a comprehensive testing solution without needing additional libraries.
  * Great Integration with React: Jest integrates seamlessly with React, providing features specifically designed for testing React components.

* It should be easy to develop, demo, and deploy. Follwoing tools are good choices. <br>

  ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) <br>
  * Development and Production Modes: Webpack provides different configurations for development and production. It helps me develop and deploy quickly.
  * Asset Management: Webpack can manage and bundle various assets like images, CSS, and fonts.
  
  ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) <br>
  * Babel can let me write modern JavaScript (ES6 and beyond) without worrying about compatibility issues in older browsers
 
  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) <br>
  * React Router is widely used and has strong community support. It is well-documented, regularly maintained, and integrates seamlessly with other React libraries and tools. My current job at Ortto is using it too.

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- App structure -->
<h2 id="improvement"> :fork_and_knife: Improvement & Restructure </h2>

* <h4>Are there any improvements you could make to your submission?</h4>

    * <b>Create a Responsive Solution for All Tablet and Phone Sizes:</b> <br>
Customize the UI to ensure it is fully responsive across all tablet and phone sizes. This will enhance the user experience by providing the best possible display on a wide range of devices.<br>

   * <b>Implement Lazy Loading for Components:</b> <br>
Enable lazy loading for certain components to improve the application's performance. By loading components only when they are needed, we can reduce initial load times and enhance the user experience.<br>


   * <b>Add a Spinner for Image Loading:</b> <br>
Introduce a spinner to display while images are loading. This visual feedback will improve the user experience by indicating that content is being loaded, thus maintaining engagement and reducing perceived wait times.<br>
  
<br><br>

* <h4>What would you do differently if you were allocated more time?</h4>

  * <b>Implement Server-Side Rendering for Components:</b> <br> 
Utilize a server-side rendering solution like Next.js to render some components on the server. This approach will enhance the user experience by reducing load times and improving performance.

  * <b>Integrate a State Management Solution:</b> <br>  
Add a state management solution such as Redux or React Context API, depending on the team's preference. This will simplify state management within the app, making it easier to handle complex state logic and improving overall maintainability.

The app structure may like this:

<img src="/assets/app-structure.png" alt="app strucure" width="70%" height="70%"> <br>


1. Get initial data (entries like series and movies list) from database in sever components and render in server.
2. Shows series and movies list to browser.
3. Hydrate entries data to state management store. (Easy for client component to use)
4. User do some actions and call apis to mutate database.(Like add it to favorites.)
5. Update state store and mutate data in database.

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


<!-- deployment -->
<h2 id="deployment"> :floppy_disk: Deployment</h2>  

### Testing code (Jest)
- Component UI testing, making sure the element render successfully. 
- Unit function testing.

### Deploy (Code sandbox)

<a href="https://cs2l24-8080.csb.app/" target="_blank">https://cs2l24-8080.csb.app/</a>

<a href="https://codesandbox.io/p/github/Daniel54088/stan-coding-test/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clxws2pge00063b6kx28op86s%2522%252C%2522sizes%2522%253A%255B59.39323220536756%252C40.60676779463244%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clxws2pge00023b6khdy6qnqz%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clxws2pge00043b6k06x1iypz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clxws2pge00053b6kf8wpdn88%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B49.93431215071256%252C50.06568784928744%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clxws2pge00023b6khdy6qnqz%2522%253A%257B%2522id%2522%253A%2522clxws2pge00023b6khdy6qnqz%2522%252C%2522activeTabId%2522%253A%2522clxws6mk000gp3b6kozqhqfrh%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clxws2pgd00013b6kxzen3dz8%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Ftasks.json%2522%252C%2522id%2522%253A%2522clxws6mk000gp3b6kozqhqfrh%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clxws2pge00053b6kf8wpdn88%2522%253A%257B%2522id%2522%253A%2522clxws2pge00053b6kf8wpdn88%2522%252C%2522activeTabId%2522%253A%2522cly2j8bwt004z3b6kvxka51kd%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522port%2522%253A8080%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522cly2j8bwt004z3b6kvxka51kd%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clxws2pge00043b6k06x1iypz%2522%253A%257B%2522id%2522%253A%2522clxws2pge00043b6k06x1iypz%2522%252C%2522activeTabId%2522%253A%2522clxwvt2kr00ck3b6ke6sgnjyz%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clxwvt2kr00ck3b6ke6sgnjyz%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" target="_blank">Codesand box</a>



![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)



