import './Topic.component.scss';

interface TopicProps {
  topicName: string;
  onSelectTopic: (selectedTopic: string) => void;
}

const Topic = ({ topicName, onSelectTopic }: TopicProps) => {
  return (
    <div className="topic" onClick={() => onSelectTopic(topicName)}>
      {topicName}
    </div>
  );
};

export default Topic;
