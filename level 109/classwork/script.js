
// მოახდინეთ ამ ობიექტის სრული დესტრუქცია და მიღეეთ ცვლადები პირველი აითემის ლეველები ცალცალკე, მეორე აითემის ლეველები ცალცალკე, მეორე აითემში თითოეული სტუდენტის სახელი და გვარი და ასევე ამ სტუდენტის თითოეული ქულა
const obj = {
    arr: [
        {
            level: [10, 50, 100],
        },


        {
            level: [20, 40, 60],
            students: [
                {
                    name: "jemala",
                    surname: "barkalaia",
                    score: [8, 8, 10],
                },
                {
                    name: "jumbera",
                    surname: "lamazi",
                    score: [10, 7, 9],
                },
            ],
        },

    ],
};


const {
    arr: [
        {
            level: [item1, item2, item3],
        },

        {
            level: [first, second, third],
            students: [
                {
                    name: firstname,
                    surname: firstsurname,
                    score: [i, k, l] = firstscore,
                },
                {
                    name: secondname,
                    surname: secondsurname,
                    score: [o, p, g] = secodscore
                },
            ],
        },
    ],
} = obj





