angular.module("portfolio").service("projectsService", function () {
  this.myProjects =[
    {
      name: "ReyLink",
      description: "This application will allow users to create teams of people and hold conference utilizing both text and video. This project utilize WebRTC, Socket.IO, React, and Electron, however the MVP will be a minimalistic application which allows the user to sign up, create and join teams, invite users to their team, and communicate to those teams with text messages. Additional functionality may be added as time and technical feasibility permits.",
      url: "https://reylink.com/",
      domain: "reylink.com",
      git: "https://github.com/Venom-Hunters/Connection",
      show: false
    },{
      name: "Note App",
      description: "An app that allows you to record and store information all in one place. This MEAN (mongo, express, angular, and node) app, Incorporing a third party libraries like code mirror, summernote to inprove the way the data is visualize for the user, allowing an extra functionality.After this the data its process allowing the user to save collection of data, and visualize when need it.",
      domain: "",
      url: "",
      git: "https://github.com/ReyPena/notes-personal-project",
      show: false
    },{
      name: "Card Game",
      description: "A simple card game, where the purpose is matching numbers in the less moves possible. Im using jquery creating the engine of the game, the content and some effects, css to style it and creating a good user experience, and html been the bones of the to create a fun match game.",
      domain: "Card Match",
      url: "http://card-match.herokuapp.com/",
      git: "https://github.com/ReyPena/Jquery-memory-game",
      show: false
    }
  ];
});
