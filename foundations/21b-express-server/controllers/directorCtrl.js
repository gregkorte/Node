'use strict';

const { getAll, getOne } = require('../models/Director')

module.exports.getDirectors = (req, res, next) => {
    getAll()
    .then((directors) => {
        res.status(200).json(directors);
    })
    .catch((err) => {
        next(err);
    });
};

module.exports.getOneDirector = ({params: {id}}, res, next) => {
    getOne(id)
    .then((director) => {
        res.status(200).json(director);
    })
    .catch((err) => {
        next(err);
    });
};