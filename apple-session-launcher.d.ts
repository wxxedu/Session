declare module 'apple-session-launcher' {
    export class Session {
        public setIntent(intent: string): void;
        public getIntent(): string;
        public setDuration(duration: number): void;
        public getDuration(): number;
        public setCategoryId(categoryId: string): void;
        public getCategoryId(): string;
        public setCategoryName(categoryName: string): void;
        public getCategoryName(): string;
        public start(): void;
    }
}