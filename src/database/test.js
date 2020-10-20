const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    /*
     await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.222633",
            "-49.6555874",
            "Lar dos Meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "99999999",
            "https://images.unsplash.com/photo-1601564267675-0377e2501d4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar",
            "Horário de visitas Das 08h até 18h",
            "0"
        );

    `)

 */
 

    await saveOrphanage(db,{
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar de amor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9999-9999",
        images:[
            "https://images.unsplash.com/photo-1601564267675-0377e2501d4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 08h até 18h",
        open_on_weekends: "0"

    }) 


     //consultar dados na tabela
     const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)  

    
    //consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2"')
    console.log(orphanage)
/*
    //deletar dado da tabela
    console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));
    console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"));
    console.log(await db.run("DELETE FROM orphanages WHERE id = '7'")); */

})