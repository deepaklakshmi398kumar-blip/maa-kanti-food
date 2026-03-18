// Database utilities
import sqlite3 from 'sqlite3';
import path from 'path';

let db: sqlite3.Database;

export function getDatabase(): sqlite3.Database {
  if (!db) {
    const dbPath = path.join(process.cwd(), 'data', 'db.sqlite');
    db = new sqlite3.Database(dbPath);
  }
  return db;
}

export function runQuery<T>(
  query: string,
  params: any[] = []
): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const database = getDatabase();
    database.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows as T[]);
    });
  });
}

export function runQuerySingle<T>(
  query: string,
  params: any[] = []
): Promise<T | null> {
  return new Promise((resolve, reject) => {
    const database = getDatabase();
    database.get(query, params, (err, row) => {
      if (err) reject(err);
      else resolve((row as T) || null);
    });
  });
}

export function runExecute(query: string, params: any[] = []): Promise<void> {
  return new Promise((resolve, reject) => {
    const database = getDatabase();
    database.run(query, params, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}
