import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaTiktok } from 'react-icons/fa';
import AutoScroll from './AutoScroll';

const Title = styled.h2`
  text-align: center;
`;

const TikTok = styled.div`
  background: #000000;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const TikTokText = styled.p`
  margin: 0;
  padding-left: 10px;
`;

const RecentTikToks = () => {
  const [tikToks, setTikToks] = useState([]);

  useEffect(() => {
    // Mock data
    const fetchTikToks = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Mock API
      setTikToks(response.data.slice(10, 20));
    };
    fetchTikToks();
  }, []);

  return (
    <div>
      <Title>Recent TikToks</Title>
      <AutoScroll duration={20}>
        {tikToks.map((tikTok) => (
          <TikTok key={tikTok.id}>
            <FaTiktok size={24} />
            <TikTokText>{tikTok.title}</TikTokText>
          </TikTok>
        ))}
      </AutoScroll>
    </div>
  );
};

export default RecentTikToks;
