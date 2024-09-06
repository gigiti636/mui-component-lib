import { UserConfigExport } from 'vite';

declare const app: () => Promise<UserConfigExport>;
export default app;
