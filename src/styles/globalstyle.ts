import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.default};
    }
    
    html{
        font-family: monospace;
        scroll-behavior: smooth;
        background: ${(props) => props.theme.colors.element_base};
    }
    body{
        overflow-x: hidden;
        width: 100%;
        height: 100vh;
    }
    button{
        display: flex;
        justify-content: center;
        text-align: center;
        border: none;
        cursor: pointer;
        padding: 4px;
    }
    li, ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    
    .active-modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 320px;
        height: 240px;
        padding: 1rem;
        background: ${(props) => props.theme.colors.element_base};
        border-radius: 4px;
        margin: 25% auto;
        h3{
            font-size: 1.24rem;
            color: ${(props) => props.theme.colors.black100}
        }
        @media(max-width: 720px){
            width: 92%;
        }
  }

  .video-modal{
      background: transparent;
      @media (max-width: 720px) {
        margin: 12px auto;
        align-self: center;
     }
  }

  .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
  }

  .react-modal-overlay-video{
        background: rgba(0, 0, 0, .88);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
  }

  .collapsible-info-parent{
    width: 100%;
    cursor: pointer;
  }

  .accordionContent{
    padding: 14px;
    color: ${({ theme }) => theme.colors.secondary_light};
    font-size: ${({ theme }) => theme.sizes.medium};
  }
  
  .accordionContainer{
    color: ${({ theme }) => theme.colors.primary_light};
    font-weight: 800;
  }
  .openedAccordionContainer{
    color: ${({ theme }) => theme.colors.primary_light};
    font-weight: 500;
    padding: 14px 32px 0;
  }

  .headerScrolling {
    position: fixed;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .headerNotScrolling {
    background-color: transparent;
  }

  .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
  }
  .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
  }

  .countUp{
    font-size: ${({ theme }) => theme.sizes.xxhuge};
    font-weight: 800;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    @media(max-width: 1080px){
      font-size: ${({ theme }) => theme.sizes.xhuge};
    }
    @media(max-width: 720px){
      font-size: ${({ theme }) => theme.sizes.huge};
    }
  }

  .glassEffect {
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.54);
    transition: all 1s ease;
  }

  .rgbBackground{
    background: linear-gradient(45deg,  
      ${({ theme }) => theme.colors.error}, 
     ${({ theme }) => theme.colors.secondary});
  }

 .groupContent{
  width: 320px;
  display: flex;
  justify-content: flex-start;
  margin: 24px;
 }

 .groupInfoTitle{
  color: ${({ theme }) => theme.colors.white100};
  text-align: left;
 }

 .groupInfoText{
  color: ${({ theme }) => theme.colors.white100};
  text-align: justify;
 }

`;
