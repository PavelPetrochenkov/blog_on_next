export interface IPost {
    id: number;
    title: string;
    body: string;
    creator?: string;
    date?: string;
}

export interface INewPost {
    body: string;
    title: string;
}

export interface IActionP{
    type:string,
    payload:{}
}

export interface IAction{
    type:string
}