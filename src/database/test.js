const db = require('./db');
//const createProffy = require('./createProffy');

db.then(async (db) => {

    proffyValue = {
        name: 'Diego Fernandes',
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
        whatsapp: '1827319283',
        bio: 'Instrutor de Educação Física',
    }

    classValue = {
        subject: 2,
        cost: 20,
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues});

    // //return all proffys
    // const selectedProffys = await db.all("SELECT * FROM proffy");

    // //return one proffy and his classes
    // const selectClassesAndProffys = await db.all(`
    //     SELECT classes.*, proffy.*
    //     FROM proffy
    //     JOIN classes ON (classes.proffy_id = proffy.id)
    //     WHERE classes.proffy_id = 1;
    // `);

    // //return the proffy classes schedules
    // const selectClassesSchedules = await db.all(`
    //     SELECT class_schedule.*
    //     FROM class_schedule
    //     WHERE class_schedule.class_id = 1
    //     AND class_schedule.weekday = "0"
    //     AND class_schedule.time_from <= "520"
    //     AND class_schedule.time_to > "1300" 
    // `);
})