
import app from "./app.ts";
import connectDB from "./config/database.config.ts";
import { initializeKnowledgeBase } from "./services/rag.service.ts";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // connect MongoDB
    await connectDB();
    console.log("MongoDB Connected");

    // initialize RAG knowledge base
    await initializeKnowledgeBase();
    console.log("Knowledge base ready");

    // start server
    app.listen(PORT, () => {
      console.log(`EduReach Server is running!`);
      console.log('URL: http://https://edureach-backend.onrender.com');
    });
  } catch (error) {
    console.error("Server startup error:", error);
    process.exit(1);
  }
}

startServer();