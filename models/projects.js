function Project(name, technologies, githubLink, herokuLink, imageUrl, desc) {
    this.name = name;
    this.technologies = technologies;
    this.githubLink = githubLink;
    this.herokuLink = herokuLink;
    this.imageUrl = imageUrl;
    this.desc = desc;
}

var projects = [
  new Project("FitKeeper", ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'], "https://github.com/asaloff/fitkeeper", "https://fitkeeper.herokuapp.com", "https://s3.amazonaws.com/freecodecamp-asaloff/fitkeeper-screenshot.png", "Simple Workout and Exercise tracker app. Made as a project for Tealeaf Academy - currently known as Launch School."),
  new Project("ToDo", ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'], 'https://github.com/asaloff/todo', 'https://todo-ads.herokuapp.com', 'https://s3.amazonaws.com/freecodecamp-asaloff/todo-screenshot.png', 'Small ToDo application for your daily tasks. Made as a project for Tealeaf Academy - currently known as Launch School.'),
  new Project("Blackjack", ['HTML', 'CSS', 'Bootstrap', 'Ruby', 'Sinatra'], "https://github.com/asaloff/blackjack_webapp", "https://asaloff-tl-blackjack.herokuapp.com", "https://s3.amazonaws.com/freecodecamp-asaloff/blackjack-screenshot.png", "Blackjack app made using Sinatra. Project for Tealeaf Academy - currently known as Launch School.")
];

module.exports = {
  Project: Project,
  projects: projects
};
