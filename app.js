const people = [
        {
            "img" : "images/17.jpg",
            "name" : "Sammy M Stoll",
            "adress" : "Wellsville, New York(NY), 14895",
            "about" : "Social media junkie. Avid food nerd. Professional travel fan. Tv fanatic. Bacon geek. Web fanatic."    
        },
        {
            "img" : "images/46.jpg",
            "name" : "James C Young",
            "adress" : "2597 Meadowbrook Mall Road",
            "about" : "Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover."    
        },
        {
            "img" : "images/16.jpg",
            "name" : "Deanna I Martin",
            "adress" : "Worthington, Ohio(OH), 43085",
            "about" : "Zombie ninja. Wannabe internet buff. Proud introvert. Bacon expert. Social media trailblazer."    
        },
        {
            "img" : "images/55.jpg",
            "name" : "Bruce K Collins",
            "adress" : "Westhampton Beach, New York(NY), 11978",
            "about" : "Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff."    
        },       
         {
            img : "images/34.jpg",
            name : "Claudette G Hann",
            adress : "Philadelphia, Pennsylvania(PA), 19108",
            about : "Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert."    
        },       
         {
            img : "images/51.jpg",
            name : "Robert Langdon",
            adress : "15 Eagle Way. AL10 8RD",
            about : "Typical gamer. Friendly coffee practitioner. Alcohol buff. Extreme pop cultureaholic."    
        },       
         {
            img : "images/21.jpg",
            name : "Amber C Pantoja",
            adress : "Nashville, Tennessee(TN), 37209",
            about : "Wannabe pop culture expert. Alcohol fanatic. Unapologetic introvert. Subtly charming communicator."    
        },       
         {
            img : "images/23.jpg",
            name : "driana E Hubert",
            adress : "Burlington, North Carolina(NC), 27215",
            about : "Pop culture fanatic. Hardcore analyst. Infuriatingly humble reader. Incurable troublemaker. Unapologetic social media buff. Beer fanatic."    
        },
    ];



    const main = document.querySelector('main');

    people.forEach((person, id) => {

        const card = document.createElement('div');
        card.classList = 'card';

        const structure = `<div class="pic"><img src="${person.img}" alt="${person.name}"></div>
        <div class="text">
            <h3 class="name">${person.name}</h3>
            <p class="adress"><i class="fas fa-map-pin"></i> ${person.adress}</p>
            <p class="about">${person.about}</p>

        </div>
        <div class="logo">
            <p class="getcontact">Get connected</p>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-google"></i>
            <i class="fab fa-instagram"></i>
        </div>`

        card.innerHTML = structure;
        main.appendChild(card);
        
    });