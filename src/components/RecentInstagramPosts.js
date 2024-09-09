import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AutoScroll from './AutoScroll'; // Assuming AutoScroll is in the same directory

const EmbedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: auto; /* Allow height to adjust based on content */
  margin-bottom: 20px; /* Add space between posts */
`;

const RecentPosts = styled.h2`
  text-align: center;
`;

const RecentInstagramPosts = () => {
    const [embeds, setEmbeds] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Use URL constructor to avoid double slashes
            const endpoint = new URL(`/instagram/theonlywill_`, process.env.REACT_APP_API_URL);
            const response = await axios.get(endpoint);
            const shortcodes = response.data;
    
            const embedHTMLs = shortcodes.map(shortcode => {
                return `
                    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/${shortcode}/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style="background:#FFF; border:0; margin: 0; padding:0; width:100%;">
                    </blockquote>
                    <script async src="//www.instagram.com/embed.js"></script>
                `;
            });
            setEmbeds(embedHTMLs);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, [apiUrl]);
    
      

    useEffect(() => {
        if (embeds.length > 0) {
            // Ensure the Instagram embed script runs after embeds are added
            const script = document.createElement('script');
            script.src = '//www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, [embeds]);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <RecentPosts>Recent Instagram Posts</RecentPosts>
            <AutoScroll speed={2}> {/* Adjust duration for scroll speed */}
                {embeds.map((embedHTML, index) => (
                    <EmbedContainer key={index} dangerouslySetInnerHTML={{ __html: embedHTML }} />
                ))}
            </AutoScroll>
        </div>
    );
};

export default RecentInstagramPosts;
