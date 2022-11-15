import { useEffect, useState, useMemo } from 'react';
import { dataApi } from '../api/data.service';
import Button from '../Button/Button.component';
import MessageList from '../Message/MessageList.component';
import Message from '../models/Message';
import TopicList from '../TopicList/TopicList.component';

import './Board.component.scss';

const Board = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const topicsToRender = useMemo(
    () => getUniqueTopicsFromMessages(messages),
    [messages]
  );

  const messagesToRender = useMemo(
    () => filterMessagesByTopic(messages, activeTopic),
    [messages, activeTopic]
  );

  useEffect(() => {
    dataApi.getMessages().then(setMessages);
  }, []);

  return (
    <div className="board-container">
      {activeTopic ? (
        <>
          <Button onClick={() => setActiveTopic(null)}>Back to topics</Button>
          <MessageList messages={messagesToRender} />
        </>
      ) : (
        <TopicList topicList={topicsToRender} onSelectTopic={setActiveTopic} />
      )}
    </div>
  );
};

function getUniqueTopicsFromMessages(messages: Message[]) {
  const uniqueTopics = new Set<string>();
  messages.forEach((message) => {
    uniqueTopics.add(message.topic);
  });
  return Array.from(uniqueTopics);
}

function filterMessagesByTopic(messages: Message[], topic: string | null) {
  if (!topic) return [];
  return messages.filter((message) => message.topic === topic);
}

export default Board;
