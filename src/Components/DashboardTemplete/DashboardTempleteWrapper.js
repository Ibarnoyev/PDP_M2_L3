import styled from "styled-components";

const DashboardTempleteWrapper = styled.section`
  display: flex;
  height: 100vh;
  aside {
     background-color: #fffced;
     width: 240px;
     span{
      font-size: 10px;
      
    }
  }
  .rightSide{
    flex: 1;
    header{

    }
    main{

      input{
        border-radius: 10px;
        border: 0cap.5px solid gray;
        height: 40px;

      }
      
    }
  }
`;

export default DashboardTempleteWrapper;
