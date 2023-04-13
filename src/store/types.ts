export interface AuthState {
  user: string | null;
  loading: boolean;
  error: string | null;
}

export type AuthAction =
  | { type: 'auth/loginRequest' }
  | { type: 'auth/loginSuccess'; payload: string }
  | { type: 'auth/loginFailure'; payload: string }
  | { type: 'auth/logout' };