"use strict";Object.defineProperty(exports, "__esModule", {value: true});const Redis = require("ioredis");
const redis = new Redis();
const redisData = redis.get("6446c191c386c40494bd24dd")
redisData.then((res)=> {console.log(res)})



exports. default = redis;
