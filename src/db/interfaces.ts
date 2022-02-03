export interface User {
    id: number;
    username: string;
    password: string;
}

export interface ToolRemote {
    id: number;
    json: string;
}

export interface Tool {
    type: string;
    parts: Array<Part>;
}

export interface Part {
    material: string;
}
