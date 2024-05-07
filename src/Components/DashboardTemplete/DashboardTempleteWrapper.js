import styled from "styled-components";

const DashboardTempleteWrapper = styled.section`
  display: flex;
  height: 100vh;
  aside {
    background-color: #152238;
    color: white;
    width: 200px;
    position: sticky;
    top: 0;
    span {
      font-size: 10px;
    }
    .list-group {
      .list-group-item {
        background-color: rgba(255,255,255, 0.6);
        border-radius: 10px;
        border: 1px solid #eee;
        margin-bottom: 10px;
      }
      a{
        color: black;
        text-decoration: none;
        display: block;
      }
    }
  }
  .rightSide {
    flex: 1;
    max-height: 100vh;
    overflow: auto;
    header {
      position: sticky !important;
      top: 0 !important;
      background-color: white;
      z-index: 1000;
    }
    main {
      input {
        border-radius: 10px;
        border: 0cap.5px solid gray;
        height: 40px;
      }
    }
  }
`;

export default DashboardTempleteWrapper;
