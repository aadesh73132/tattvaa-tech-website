import mongoose from 'mongoose';

let cachedConnection = null;

export const connectDB = async () => {
  // If already connected, reuse existing connection immediately (0ms overhead)
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  if (cachedConnection) {
    return cachedConnection;
  }

  const primaryUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tattva_tech_db';

  try {
    const conn = await mongoose.connect(primaryUri, {
      serverSelectionTimeoutMS: 8000,
    });
    cachedConnection = conn;
    console.log(`[MongoDB Connected]: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`[MongoDB Connection Error]: Could not connect to primary database.`);
    console.error(`Reason: ${error.message}`);

    // Fallback to local MongoDB only when running locally (not in production / Vercel cloud)
    if (process.env.NODE_ENV !== 'production' && (primaryUri.includes('mongodb+srv://') || !primaryUri.includes('127.0.0.1'))) {
      console.log('[Notice]: Attempting fallback to local MongoDB (mongodb://127.0.0.1:27017/tattva_tech_db)...');
      try {
        const localConn = await mongoose.connect('mongodb://127.0.0.1:27017/tattva_tech_db', {
          serverSelectionTimeoutMS: 4000,
        });
        cachedConnection = localConn;
        console.log(`[MongoDB Connected via Local Fallback]: ${localConn.connection.host}/${localConn.connection.name}`);
        return localConn;
      } catch (localErr) {
        console.error(`[Local MongoDB Fallback Error]: ${localErr.message}`);
      }
    }

    throw error;
  }
};
