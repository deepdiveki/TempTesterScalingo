"use client";

import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function TestDbPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/test-db');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main>
      <h1>Test Database Connection</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
