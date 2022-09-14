import "./styles.css"

interface CardTokenizeProps {
    className?: string;
    data: {
        title1: string;
        description1: string;
        title2: string;
        description2: string;
    }
}

export const CardTokenize = ({ className = "", data }: CardTokenizeProps) => {
    return (
        <div className={`${className} card-tokenize`}>
            <div className="card-tokenize__content">
                <div className="card-tokenize__content__title">{data.title1}</div>
                <div className="card-tokenize__content__description">{data.description1}</div>
            </div>
        </div>
    );
};

export default CardTokenize
