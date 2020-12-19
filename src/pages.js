const database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
    index(req, res) {
        return res.render('index');
    },

    async orphanage(req, res) {
        const id = req.query.id;

        try {
            const db = await database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id="${id}"`);
            const orphanage = results[0];

            orphanage.images = orphanage.images.split(',');
            orphanage.firstImage = orphanage.images[0];

            if(orphanage.openOnWeekends == "0"){
                orphanage.openOnWeekends = false;
            } else {
                orphanage.openOnWeekends = true;
            }

            return res.render('orphanage', {orphanage});            
        } catch (error) {
            console.log(error);

            return res.send('Erro no banco de dados!');
        }
    },

    async orphanages(req, res) {
        try {
            const db = await database;
            const orphanages = await db.all('SELECT * FROM orphanages');

            return res.render('orphanages', {orphanages});
        } catch (error) {
            console.log(error);
            
            return res.send('Erro no banco de dados!');
        }
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage');
    },

    async saveOrphanage(req, res) {
        const fields = req.body;

        if(Object.values(fields)) {
            return res.send('Todos os campos devem ser preenchidos!');
        }

        // salvar um orfanato
        try {
            const db = await database
            await saveOrphanage(db,{
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                openingHours: fields.openingHours,
                openOnWeekends: fields.openOnWeekends
            });

            // redirecionamento
            return res.redirect('/orphanages');
        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados!');
        }
    }
}