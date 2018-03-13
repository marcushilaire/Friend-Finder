var friends = [
    {
        name:"Ahmed",
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores:[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
    },
    {
        name: "Katsuki Bakugo",
       photo: "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/1/11/Katsuki_Bakugou_School_Uniform_Full_Body.png/revision/latest/scale-to-width-down/196?cb=20160112221614",
        scores:[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            ]
    },
    {
        name: "Izuku Midoriya",
        photo: "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/4/42/Izuku_Midoriya_School_Uniform_Full_Body.png/revision/latest/scale-to-width-down/139?cb=20161229040255",
        scores:[
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
        ]
    },
    {
        name: "Toshinori Yagi",
        photo: "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/55/All_Might_Hero_Form_Full_Body.png/revision/latest/scale-to-width-down/311?cb=20160116011411",
        scores:[
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            ]
        },
]
var newestFriend = friends[friends.length-1]
// console.log(newestFriend)
module.exports ={
    friends: friends
}
// console.log(__dirname)
