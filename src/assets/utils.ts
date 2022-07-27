function getImageUrl(name: string): string {
    return new URL(`./${name}.jpg`, import.meta.url).href;
}
export { getImageUrl };
