export function getB64<T extends Blob>(file: T) {
    return new Promise<FileReader['result']>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    })
};
