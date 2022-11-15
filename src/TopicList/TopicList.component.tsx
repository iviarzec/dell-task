import Topic from './Topic/Topic.component';

import './TopicList.component.scss';

interface TopicListProps {
  topicList: string[];
  onSelectTopic: (selectedTopic: string) => void;
}

const TopicList = ({ topicList, onSelectTopic }: TopicListProps) => {
  return (
    <div>
      {topicList.map((topic) => (
        <Topic key={topic} topicName={topic} onSelectTopic={onSelectTopic} />
      ))}
    </div>
  );
};

export default TopicList;
