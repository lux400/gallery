import styled from "styled-components";

export const VideoBox = styled.article(
  ({ theme }) => `
  background: #f5f5f5;
  flex: 0 0 23%;
  margin: 1%;
  video, img {
    width: 100%;
  }
  
  ${theme.media.md`
  flex: 0 0 31.33333%;
  margin: 1%
  `}
`
);
export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PosterBlock = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  img {
    position: absolute;
  }
`;
