const { success, error } = require("../utils/response.util");
const math = require("../services/math.service");
const { askAI } = require("../services/ai.service");
const { EMAIL } = require("../config/env");

async function handleBFHL(req, res) {
  try {
    const body = req.body;
    const keys = Object.keys(body);

    if (keys.length !== 1) {
      return error(res, 400, "Exactly one key is required");
    }

    const key = keys[0];
    const value = body[key];

    const handlers = {
      fibonacci: () => {
        if (!Number.isInteger(value)) throw "Invalid fibonacci input";
        return math.fibonacci(value);
      },

      prime: () => {
        if (!Array.isArray(value)) throw "Invalid prime input";
        return value.filter(math.isPrime);
      },

      lcm: () => {
        if (!Array.isArray(value)) throw "Invalid lcm input";
        return math.lcm(value);
      },

      hcf: () => {
        if (!Array.isArray(value)) throw "Invalid hcf input";
        return math.hcf(value);
      },

      AI: async () => {
        if (typeof value !== "string") throw "Invalid AI input";
        return await askAI(value);
      }
    };

    if (!handlers[key]) {
      return error(res, 400, "Invalid key");
    }

    const data = await handlers[key]();
    return success(res, EMAIL, data);

  } catch (err) {
    return error(res, 400, err || "Internal Server Error");
  }
}

module.exports = { handleBFHL };
