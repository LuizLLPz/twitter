export type Post = {
    id: number;
    title: string;
    imageUri: string;
    author: {
        id: number;
        name: string;
        username: string;
    }
}
