import type { NextPage } from 'next'
import Head from 'next/head'
import { NextImage } from '../components/Next/NextImage'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import { BannerSection, BannerSectionContainer, Container, CountUpContainer, CountUpGroupContainer, IntroductionSection, IntroductionSectionContainer, IntroductionSectionContentContainer, IntroductionSectionImageContainer, MetricsSection, MetricsSectionContainer, ServicesContainer, ServicesContentContainer, ServicesGroupsContainer, TestimonialsCardsContainer, TestimonialsSection, TestimonialsSectionContainer } from '../styles'
import { services, testimonials } from '../data/data'
import { GroupInfo } from '../components/Elements/GroupInfo'
import { TestimonialCard } from '../components/Cards/TestimonialCard'
import { RevealFade } from '../components/Animations/RevealFade'
import { SubTitle } from '../components/Typography/SubTitle'
import dynamic from 'next/dynamic'

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
      <IntroductionSection>
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
      <ServicesContainer>
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
 
    </Container>
  )
}

export default Home
