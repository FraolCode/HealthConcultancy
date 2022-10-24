import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';

export default function MyChatComponent({currentUser,otherUser}) {
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);
  Talk.ready.then(() => markTalkLoaded(true));

  useEffect(() => {
    if (talkLoaded) {
      

      const session = new Talk.Session({
        appId: 'txCHGCC2',
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createInbox();
      chatbox.select(conversation);
      chatbox.mount(document.getElementById('rrr'));

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return <div id='rrr' ref={chatboxEl}   style={{ height: "500px", width: "700px" }}>
    <span>Loading...</span>
  </div>;
}