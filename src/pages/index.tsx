import type { NextPage } from 'next'
import Head from 'next/head'
import { NextImage } from '../components/Next/NextImage'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import { BannerSection, BannerSectionContainer, ContactSection, ContactSectionAddressContainer, ContactSectionCommunicationContainer, ContactSectionContactInfoContainer, ContactSectionContainer, ContactSectionContentContainer, ContactSectionMapContainer, ContactSectionSocialContainer, Container, CountUpContainer, CountUpGroupContainer, IntroductionSection, IntroductionSectionContainer, IntroductionSectionContentContainer, IntroductionSectionImageContainer, MapContainer, MetricsSection, MetricsSectionContainer, ServicesContainer, ServicesContentContainer, ServicesGroupsContainer, SocialItemContainer, TestimonialsCardsContainer, TestimonialsSection, TestimonialsSectionContainer } from '../styles'
import { googleMapAddress, services, testimonials } from '../data/data'
import { GroupInfo } from '../components/Elements/GroupInfo'
import { TestimonialCard } from '../components/Cards/TestimonialCard'
import { RevealFade } from '../components/Animations/RevealFade'
import { SubTitle } from '../components/Typography/SubTitle'
import dynamic from 'next/dynamic'
import { GoogleMap } from '../components/Elements/GoogleMap'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

const CountUp = dynamic(() => import('react-countup'), { ssr: false })

const Home: NextPage = () => {

  return (
    <Container style={{ marginBottom: 120 }}>
      <Head>
        <title>Simone Pscicologia</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites institucionais para o seu negócio." />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages" />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#000000" />
      </Head>
      <BannerSection id='home'>
        <BannerSectionContainer />
      </BannerSection>
      <IntroductionSection id='quemsoueu'>
        <IntroductionSectionContainer>
          <IntroductionSectionImageContainer>
            <NextImage
              height={576}
              width={384
              }
              imgUrl='/woman.png'
            />
          </IntroductionSectionImageContainer>

          <IntroductionSectionContentContainer>
            <Title
              content='Quem sou eu'
            />
            <Text
              content='Meu nome é Simone Alvarenga sou formada em psicologia pela Universidade de São Paulo e venho trabalhando como psicóloga há mais de 17 anos.'
            />
            <Text
              content='Com o propósito de ajudar o máximo de pessoas possíveis, me especializei no estudo da mente humana. Hoje atuo com diversos tratamento que auxiliam na recuperação de experiências traumáticas e psicologicamente prejudiciais.'
            />
          </IntroductionSectionContentContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <ServicesContainer id='tratamentos'>
        <ServicesContentContainer>
          <Title
            content='Tratamentos'
          />
          <ServicesGroupsContainer>
            {
              services.map(service => (
                <GroupInfo
                  key={service.title}
                  title={service.title}
                  content={service.content}
                  titleClassName='groupInfoTitle'
                  contentClassName='groupInfoText'
                  className='groupContent'
                />
              ))
            }

          </ServicesGroupsContainer>
        </ServicesContentContainer>
      </ServicesContainer>
      <TestimonialsSection id='oquedizem'>
        <TestimonialsSectionContainer>
          <Title
            content='O que meus clientes dizem'
          />
          <TestimonialsCardsContainer>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                personName={testimonial.name}
                personPhotoUrl={testimonial.url}
                testimonial={testimonial.testimonial}
                cardClassName='testimonialCard'
              />
            ))}
          </TestimonialsCardsContainer>
        </TestimonialsSectionContainer>
      </TestimonialsSection>
      <MetricsSection id='experiencia'>
        <MetricsSectionContainer>
          <RevealFade>
            <Title
              content='Experiência'
            />
          </RevealFade>
          <CountUpGroupContainer>
            <CountUpContainer>
              <CountUp
                start={100}
                end={200}
                prefix='+ de '
                className='countUp'
                duration={3}
              />
              <SubTitle
                content='Atendimentos realizados'
              />
            </CountUpContainer>
            <CountUpContainer>
              <CountUp
                start={20}
                end={80}
                prefix='+ de '
                className='countUp'
                duration={3}
              />
              <SubTitle
                content='Lares transformados'
              />
            </CountUpContainer>

            <CountUpContainer>
              <CountUp
                start={4}
                end={17}
                prefix='+ de '
                className='countUp'
                duration={4}
              />
              <SubTitle
                content='Anos de profissão'
              />
            </CountUpContainer>

          </CountUpGroupContainer>
        </MetricsSectionContainer>
      </MetricsSection>
      <ContactSection id='contato'>
        <ContactSectionContainer>
          <Title
            content='Contato'
          />
          <ContactSectionContentContainer>
            <ContactSectionMapContainer>
              <SubTitle
                content='Visite nossa unidade'
              />
              <MapContainer>
                <GoogleMap
                  addressUrl={googleMapAddress}
                  size='small'
                />
              </MapContainer>
            </ContactSectionMapContainer>
            <ContactSectionContactInfoContainer>
              <ContactSectionSocialContainer>
                <SubTitle
                  content='Redes sociais'
                />
                <SocialItemContainer>
                  <FiInstagram className='socialContactIcons' />
                  <Text
                    content='@ramirezesesteticaclinic'
                  />
                </SocialItemContainer>
                <SocialItemContainer>
                  <FiFacebook className='socialContactIcons' />
                  <Text
                    content='ramirezesesteticaclinic'
                  />
                </SocialItemContainer>
                <SocialItemContainer>
                  <FiLinkedin className='socialContactIcons' />
                  <Text
                    content='ramirezesestetica-234221'
                  />
                </SocialItemContainer>
              </ContactSectionSocialContainer>
              <ContactSectionAddressContainer>
                <SubTitle
                  content='Endereço'
                />
                <Text
                  content='Rua João Ozório, número 123, João Monlevade - MG.'
                />
              </ContactSectionAddressContainer>
              <ContactSectionCommunicationContainer>
                <SubTitle
                  content='Contato'
                />
                <Text
                  content='(31) 991234123'
                />
                <Text
                  content='esthetic-clinic@ramirez.com'
                />
              </ContactSectionCommunicationContainer>
            </ContactSectionContactInfoContainer>
          </ContactSectionContentContainer>
        </ContactSectionContainer>
      </ContactSection>
 
    </Container>
  )
}

export default Home
