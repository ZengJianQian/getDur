import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    exposedHeaders: ["X-Video-Duration"], // 允许客户端读取自定义头
  })
);

app.post("/get-duration", (req, res) => {
  const { duration } = req.body;
  res.setHeader("X-Video-Duration", duration); // 设置自定义响应头
  res.json({ code: 200, message: "时长已记录" });
});

export default app;
