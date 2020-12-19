const database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

database.then(async function(db) {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "11912345678",
        images: [
            "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597095556745-7bcd893840ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1576024267168-6be5e4eabcf4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597730945481-f35a5cf39021?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597095540293-b184e2b0d044?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1580673786010-4cde024ea5b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        openingHours: "Horário de visitas das 18 até 8h",
        openOnWeekends: "0"
    });

    // consultar dados da tabela
    const selectedOrphanages = await db.all('SELECT * FROM orphanages');
    console.log(selectedOrphanages);

    // // consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="1"');
    console.log(orphanage);

    // deletar dado da tabela
    // console.log(await db.run('DELETE FROM orphanages WHERE id="4"'));
    // console.log(await db.run('DELETE FROM orphanages WHERE id="5"'));
});