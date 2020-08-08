const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8991457985",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas jápassaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ],

    },
    {
        name: "Danieli Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8991457985",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas jápassaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            1
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ],
    },
    {
        name: "Maiky Brito",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8991457985",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas jápassaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            1
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ],
    }
]


const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition];
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(':');
    return Number((hour * 60) + minutes);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}