import express from "express";

const routeViews = express.Router();

routeViews.get("/", async (request, response) => {
	response.render("home");
});

export default routeViews;
