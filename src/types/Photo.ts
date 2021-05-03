type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailURL: string;
    description?: string | null;
}

export default Photo;