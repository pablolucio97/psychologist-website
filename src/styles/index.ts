import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white100};
`


export const BannerSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 120vh;

  @media(max-width: 1440px){
     min-height: 90vh;
  } 
  @media(max-width: 1080px){
    min-height: 56vh;
  }
  @media(max-width: 720px){
    min-height: 40vh;
  }
`;

export const BannerSectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: url("/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IntroductionSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 64vh;
`;

export const IntroductionSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 1900px;
    padding:  40px 40px 0 40px;
    margin: 0 auto;
    @media(max-width: 720px){
      width: 100%;
      flex-direction: column-reverse;
    }
    `;
export const IntroductionSectionImageContainer = styled.div`
    display: flex;
    width: 40%;
    @media(max-width: 720px){
      width: 100%;
    }
    `;
export const IntroductionSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40%;
  padding-right: 32px;
 
  @media(max-width: 720px){
    width: 100%;
    padding-right: 0;
    flex-direction: column;
    justify-content: space-between;
    & h1{
    margin-bottom: 12px;
    margin-top: 12px;
  }
    
  }
  `;

export const ServicesContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 64vh;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.secondary_light};
`
export const ServicesContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary_light};
  & h1{
    margin: 40px auto 16px;
    color: ${({ theme }) => theme.colors.white100};
  }

`;
export const ServicesGroupsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MetricsSection = styled.section`

`;

export const TestimonialsSection = styled.section`
  display: flex;
`;





export const MetricsSectionContainer = styled.div`
  display: flex;
`;

export const TestimonialSectionContainer = styled.div`
  display: flex;
`;
