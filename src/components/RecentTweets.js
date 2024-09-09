import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styled from 'styled-components';
import AutoScroll from './AutoScroll';

const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;

const TwitterContainer = styled.div`
  overflow: hidden;
  max-height: 800px; /* Adjust this value to show approximately 10 tweets */
  border-radius: 10px;

  .twitter-timeline {
    height: auto !important;
  }
  iframe {
    max-height: 4600px;
    height: 4600px !important;
  }
`;

const RecentTweets = () => {
  return (
    <div>
      <Title>Recent Tweets</Title>
      <TwitterContainer>
        <AutoScroll duration={600} speed={2}> {/* Adjust the duration to match the number of visible tweets */}
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="The0nlyWill"
            options={{ tweetLimit: 10 }}
          />
        </AutoScroll>
      </TwitterContainer>
    </div>
  );
};

export default RecentTweets;
