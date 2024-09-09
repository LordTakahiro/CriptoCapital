import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AutoScroll from './AutoScroll';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageContainer = styled.div`
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: ${(props) => (props.alignRight ? 'row-reverse' : 'row')};
  width: 100%;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: ${(props) => (props.alignRight ? '0' : '15px')};
  margin-left: ${(props) => (props.alignRight ? '15px' : '0')};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%; /* Constrains the text to 50% of the container */
`;

const Username = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: #FFFFFF;
  margin-bottom: 5px;
`;

const ReviewContent = styled.p`
  margin: 5px 0 0 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  text-decoration: underline; /* Adds an underline to the title */
`;

const Testimonials = () => {
  const [data, setData] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use URL constructor to avoid double slashes
        const endpoint = new URL('/testimonials', process.env.REACT_APP_API_URL);
        const response = await fetch(endpoint);
        const result = await response.json();
        console.log('Fetched Data:', result);

        const combinedData = [];
        const { discordMessages, whopReviews } = result;

        const maxLength = Math.max(discordMessages.length, whopReviews.length);
        for (let i = 0; i < maxLength; i++) {
          if (discordMessages[i]) combinedData.push({ ...discordMessages[i], isDiscord: true });
          if (whopReviews[i]) combinedData.push({ ...whopReviews[i], isDiscord: false });
        }
        
        setData(combinedData);
      } catch (error) {
        console.error('Error fetching testimonials and reviews:', error);
      }
    };

    fetchData();
}, [apiUrl]);

  

  return (
    <>
      <SectionTitle>Discord and Whop Reviews</SectionTitle>
      <AutoScroll duration={30}>
        <Container>
          {data.map((item, index) => (
            <MessageContainer key={index} alignRight={!item.isDiscord}>
              <Avatar
                src={item.avatar}
                alt={`${item.isDiscord ? item.username : item.reviewer} avatar`}
                alignRight={!item.isDiscord}
              />
              <Content>
                <Username>{item.isDiscord ? item.username : item.reviewer}</Username>
                <Timestamp>{item.timestamp}</Timestamp>
                <ReviewContent>{item.isDiscord ? item.content : item.reviewText}</ReviewContent>
              </Content>
            </MessageContainer>
          ))}
        </Container>
      </AutoScroll>
    </>
  );
};

export default Testimonials;
