interface SelectFromDataProps {
    name: string;
    data: string[];
    chosen: string;
    setChosen: React.Dispatch<React.SetStateAction<string>>;
}