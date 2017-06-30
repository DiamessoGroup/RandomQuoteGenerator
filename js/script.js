var app = angular.module("quoteApp", ['ngAnimate']);

app.controller("quoteCtrl", function ($scope) {
    $scope.quotes = [{
            "index": 100,
            "quote": "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
            "author": "John Keats"
	},
        {
            "index": 99,
            "quote": "But man is not made for defeat.A man can be destroyed but not defeated.",
            "author": "Ernest Hemingway"
	},
        {
            "index": 98,
            "quote": "When you reach the end of your rope, tie a knot in it and hang on.",
            "author": "Franklin D. Roosevelt"
	},
        {
            "index": 97,
            "quote": "There is nothing permanent except change.",
            "author": "Heraclitus"
	},
        {
            "index": 96,
            "quote": "You cannot shake hands with a clenched fist.",
            "author": "Indira Gandhi"
	},
        {
            "index": 95,
            "quote": "Let us sacrifice our today so that our children can have a better tomorrow.",
            "author": "A.P.J.Abdul Kalam"
	},
        {
            "index": 94,
            "quote": "It is better to be feared than loved, if you cannot be both.",
            "author": "Niccolo Machiavelli"
	},
        {
            "index": 93,
            "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
            "author": "Amelia Earhart"
	},
        {
            "index": 92,
            "quote": "Do not mind anything that anyone tells you about anyone else .Judge everyone and everything for yourself.",
            "author": "Henry James"
	},
        {
            "index": 91,
            "quote": "Learning never exhausts the mind.",
            "author": "Leonardo da Vinci"
	},
        {
            "index": 90,
            "quote": "There is no charm equal to tenderness of heart.",
            "author": "Jane Austen"
	},
        {
            "index": 89,
            "quote": "All that we see or seem is but a dream within a dream.",
            "author": "Edgar Allan Poe"
	},
        {
            "index": 88,
            "quote": "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.",
            "author": "Francis of Assisi"
	},
        {
            "index": 87,
            "quote": "The only journey is the one within.",
            "author": "Rainer Maria Rilke"
	},
        {
            "index": 86,
            "quote": "Good judgment comes from experience, and a lot of that comes from bad judgment.",
            "author": "Will Rogers"
	},
        {
            "index": 85,
            "quote": "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.",
            "author": "William Blake"
	},
        {
            "index": 84,
            "quote": "Life without love is like a tree without blossoms or fruit.",
            "author": "Khalil Gibran"
	},
        {
            "index": 83,
            "quote": "No act of kindness, no matter how small, is ever wasted.",
            "author": "Aesop"
	},
        {
            "index": 82,
            "quote": "Love cures people - both the ones who give it and the ones who receive it.",
            "author": "Karl A.Menninger"
	},
        {
            "index": 81,
            "quote": "Work like you don 't need the money. Love like you've never been hurt.Dance like nobody 's watching.",
            "author": "Satchel Paige"
	},
        {
            "index": 80,
            "quote": "It is far better to be alone, than to be in bad company.",
            "author": "George Washington"
	},
        {
            "index": 79,
            "quote": "If you cannot do great things, do small things in a great way.",
            "author": "Napoleon Hill"
	},
        {
            "index": 78,
            "quote": "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities",
            "author": "Thomas Carlyle"
	},
        {
            "index": 77,
            "quote": "Independence is happiness.",
            "author": "Susan B. Anthony"
	},
        {
            "index": 76,
            "quote": "The supreme art of war is to subdue the enemy without fighting.",
            "author": "Sun Tzu"
	},
        {
            "index": 75,
            "quote": "Keep your face always toward the sunshine - and shadows will fall behind you.",
            "author": "Walt Whitman"
	}
];
    $scope.colorB = [
    "#E53935",
    "#D81B60",
    "#8E24AA",
    "#5E35B1",
    "#3949AB",
    "#1976D2",
    "#0288D1",
    "#0097A7",
    "#00796B",
    "#388E3C",
    "#558B2F",
    "#9E9D24",
    "#F9A825",
    "#FF8F00",
    "#EF6C00",
    "#BF360C",
    "#3E2723",
    "#212121",
    "#263238"
  ];
    $scope.colorI = $scope.colorB[0];
    $scope.quoteQ = $scope.quotes[0].quote;
    $scope.authorQ = $scope.quotes[0].author;
    $scope.randomQuote = function (list) {
        var indy = Math.round(Math.random() * (list.length - 1));
        $scope.authorQ = (list[indy].author);
        $scope.quoteQ = (list[indy].quote);
        $scope.colorI = list[indy];
    };

    $scope.randomColor = function (list) {
        var indyc = Math.round(Math.random() * (list.length - 1));
        $scope.colorI = list[indy];
    };
});

colorB = [
"#7CB342",
"#C0CA33",
"#FDD835",
"#FFB300",
"#FB8C00",
"#F4511E",
"#6D4C41",
"#757575",
"#546E7A",
"#C62828",
"#AD1457",
"#6A1B9A",
"#4527A0",
"#283593",
"#1565C0",
"#0277BD",
"#00838F",
"#00695C",
"#2E7D32",
"#558B2F",
"#9E9D24",
"#F9A825",
"#FF8F00",
"#EF6C00",
"#D84315",
"#4E342E",
"#424242",
"#37474F"
];

$(document).ready(function () {

    $(document).on("click", '#newQuoteButton', function () {
        var i = Math.round(Math.random() * (colorB.length - 1));
        $('body').css("background", colorB[i]);
        $('#quoteq').css("color", colorB[i]);
        //$('#authorq').css("color", colorB[i]);
        //$('#newQuoteButton').css("background", colorB[i]);
        //$('#tweet').css("background", colorB[i]);
        $("#main").fadeOut(25, function () {
            // $(this).html('html');
            $(this).fadeIn("slow");
        });


    });
});
