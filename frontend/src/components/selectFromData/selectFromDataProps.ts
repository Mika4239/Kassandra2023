interface SelectFromDataProps {
    name: string;
    data: string[];
    dataTranslate: (key: string, index? : number) => string;
}