import "./MeetTeamCard.css";

type MeetTeamCardProps = {
  name: string;
  title: string;
  img: string;
};

export default function MeetTeamCard({ title, name, img }: MeetTeamCardProps) {
  return (
    <div className="MeetTeamCard">
      <img src={img} alt={title} className="MeetTeamCard-image" />
      <h2>{name}</h2>
      <h3>{title}</h3>
    </div>
  );
}

