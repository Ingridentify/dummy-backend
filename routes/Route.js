import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    message: "Hello world!",
    endpoints: Route.routes,
  });
});

export default class Route {
  static #new({ description, path, method, body, query, headers, response }) {
    Route.#routes.push({
      description,
      path,
      method,
      body,
      query,
      headers,
      response,
    });
  }

  static get({ description, path, callback, body, query, headers, response }) {
    Route.#new({
      description,
      path,
      method: Route.#method.GET,
      body,
      query,
      headers,
      response,
    });

    return Route.router.get(path, callback);
  }

  static post({ description, path, callback, body, query, headers, response }) {
    Route.#new({
      description,
      path,
      method: Route.#method.POST,
      body,
      query,
      headers,
      response,
    });

    return Route.router.post(path, callback);
  }

  static #routes = [];
  static get routes() {
    return Route.#routes;
  }

  static #method = {
    GET: "get",
    POST: "post",
  };

  static get router() {
    return router;
  }
}
