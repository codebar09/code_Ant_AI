import { api } from './api';

export interface User {
  id: number;
  email: string;
  username: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const { data } = await api.get('/users', { params: { email, password } });
    if (data.length === 0) {
      throw new Error('Invalid credentials');
    }
    return {
      user: data[0],
      token: 'mock-jwt-token',
    };
  },

  async signup(username: string, email: string, password: string): Promise<AuthResponse> {
    // Check if user exists
    const existingUser = await api.get('/users', { params: { email } });
    if (existingUser.data.length > 0) {
      throw new Error('User already exists');
    }

    // Create new user
    const { data } = await api.post('/users', {
      id: Date.now(), // Simple ID generation for demo
      username,
      email,
      password,
    });

    return {
      user: data,
      token: 'mock-jwt-token',
    };
  },
};