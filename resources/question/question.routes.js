const Router = require("express");
const crud = require("../../config/crud");
const Question = require("./question.model");
const controller = require("./question.controller");

const router = Router();

//api/Questions

router
    .route("/")
    .get(
        crud.controller(Question).getMany
    );

router
    .route("/:id")
    .get(
        crud.controller(Question).getOneById
    );

module.exports = router;