function saveOrphanage(db, orphanage) {
    return db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            openingHours,
            openOnWeekends
        ) VALUES (
            "${orphanage.lat}",
            "${orphanage.lng}",
            "${orphanage.name}",
            "${orphanage.about}",
            "${orphanage.whatsapp}",
            "${orphanage.images}",
            "${orphanage.instructions}",
            "${orphanage.openingHours}",
            "${orphanage.openOnWeekends}"
        );
    `);
};

module.exports = saveOrphanage;