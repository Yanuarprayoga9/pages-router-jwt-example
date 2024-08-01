// src/types/User.ts

export interface UserType {
    id: number;
    nickname: string;
    email: string;
    created_at: string; // Gunakan `Date` jika ingin mengelola objek Date di TypeScript
    updated_at: string; // Gunakan `Date` jika ingin mengelola objek Date di TypeScript
  }
  