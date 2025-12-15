import "./TitleCard.css";

type TitleCardProps = {
  title: string;
  description: string; 
  img1: string;
  img2: string;
};

export default function TitleCard({ title, description, img1, img2 }: TitleCardProps) {
  return (
    <div className="TitleCard">
      <img className="img1" src={img1} />
      
      <div className="titledesc">
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
      
      <img className="img2" src={img2} />
    </div>
  );
}
