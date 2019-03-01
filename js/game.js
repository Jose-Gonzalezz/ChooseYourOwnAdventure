// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Where shall you go for Date Night?",
            choices: [
                {
                    text: "Go to the Movies",
                    nextLevel: "Movies",
                },

                {
                    text: "Romantic Dinner",
                    nextLevel: "Resturants",
                },
            ]
        },

        Movies: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "What Movie shall you watch?",
            choices: [
                {
                    text: "Funny Movie",
                    nextLevel: "Laugh",
                },
                 {
                    text: "Documentary",
                    nextLevel: "Boring",
                },
            ]
        },

        Resturant: {
            message: "Where shall you go?",
            choices: [
                {
                    text: "McDanalds",
                    nextLevel: "Date Successful",
                },
                 {
                    text: "Olive Garden",
                    nextLevel: "Enjoy Meal",
                },
            ]
        },
 Laugh: {
            message: "You and your date laughed too much and got kicked out",
            choices: [
                {
                    text: "Date Night Ruined",
                    nextLevel: "Start",
                },
            ]
},
