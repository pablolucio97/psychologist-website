import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white100};

  & .testimonialCard{
  width: 320px;
  }

  & .groupInfoTitle{
  color: ${({ theme }) => theme.colors.white100};
  text-align: left;
 }

 &  .groupInfoText{
  color: ${({ theme }) => theme.colors.white100};
  text-align: justify;
 }

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
    margin-right: 56px;
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
  margin-bottom: 40px;
  
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
  @media(max-width: 720px){
    padding: 0;
  }
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


export const TestimonialsSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 40vh;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const TestimonialsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1900px;
  margin: 0 auto;
  padding: 80px 40px 40px 0;
  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
    text-align: center;
    @media(max-width: 720px){
     
    }
  }
  @media (max-width: 1080px) {
    flex-direction: column;
  }
  @media(max-width: 720px){
  padding: 0;
  margin: 40px auto;
}
`;

export const TestimonialsCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 56px auto 0;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const MetricsSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 40vh;
  background: -webkit-linear-gradient(-11deg, rgb(95, 44, 222), rgb(44, 121, 222));
  background: linear-gradient(-11deg, rgb(95, 44, 222), rgb(44, 121, 222));
`;

export const MetricsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1900px;
  margin: 0 auto;
  padding: 80px 40px;
  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 800;
    margin-bottom: 40px;
    @media (max-width: 1080px) {
      margin-bottom: 0;
    }
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const CountUpGroupContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0;
  }
`;
export const CountUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 320px;
  margin: 0 auto;
  padding: 12px;
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 500;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: 120px;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 40vh;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1900px;
  margin: 0 auto;
  padding: 80px 40px 0;
  background-color: ${({ theme }) => theme.colors.white100};
  @media (max-width: 720px) {
    padding: 40px 40px 0;
  }
`;

export const ContactSectionContentContainer = styled.div`
  display: flex;
  align-items: space-evenly;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactSectionMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 12px auto;
  align-self: center;
`;

export const ContactSectionContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 50%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
export const ContactSectionSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`;
export const ContactSectionAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  & p, span{
    text-align: center;
  }
`;

export const ContactSectionCommunicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`;

export const SocialItemContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

